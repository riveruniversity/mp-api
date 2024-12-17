import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { URLSearchParams } from 'url';
import { convertToCamelCase, convertToSnakeCase, stringifyURLParams } from './utils/strings';


export type APIGetOneInstance = <T, R>({ id, path, mpOptions, config }: APIGetParameter & { id: number; }) => Promise<R | undefined | { error: ErrorDetails; }>;
export type APIGetMultipleInstance = <T, R>({ path, mpOptions, config }: APIGetParameter) => Promise<R[] | { error: ErrorDetails; }>;
export type APICreateInstance = <T, R>({ path, mpOptions, params, config }: APICreateParameter<T>) => Promise<R | { error: ErrorDetails; }>;
export type APIUpdateInstance = <T, R>({ path, mpOptions, params, config }: APIUpdateParameter<T>) => Promise<R[] | { error: ErrorDetails; }>;


export interface MPApiBase {
  getOne: APIGetOneInstance;
  getMultiple: APIGetMultipleInstance;
  create: APICreateInstance;
  update: APIUpdateInstance;
  get: AxiosInstance['get'];
  post: AxiosInstance['post'];
  put: AxiosInstance['put'];
  getError: (error: AxiosError) => ErrorDetails;
}

export interface ErrorDetails {
  message: string;
  name: string;
  code?: string;
  status?: number;
  method?: string;
  url?: string;
  data: string;
  error: true;
}


const createTokenGetter = (auth: { username: string; password: string; }) => {
  let token: AccessToken | undefined;

  return async () => {
    // If the token is near expiration, get a new one.
    if (!token || token.expiration - 60000 < Date.now()) {
      const tokenRes = await axios.post<TokenData>(
        'https://mp.revival.com/ministryplatformapi/oauth/connect/token',
        new URLSearchParams({
          grant_type: 'client_credentials',
          scope: 'http://www.thinkministry.com/dataplatform/scopes/all',
        }).toString(),
        { auth }
      );
      const [, payload] = tokenRes.data.access_token.split('.');
      try {
        const jsonPayload: { exp: number; } = JSON.parse(
          Buffer.from(payload, 'base64url').toString()
        );
        token = {
          digest: tokenRes.data.access_token,
          expiration: jsonPayload.exp * 1000,
        };
        return token.digest;
      } catch (err) {
        console.error(err);
      }
    } else {
      return token.digest;
    }
  };
};

export const createApiBase = ({ auth }: { auth: { username: string; password: string; }; }): MPApiBase => {
  /**
   * Gets MP oauth token.
   * @returns token
   */
  const getToken = createTokenGetter(auth);
  const api = axios.create({
    baseURL: 'https://mp.revival.com/ministryplatformapi',
  });

  const getOne: APIGetOneInstance = async <T, R>({ id, path, mpOptions, config }) => {
    try {
      const url = `${path}/${id}` + stringifyURLParams(mpOptions);
      const res = await api.get<T>(url, {
        ...config,
        headers: {
          ...config?.headers,
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      return res.data[0] ? convertToCamelCase<T, R>(res.data[0]) : undefined;
    }
    catch (err) {
      return { error: getError(err) };
    }
  };

  const getMultiple: APIGetMultipleInstance = async <T, R>({ path, mpOptions, config }: APIGetParameter) => {
    try {
      const url = path + stringifyURLParams(mpOptions);
      const res = await api.get<T[]>(url, {
        ...config,
        headers: {
          ...config?.headers,
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      return res.data.map(record => convertToCamelCase<T, R>(record));
    }
    catch (err) {
      return { error: getError(err) };
    }
  };


  const create: APICreateInstance = async <T, R>({ path, mpOptions, params, config }: APICreateParameter<T>) => {
    const query = stringifyURLParams(mpOptions);
    const data = [convertToSnakeCase<T>(params)];
    try {
      const res = await api.post(path + query, data, {
        ...config,
        headers: {
          ...config?.headers,
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      return convertToCamelCase<any, R>(res.data[0]);
    }
    catch (err) {
      return { error: getError(err) };
    }

  };


  const update: APIUpdateInstance = async <T, R>({ path, mpOptions, params, config }: APIUpdateParameter<T>) => {
    const query = stringifyURLParams(mpOptions);
    const data = params.map(r => convertToSnakeCase<T>(r));
    try {
      const res = await api.put(path + query, data, {
        ...config,
        headers: {
          ...config?.headers,
          Authorization: `Bearer ${await getToken()}`,
        },
      });
      return res.data.map(record => convertToCamelCase<any, R>(record));
    }
    catch (err) {
      return { error: getError(err) };
    }

  };

  const get = async <T = any, R = AxiosResponse<T, any>>(
    url: string,
    config?: AxiosRequestConfig
  ) =>
    api.get<T, R>(url, {
      ...config,
      headers: {
        ...config?.headers,
        Authorization: `Bearer ${await getToken()}`,
      },
    });

  const post = async <T, R = AxiosResponse<T, any>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) =>
    api.post<T, R>(url, data, {
      ...config,
      headers: {
        ...config?.headers,
        Authorization: `Bearer ${await getToken()}`,
      },
    });

  const put = async <T, R = AxiosResponse<T, any>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) =>
    api.put<T, R>(url, data, {
      ...config,
      headers: {
        ...config?.headers,
        Authorization: `Bearer ${await getToken()}`,
      },
    });


  const getError = function (error: AxiosError): ErrorDetails {
    return {
      error: true,
      message: error.message,
      name: error.name,
      code: error.code,
      status: error.status,
      method: error.config?.method,
      url: error.config?.url,
      data: error.config?.data
    };
  };

  return {
    create,
    update,
    get,
    put,
    post,
    getOne,
    getMultiple,
    getError
  };
};





interface TokenData {
  access_token: string;
  expires_in: number;
  token_type: 'Bearer';
}

interface AccessToken {
  digest: string;
  expiration: number;
}

export type MPGetOptions = {
  select?: string;
  filter?: string;
  orderBy?: string;
  groupBy?: string;
  top?: number;
  skip?: number;
  distinct?: boolean;
};

export type MPCreateOptions = {
  userId?: number;
  select?: string;
};

export type MPUpdateOptions = MPCreateOptions;

interface APIGetParameter {
  path: string;
  mpOptions?: MPGetOptions;
  config?: AxiosRequestConfig;
}

interface APICreateParameter<T> {
  path: string;
  params: T,
  mpOptions?: MPCreateOptions;
  config?: AxiosRequestConfig;
};

interface APIUpdateParameter<T> {
  path: string;
  params: T[],
  mpOptions?: MPCreateOptions;
  config?: AxiosRequestConfig;
};