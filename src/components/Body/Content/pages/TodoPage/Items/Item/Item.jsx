import React from "react";
import s from "./Item.module.scss";
import { NavLink } from "react-router-dom";

const Item = React.memo(({ title, done, id, important, setImportant, setDone, setDeleteItem }) => {

  const doneSymbol = done ? 'v' : '';

  return (
    <div className={`${s.item} ${done && s.itemDoneActive}`} >
      <button className={`${s.done} ${done && s.doneActive}`}
        onClick={() => setDone(id)}
        title="Завершено/Незавершено"
      >{doneSymbol}</button>

      <NavLink to={`/todo/${id}`}>{title}</NavLink>

      <button className={`${s.important} ${important && s.importantActive}`}
        onClick={() => setImportant(id)}
        title="Отметить как важное/Отменить"
      >!</button>

      <button className={s.delete}
        onClick={() => setDeleteItem(id)}
        title="Удалить">X</button>
    </div>
  );
})

export default Item;
