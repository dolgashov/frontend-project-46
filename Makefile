install:
	npm ci

gendiff:
	node/gendiff.js 

publish:
	npm publish --dry-run

run:
		node bin/gendiff __fixtures__/file1.json ___fixtures__/file2.json