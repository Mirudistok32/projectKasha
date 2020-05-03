export class Aphorisms {
  _aphorisms = [
    {
      id: 1,
      text: `Успех приходит лишь к тем, кто не боится столкнуться с трудностями и пожертвовать своими благами.`,
      author: "Джеймс Аллен",
    },
    {
      id: 2,
      text: `Каждый поступок продолжает созидать нас самих.`,
      author: "Фридрих Ницше",
    },
    {
      id: 3,
      text: `Тысячи гениев живут и умирают безвестными —либо не узнанными другими, либо не узнанными самими собо.`,
      author: "Марк Твен",
    },
    {
      id: 4,
      text: `Неудачи дают только повод начать снова и более умно. Честная неудача не позорна; позорен страх перед неудачей.`,
      author: "Генри Форд",
    },
    {
      id: 5,
      text: `Всегда старайтесь. Пусть всегда все заканчивается неудачно. Это неважно. 
        Попытайтесь снова, даже если вас снова ждет неудача, но эта неудача на этот раз будет не такой тяжелой, как предыдущая.`,
      author: "Сэмюэл Беккет",
    },
    {
      id: 6,
      text: `Страсть — это есть энергично стремящаяся к своему предмету существенная сила человека.`,
      author: "Карл Маркс",
    },
    {
      id: 7,
      text: `Молодость — ошибка, зрелость — борьба, старость — сожаление.`,
      author: "Бенджамин Дизраэли",
    },
    {
      id: 8,
      text: `А в начале пути мало кто в нас верил, не правда ли?`,
      author: "Квентин Тарантино",
    },
    {
      id: 9,
      text: `Можешь не верить в себя. Верь в меня. Верь в мою веру в тебя!`,
      author: "Камина",
    },
    {
      id: 10,
      text: `Маленькое тело, обусловленное духом и воодушевленное неугасимой верой в свою миссию, может изменять ход истории.`,
      author: "Махатма Ганди",
    },
    {
      id: 11,
      text: `Если вы решили действовать, закройте двери для сомнений.`,
      author: "Фридрих Ницше",
    },
    {
      id: 12,
      text: `Успех — это ещё не точка, неудача — это ещё не конец: единственное, что имеет значение, — это мужество продолжать борьбу.`,
      author: "Уинстон Черчилль",
    },
    {
      id: 13,
      text: `Не важно, как медленно ты продвигаешься, главное, что ты не останавливаешься.`,
      author: "Брюс Ли",
    },
    {
      id: 14,
      text: `Будь счастлив в этот миг. Этот миг и есть твоя жизнь.`,
      author: "Омар Хайям",
    },
    {
      id: 15,
      text: `Один, глядя в лужу, видит в ней грязь, а другой — отражающиеся в ней звёзды.`,
      author: "Иммануил Кант",
    },
    {
      id: 16,
      text: `Потому что тот, кто однажды не переборол в себе трусости, будет умирать от страха до конца своих дней`,
      author: "Анджей Сапковский",
    },
  ];

  getAphorisms = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._aphorisms);
      }, 2000);
    });
  };
}
