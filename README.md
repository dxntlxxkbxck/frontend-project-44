### Hexlet tests and linter status:
[![Actions Status](https://github.com/dxntlxxkbxck/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/dxntlxxkbxck/frontend-project-44/actions)

# Brain Games

Brain Games — набор консольных мини-игр, написанных на JavaScript

Проект выполнен в рамках обучения на Hexlet

## Описание проекта

В проекте реализованы консольные игры, запускаемые из терминала
После запуска игра приветствует пользователя, спрашивает его имя и предлагает пройти 3 раунда
Если пользователь отвечает правильно на все вопросы, игра завершается победой
Если пользователь ошибается, игра сразу завершается и показывает правильный ответ

## Минимальные требования

Для запуска проекта необходимы:
* Node.js
* npm
* make
* Git

## Установка

```bash
git clone git@github.com:dxntlxxkbxck/frontend-project-44.git
cd frontend-project-44
make install
npm link
```

## Проверка проекта

Запуск линтера:
```bash
make lint
```

Проверка публикации пакета:
```bash
make publish
```

## Запуск игр

### Приветствие пользователя

```bash
brain-games
```
Команда запускает приветствие пользователя

Демонстрация игры:
[Asciinema](https://asciinema.org/a/CeTHQxycaENKLDhK)

### Игра "Проверка на чётность"

```bash
brain-even
```

Правила игры:
Нужно ответить `yes`, если число чётное, и `no`, если число нечётное

Демонстрация игры:
[Asciinema](https://asciinema.org/a/cAhLtySkIoSpzcRA)

### Игра "Калькулятор"

```bash
brain-calc
```

Правила игры:
Нужно вычислить результат математического выражения
Поддерживаемые операции:
* сложение
* вычитание
* умножение

Демонстрация игры:
[Asciinema](https://asciinema.org/a/Pg1lDLL3MVjJmZWW)

### Игра "НОД"

```bash
brain-gcd
```

Правила игры:
Нужно найти наибольший общий делитель двух чисел

Демонстрация игры:
[Asciinema](https://asciinema.org/a/BOsj8quh4IcpykVL)

### Игра "Арифметическая прогрессия"

```bash
brain-progression
```

Правила игры:
Нужно определить пропущенное число в арифметической прогрессии

Демонстрация игры:
[Asciinema](https://asciinema.org/a/gag2g6x4IhAHn5Wo)

### Игра "Простое ли число?"
```bash
brain-prime
```

Правила игры:
Нужно ответить `yes`, если число простое, и `no`, если число не является простым

Демонстрация игры:
[Asciinema](https://asciinema.org/a/DZo7wrKgfF4sjSRE)

## Пример успешного прохождения
brain-even
[Asciinema](https://asciinema.org/a/2SW3JxSWQjgn5MCB)

## Пример неудачного прохождения
brain-even
[Asciinema](https://asciinema.org/a/4fRuxsgskurJBtzn)


## Архитектура проекта

Общая логика запуска игр вынесена в отдельный модуль:
```text
src/index.js
```

Код каждой игры расположен в отдельном модуле внутри директории:
```text
src/games
```

Исполняемые файлы расположены в директории:
```text
bin
```

Структура проекта:
```text
bin/
  brain-games.js
  brain-even.js
  brain-calc.js
  brain-gcd.js
  brain-progression.js
  brain-prime.js

src/
  cli.js
  index.js
  games/
    even.js
    calc.js
    gcd.js
    progression.js
    prime.js
```

## SonarQube

Подключить SonarQube на текущем этапе не удалось из-за ошибки на стороне интерфейса сервиса
При попытке открыть компонент проекта SonarQube выводит сообщение:
```text
The component cannot be loaded. Try again later.
```
Проблема воспроизводилась как без VPN, так и с VPN
После восстановления доступа к сервису SonarQube в README будут добавлены соответствующие бейджи

## Технологии

* JavaScript
* Node.js
* readline-sync
* ESLint
* Stylistic ESLint
* Makefile
* GitHub Actions