/*
1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

Пример:

showExperience(personalPlanPeter) => '1 month'

P.S. желательно использовать деструктуризацию, но не обязательно


*/
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
      ruby: "50%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    let str = "";
    let { languages } = personalPlanPeter.skills;
    str = `Мне ${personalPlanPeter.age} и я владею языками: `;
    languages.forEach(function (lang) {
      str += `${lang.toUpperCase()} `;
    });
    return str;
  },
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
/*
function showExperience(plan) {
  const { exp } = plan.skills;
  return exp;
}

console.log(showExperience(personalPlanPeter));
*/

/*
2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

Пример:

showProgrammingLangs(personalPlanPeter)  =>

"Язык js изучен на 20% Язык php изучен на 10%"

Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

P.S. Для переноса строки используется \n в конце строки.

*/

function showProgrammingLangs(plan) {
  let { programmingLangs } = plan.skills;
  let str = "";
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  return str;
}

console.log(showProgrammingLangs(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));

/*
3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

Пример:

personalPlanPeter.showAgeAndLangs(personalPlanPeter)
=> 'Мне 29 и я владею языками: RU ENG'

Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится. 
*/
/*
const family = ["Peter", "Ann", "Alex", "Linda"];

function showFamily(arr) {
  let familyStr = "";
  let familyArr = [...arr];
  if (familyArr.length > 0) {
    for (let member of familyArr) {
      familyStr += `${member} `;
    }
  } else {
    return `Семья пуста`;
  }

  return `Семья состоит из: ${familyStr}.`;
}

console.log(showFamily(family));
*/

{
  const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

  function standardizeStrings(arr) {
    arr.forEach(function (words) {
      console.log(`${words.toLowerCase()}`);
    });
  }

  console.log(standardizeStrings(favoriteCities));
}

const someString = "This is some strange string";

function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(reverse(someString));
