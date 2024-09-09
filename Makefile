install:
	npm ci

gendiff:
	node bin/gendiff.js 

publish:
	npm publish --dry-run

run:
	node bin/gendiff/file1.json file2.json