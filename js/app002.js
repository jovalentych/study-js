/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
/*
"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a = prompt("Один из последних просмотренных фильмов?", ""),
  b = +prompt("На сколько оцените его?", "0"),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = +prompt("На сколько оцените его?", "0");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
*/

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";
/*
// Код возьмите из предыдущего домашнего задания

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
let counter = numberOfFilms;
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

while (counter != 0) {
  let a = prompt("Один из последних просмотренных фильмов?", ""),
    b = +prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length <= 50) {
    personalMovieDB.movies[a] = b;
    console.log("DONE");
  } else {
    console.log("ERROR");
    counter++;
  }
  counter--;
}

if (personalMovieDB.count < 10) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
  alert("Вы киноман");
} else {
  alert("Произошла ошибка");
}

console.log(personalMovieDB);
*/
/*
3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

Примеры:

Вызов функции getMathResult(5, 3) даст ответ 5---10---15

Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

Вызов функции getMathResult(10, '5') даст ответ 10

Вызов функции getMathResult(10, 0) даст ответ 10

Вызов функции getMathResult(20, -5) даст ответ 20
*/
// Место для третьей задачи

/*

1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.

Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ ** - в онлайн среде браузера он не работает и тесты будут ломаться. Это из-за того, что этот оператор из более нового стандарта, чем тут доступен.

Примеры:

calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'


// Место для первой задачи
function calculateVolumeAndArea(a) {
  if (a == "" || a < 0 || isNaN(a) || !Number.isInteger(a) || a == null) {
    return "При вычислении произошла ошибка";
  }
  return `Объем куба: ${a * a * a}, площадь всей поверхности: ${6 * a * a}`;
}
console.log(calculateVolumeAndArea(2.7));


function getCoupeNumber(placeNumber) {
  if (
    placeNumber === "" ||
    placeNumber < 0 ||
    isNaN(placeNumber) ||
    !Number.isInteger(placeNumber) ||
    placeNumber === null
  ) {
    return "Ошибка. Проверьте правильность введенного номера места";
  } else if (placeNumber === 0 || placeNumber > 36) {
    return "Таких мест в вагоне не существует";
  } else {
    return Math.ceil(placeNumber / 4);
  }
}

console.log(345 % 60);


function getTimeFromMinutes(minutes) {
  let hrs, min;
  hrs = Math.floor(minutes / 60);
  min = minutes % 60;
  let hrsStr = "",
    minStr = "";

  {
    if (
      minutes < 0 ||
      !Number.isInteger(minutes) ||
      typeof minutes === "string"
    ) {
      return "Ошибка, проверьте данные";
    }
  }

  {
    if (hrs % 10 === 1) {
      hrsStr = "час";
    } else if (
      hrs % 10 > 1 &&
      hrs % 10 < 5 &&
      hrs != 11 &&
      hrs != 12 &&
      hrs != 13 &&
      hrs != 14
    ) {
      hrsStr = "часа";
    } else {
      hrsStr = "часов";
    }
  }

  {
    if (min === 0) {
      minStr = "минут";
    } else if (
      min % 10 > 1 &&
      min % 10 < 5 &&
      min != 11 &&
      min != 12 &&
      min != 13 &&
      min != 14
    ) {
      minStr = "минуты";
    } else {
      minStr = "минут";
    }
  }

  return `Это ${hrs} ${hrsStr} и ${min} ${minStr}`;
}

console.log(getTimeFromMinutes(150));
*/

// Место для второй задачи
function findMaxNumber(a, b, c, d) {
  if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
    return 0;
  }
  const arr = [];
  arr.push(a);
  arr.push(b);
  arr.push(c);
  arr.push(d);
  // console.log(arr[3]);
  return Math.max(...arr);
}

console.log(findMaxNumber());
// console.log(findMaxNumber(1, 4, 5));
