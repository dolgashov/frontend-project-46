### Hexlet tests and linter status:
[![Actions Status](https://github.com/dolgashov/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/dolgashov/frontend-project-46/actions)

[![Actions Status](https://github.com/dolgashov/frontend-project-46/actions/workflows/node-check.yml/badge.svg)](https://github.com/dolgashov/frontend-project-46/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/86e5e437f412e8f140db/maintainability)](https://codeclimate.com/github/dolgashov/frontend-project-46/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/86e5e437f412e8f140db/test_coverage)](https://codeclimate.com/github/dolgashov/frontend-project-46/test_coverage)

# Вычислитель различий

Данный проект представляет собой консольную утилиту для сравнения двух объектов. Объекты считываются только из файлов форматов JSON, YML и YAML.


# Пример работы

Показывает различия между плоскими json файлами
[![asciicast](https://asciinema.org/a/6TDH9fc6XpkSiV6SN5vMsOVhE.svg)](https://asciinema.org/a/6TDH9fc6XpkSiV6SN5vMsOVhE)

Показывает различия между yaml/yml файлами
[![asciicast](https://asciinema.org/a/OlV88CH3qsywcwejv2fB3nlhj.svg)](https://asciinema.org/a/OlV88CH3qsywcwejv2fB3nlhj)

Пример работы рекурсивного сравнения 
[![asciicast](https://asciinema.org/a/UCPVi1pezhJl0fbcVxT90w0Iv.svg)](https://asciinema.org/a/UCPVi1pezhJl0fbcVxT90w0Iv)

Пример работы функции сравнения файлов с возможностью выбора вида представления результата
[![asciicast](https://asciinema.org/a/Ouqg6l6XAOhGoRHmYopLVkfv5.svg)](https://asciinema.org/a/Ouqg6l6XAOhGoRHmYopLVkfv5)

Пример работы функции сравнения с выводом в структурированном формате json
[![asciicast](https://asciinema.org/a/IlnQjgSMYROpLnGKsBISAcoxj.svg)](https://asciinema.org/a/IlnQjgSMYROpLnGKsBISAcoxj)

# Установка

```bash
git clone git@github.com:sseezov/frontend-project-46.git
cd frontend-project-46
make install
```

# Использование

```bash
gendiff [options] <filepath1> <filepath2>
например: gendiff -f plain file1.json file2.yaml
```
```bash
options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           display help for command
```

Программа умеет выводить различия в трех форматах, по умолчанию это формат stylish. Также это могут быть plain и json. Для вывода результата согласно определенному формату введите -f [format]

```bash
gendiff -f plain file1.json file2.yaml
```

Пример такого вывода:
```bash
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]
```