import React from "react";
import s from "./ItemPage.module.scss";
import { NavLink } from "react-router-dom";

const ItemPage = ({ title, text }) => {

  return (
    <div className={`${s.itemPage}`}>
      <NavLink to={`/todo`} className={s.btnLink}>{`<<`}</NavLink>
      <div className={s.wrapper}>
        <div className={s.title}>{title}</div>
        <div className={s.text}>{text}</div>
      </div>
    </div>
  );
}

export default ItemPage;
