
import path from 'node:path';
import { readFileSync } from 'node:fs';
import _ from 'lodash';


const resolvePath = (filePath) => path.resolve(process.cwd(), '__fixtures__', filePath);

export const gendiff = (path1, path2) => {
  const fullPath1 = resolvePath(path1);
  const fullPath2 = resolvePath(path2);

  const file1 = readFileSync(fullPath1, 'utf-8');
  const file2 = readFileSync(fullPath2, 'utf-8');
  
  const data1 = JSON.parse(file1);
  const data2 = JSON.parse(file2);

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
