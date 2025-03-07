function jsonToSqlFilter(json: Record<string, any>): string {
  const conditions: string[] = [];

  // Loop through each key-value pair in the JSON object
  for (const [key, value] of Object.entries(json)) {
    let condition = '';

    // If the value is a string, wrap it in quotes
    if (typeof value === 'string') {
      condition = `${key} = '${value}'`;
    }
    // If the value is a number or boolean, no quotes are needed
    else if (typeof value === 'number' || typeof value === 'boolean') {
      condition = `${key} = ${value}`;
    }
    // If the value is an array, assume it represents an IN condition
    else if (Array.isArray(value)) {
      const valueList = value.map(val =>
        typeof val === 'string' ? `'${val}'` : val
      ).join(', ');
      condition = `${key} IN (${valueList})`;
    }
    // If the value is an object, we can assume it's a nested condition (e.g., for complex queries)
    else if (typeof value === 'object') {
      const subConditions = Object.entries(value).map(([subKey, subValue]) => {
        if (typeof subValue === 'string') {
          return `${subKey} = '${subValue}'`;
        } else {
          return `${subKey} = ${subValue}`;
        }
      }).join(' AND ');
      condition = `${key} (${subConditions})`;
    }

    conditions.push(condition);
  }

  // Join the conditions with 'AND'
  return conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
}

// Example Usage
const json1 = {
  name: "John",
  age: 30,
  active: true,
  hobbies: ["reading", "gaming"],
  address: {
    city: "New York",
    zip: "10001"
  }
};

const query1 = jsonToSqlFilter(json1);
console.log(query1);







type QueryCondition = {
  [key: string]: any; // key is field, value is condition or value
};

function jsonToSqlQuery(json: QueryCondition): string {
  const conditions: string[] = [];

  // Loop through each key-value pair in the JSON object
  for (const [key, value] of Object.entries(json)) {
    let condition = '';

    // If the value is an object (operator condition)
    if (typeof value === 'object' && value !== null) {
      const operatorConditions: string[] = [];
      let [operator, operatorValue]: any[] = [null, null];
      for ([operator, operatorValue] of Object.entries(value)) {
        switch (operator) {
          case "$eq":
            operatorConditions.push(`${key} = '${operatorValue}'`);
            break;
          case "$gt":
            operatorConditions.push(`${key} > ${operatorValue}`);
            break;
          case "$lt":
            operatorConditions.push(`${key} < ${operatorValue}`);
            break;
          case "$gte":
            operatorConditions.push(`${key} >= ${operatorValue}`);
            break;
          case "$lte":
            operatorConditions.push(`${key} <= ${operatorValue}`);
            break;
          case "$ne":
            operatorConditions.push(`${key} != '${operatorValue}'`);
            break;
          case "$in":
            const inValues = operatorValue.map((val: any) => typeof val === 'string' ? `'${val}'` : val).join(', ');
            operatorConditions.push(`${key} IN (${inValues})`);
            break;
          case "$like":
            operatorConditions.push(`${key} LIKE '%${operatorValue}%'`);
            break;
          default:
            throw new Error(`Unsupported operator: ${operator}`);
        }
      }
      // Join all conditions for a field with AND
      condition = operatorConditions.join(' AND ');
    } else {
      // For simple equality condition
      condition = `${key} = '${value}'`;
    }

    conditions.push(condition);
  }

  // Join the conditions with AND
  return conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
}

// Example Usage
const json = {
  "age": { "$gt": 30 },
  "name": { "$eq": "John" },
  "status": { "$in": ["active", "pending"] },
  "address.city": { "$eq": "New York" }
};

const query = jsonToSqlQuery(json);
console.log(query);
