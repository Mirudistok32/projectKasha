import React from "react";
import s from "./ButtonNewItems.module.scss";
import ContainerModalNewItemsNewItems from './ModalNewItems/ContainerModalNewItemsNewItems'

const ButtonNewItems = ({ isModalWindowAddItem, isModalWindowAddItemAc }) => {

  return (<>
    {
      isModalWindowAddItem && <ContainerModalNewItemsNewItems />
    }
    <button className={s.buttonNewItems} onClick={isModalWindowAddItemAc}>
      Добавить новый To DO
    </button>
  </>
  );
}

export default ButtonNewItems;
