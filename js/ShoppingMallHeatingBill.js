const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(shopsData) {
  let shoppingMallSqure = 0;

  for (let i in shopsData.shops) {
    let { width, length } = shopsData.shops[i];
    shoppingMallSqure += width * length;
  }
  let heatingBill =
    shoppingMallSqure * shopsData.height * shopsData.moneyPer1m3;
  if (heatingBill <= shopsData.budget) {
    return "Бюджета достаточно";
  } else {
    return "Бюджета недостаточно";
  }
}

console.log(isBudgetEnough(shoppingMallData));
