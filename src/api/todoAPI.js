export class todoApi {
  _todo = [
    {
      title: "Создать ютьюб",
      id: 1,
      text: "Надо начать с изучения основ фронтенд-разработки",
      important: false,
      done: false,
    },
    {
      title: "Запустить ракету",
      id: 2,
      text:
        "Прочитать про гравитацию земли и изучить учебник по ракетустроению",
      important: false,
      done: false,
    },
    {
      title: "Сделать селфи на фоне моря",
      id: 3,
      text: "Сделать это под углом в 45 градусов против солнца",
      important: false,
      done: false,
    },
    {
      title: "Написать программу про продажу планет",
      id: 4,
      text:
        "Сделать это ввиде декстопного приложения, и адаптировать его под мобилку",
      important: false,
      done: false,
    },
    {
      title: "Завершенное действоб для примеру",
      id: 5,
      text:
        "Сделать это ввиде декстопного приложения, и адаптировать его под мобилку",
      important: false,
      done: true,
    },
  ];

  getTodo = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._todo);
      }, 2000);
    });
  };
}
