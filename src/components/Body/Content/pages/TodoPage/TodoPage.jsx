import React from "react";
import s from "./TodoPage.module.scss";
import ContainerSearch from './Search/ContainerSearch'
import ContainerItems from './Items/ContainerItems'
import ContainerButtonNewItems from './ButtonNewItems/ContainerButtonNewItems'

class TodoPage extends React.Component {
  render() {
    return (
      <section className={s.todoPage}>
        <ContainerSearch />
        <ContainerItems />
        <ContainerButtonNewItems />
      </section>
    );
  }
}

export default TodoPage;
