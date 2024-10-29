import path from 'node:path';
import { readFileSync } from 'node:fs';
import _ from 'lodash';
import parser from './parsers.js';
import formatter from './formatters/index.js';
import getDifferenceTree from './buildAST.js';

const resolvePath = (filePath) => path.resolve(process.cwd(), filePath);

const getExtension = (fileName) => path.extname(fileName).slice(1);

const getData = (filePath) => parser(readFileSync(filePath, 'utf-8'), getExtension(filePath));

  const gendiff = (filePath1, filePath2, format = 'stylish') => {
    const path1 = resolvePath(filePath1);
    const path2 = resolvePath(filePath2);
  
    const data1 = getData(path1);
    const data2 = getData(path2);

  return formatter(getDifferenceTree(data1, data2), format);
 
};

export default gendiff;
