import { readFileSync } from 'node:fs';
import path from 'node:path';

const getPath = (filepath) => path.resolve(process.cwd(), filepath)

const parser = (path) => JSON.parse(path)

const read = (filepath) => readFileSync(getPath(filepath))

const gendiff = (filePath1, filePath2) => {
  const file1 = readFileSync(getPath(filePath1))
  const file2 = readFileSync(getPath(filePath2))

  const data1 = parser(file1)
  const data2 = parser(file2)

  console.log(data1);
  console.log(data2);

}
export default gendiff;