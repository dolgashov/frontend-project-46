
import gendiff from '../src/index.js';
import result from '../__fixtures__/result.js';

test('check json plain', () => {
  expect(gendiff('file1.json', 'file2.json')).toEqual(result);
});

test('check yaml plain', () => {
  expect(gendiff('file1.yaml', 'file2.yaml')).toEqual(result);
});

test('check yml plain', () => {
  expect(gendiff('file1.yml', 'file2.yml')).toEqual(result);
});