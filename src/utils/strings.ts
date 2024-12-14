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



export function toCamelCase(str: string) {
  str = str.replace(/((?<=^_|^__))[^\W_]/g, match => match.at(-1)?.toLowerCase() || ''); // keep underscore if first char
  str = str.replace(/(?<!^_|^)_[^\W_]/g, match => match.charAt(1).toUpperCase()); // remove underscore if not first char
  str = str.charAt(0).toLowerCase() + str.slice(1);
  return str.replace(/id$/i, 'ID');
}

export function toCapitalSnakeCase(str: string) {
  str = str.replace(/(?<=^_|^__)[^\W_]/, match => match.at(0)?.toUpperCase() || '');
  str = str.replace(/(?<!_|\/)(ID|[A-Z])/g, match => `_${match}`);
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str.replace(/_id$/i, '_ID');
}

// Function to recursively convert object keys to Capital_Snake_Case
export function caseConverter<T>(obj: T, type: 'toCamel' | 'toSnake') {
  const caseFn = type === 'toCamel' ? toCamelCase : toCapitalSnakeCase;
  if (Array.isArray(obj)) {
    return obj.map(val => caseConverter(val, type)); // Recursively process each array element
  }

  if (obj !== null && typeof obj === 'object') {
    const snakeCaseObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const snakeCaseKey = caseFn(key);  // Convert key to Snake_Case
        snakeCaseObj[snakeCaseKey] = caseConverter(obj[key], type); // Recursively process nested objects
      }
    }
    return snakeCaseObj;
  }

  return obj; // Return value if it's neither an array nor an object
}

export function convertToCamelCase<T = any, R = any>(obj: T): R {
  return caseConverter(obj, 'toCamel');
}

export function convertToSnakeCase<T = any, R = any>(obj: T): R {
  return caseConverter(obj, 'toSnake');
}