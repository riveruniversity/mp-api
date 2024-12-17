export function stringifyURLParams<T = any>(mpOptions: Record<string, T> = {}) {
  return escapeSql(Object.entries(mpOptions).reduce((acc, [key, value]) => {
    if (!acc) {
      acc += `?$${key}=${value}`;
    } else {
      acc += `&$${key}=${value}`;
    }
    return acc;
  }, ''));
}


export function escapeSql(str: string) {
  return str.replace(/%|(?<=\w)'(?=\w)/g, function (char: string) {
    switch (char) {
      case "\0":
        return "\\0";
      case "\x08":
        return "\\b";
      case "\x09":
        return "\\t";
      case "\x1a":
        return "\\z";
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case "%":
        return "%25";
      case "'":
        return "''";
      case "\"":
      case "\\":
        return "\\" + char; // prepends a backslash to backslash, percent,
      // and double/single quotes
      default:
        return char;
    }
  });
}



export function toCamelCase(str: string, { capitalIds = false }: { capitalIds?: boolean; }= {}) {
  str = str.replace('-', '')
  str = str.replace(/^_?[A-Z]{1,3}/, match => match.toLowerCase());                     // Don't convert if start with ID, HS, SMS, etc
  str = str.replace(/(?<=^_|^__)[^\W_]/g, match => match.at(-1)?.toLowerCase() || '');  // keep underscore if first char
  str = str.replace(/(?<!^_|^)_[^\W_]/g, match => match.charAt(1).toUpperCase());       // remove underscore if not first char
  return capitalIds ? str.replace(/id$/i, 'ID') : str;
}

export function toCapitalSnakeCase(str: string, { capitalIds = false, capitalSnake = true }: { capitalIds?: boolean, capitalSnake?: boolean; }= {}) {
  str = str.replace(/(?<=^_|^__)[^\W_]/, match => match.at(0)?.toUpperCase() || '');
  str = str.replace(/(?<!_|\/)(ID|[A-Z])/g, match => `_${match}`);
  str = capitalSnake ? str.charAt(0).toUpperCase() + str.slice(1) : str;
  return capitalIds ? str.replace(/_id$/i, '_ID') : str;
}

// Function to recursively convert object keys to Capital_Snake_Case
export function caseConverter<T>(obj: T, { type, capitalIds = false }: { type: 'toCamel' | 'toSnake', capitalIds?: boolean; }) {
  const caseFn = type === 'toCamel' ? toCamelCase : toCapitalSnakeCase;
  if (Array.isArray(obj)) {
    return obj.map(val => caseConverter(val, { type })); // Recursively process each array element
  }

  if (obj !== null && typeof obj === 'object') {
    const snakeCaseObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const snakeCaseKey = caseFn(key, { capitalIds });  // Convert key to Snake_Case
        snakeCaseObj[snakeCaseKey] = caseConverter(obj[key], { type }); // Recursively process nested objects
      }
    }
    return snakeCaseObj;
  }

  return obj; // Return value if it's neither an array nor an object
}

export function convertToCamelCase<T = any, R = any>(obj: Partial<T>, capitalIds = true): R {
  return caseConverter(obj, { type: 'toCamel', capitalIds });
}

export function convertToSnakeCase<T = any, R = any>(obj: Partial<T>, capitalIds = true): R {
  return caseConverter(obj, { type: 'toSnake', capitalIds });
}

