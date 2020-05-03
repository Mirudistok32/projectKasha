export class CalcFinance {
  _calcFinanceItems = [
    { id: 1, text: "Сходил на ночной каток", number: -700 },
    { id: 2, text: "Сделал слайдер на сайте", number: 500 },
    { id: 3, text: "Сходил в кино", number: -450 },
    { id: 4, text: "Купил яблоки и бананы", number: -150 },
    { id: 5, text: "Написал программу питания для клиента", number: 500 },
    { id: 6, text: "Сделал массаж клиенту", number: 600 },
    { id: 7, text: "Купил телефон", number: -10000 },
    { id: 8, text: "Купил футболку адидас", number: -3400 },
  ];

  getCalcItems = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._calcFinanceItems);
      }, 2000);
    });
  };
}
