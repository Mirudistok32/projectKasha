import React from "react";
import s from "./Content.module.scss";
import { Route, Switch, Redirect } from 'react-router-dom'
import ContainerTodoPage from './pages/TodoPage/ContainerTodoPage'
import ContainerCatalogPage from './pages/CatalogPage/ContainerCatalogPage'
import ContainerItemPage from './pages/TodoPage//Items/ItemPage/ContainerItemPage'

class Content extends React.Component {
  render() {
    return (
      <section className={s.content}>
        <Switch>
          <Route exact path="/todo" render={() => <ContainerTodoPage />} />
          <Route exact path="/todo/:id" render={() => <ContainerItemPage />} />
          <Route exact path="/catalog" render={() => <ContainerCatalogPage />} />
          <Redirect to="/" />
        </Switch>
      </section>
    );
  }
}

export default Content;
