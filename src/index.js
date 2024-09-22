
import path from 'node:path';
import { readFileSync } from 'node:fs';
import _ from 'lodash';
import parser from './parsers.js';


const resolvePath = (filePath) => path.resolve(process.cwd(), '__fixtures__', filePath);

  const getExtension = (fileName) => path.extname(fileName).slice(1);

  const getData = (filePath) => parser(readFileSync(filePath, 'utf-8'), getExtension(filePath));

  const gendiff = (filePath1, filePath2, format = 'stylish') => {
    const path1 = resolvePath(filePath1);
    const path2 = resolvePath(filePath2);
  
    const data1 = getData(path1);
    const data2 = getData(path2);

  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  
  const result = ['{'];
  for (let key of keys) {
    if (!Object.hasOwn(data2, key)) {
      result.push(`  - ${key}: ${data1[key]}`)
    } else if (!Object.hasOwn(data1, key)) {
      result.push(`  + ${key}: ${data2[key]}`)
    } else {
      if (data1[key] === data2[key]) {
        result.push(`    ${key}: ${data2[key]}`)
      } else {
        result.push(`  - ${key}: ${data1[key]}`)
        result.push(`  + ${key}: ${data2[key]}`)
      }
    }
  };
  result.push('}');
  return result.join('\n');
 
};

export default gendiff;
