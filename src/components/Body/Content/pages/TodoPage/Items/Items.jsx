import React from "react";
import s from "./Items.module.scss";
import Item from './Item/Item'

const Items = ({ items, setDoneAc, setImportantAc, setDeleteItemAc }) => {

  return (
    <section className={s.items}>
      {
        items.map(item => <Item key={item.id}
          id={item.id}
          title={item.title}
          done={item.done}
          important={item.important}
          setImportant={setImportantAc}
          setDone={setDoneAc}
          setDeleteItem={setDeleteItemAc}
        />)
      }
    </section>
  )
}

export default Items;
