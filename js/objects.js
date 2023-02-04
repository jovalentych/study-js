const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
};

// console.log(options.height);

// Перебрати об'єкт. В цьому об'єкті є ще один об'єкт, тому треба в циклі проводити додаткову перевірку на тип
/*
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`The key -${options[i]}- has a value -${options[key][i]}-`);
    }
  } else {
    console.log(`The key -${key}- has a value -${options[key]}-`);
  }
}
*/

// COUNTER
/*
let counter = 0;
for (let key in options) {
  if (typeof options[key] === "object") {
    for (let i in options[key]) {
      console.log(`The key -${options[i]}- has a value -${options[key][i]}-`);
      counter++; // counter of first fork
    }
  } else {
    console.log(`The key -${key}- has a value -${options[key]}-`);
    counter++; // counter of second fork
  }
}

console.log(counter);
*/

// Method Object.keys() --> метод для отримання ключів об'єкта. А вже довжину масива ми можемо отримати за допомогою такої властивості масивів як .length

// console.log(Object.keys(options).length); // але тут УВАГА: масив першого рівня без вкладених об'єктів

/*
const optionsFunc = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red",
  },
  makeTest: function () {
    // це метод який буде працювати всередині об'єкта optionsFunc
    console.log("Test");
  },
};

optionsFunc.makeTest(); // --> Test
*/

//Деструктуризація об'єкта, щоб не викоистовувати таке ['colors']['border']

const { border, bg } = options.colors; // витягнути ключі з вже вкладеного об'єкта colors
console.log(border); // --> black
