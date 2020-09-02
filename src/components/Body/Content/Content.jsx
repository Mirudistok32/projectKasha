import React from "react";
import s from "./Content.module.scss";
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContainerItemPage from './pages/TodoPage//Items/ItemPage/ContainerItemPage'
import ContainerTodoPage from './pages/TodoPage/ContainerTodoPage'
import CalcFinance from './pages/CalcFinance/CalcFinance'
import DialogsPage from './pages/DialogsPage/DialogsPage'

const Content = () => {
  return (
    <section className={s.content}>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/todo" render={() => <ContainerTodoPage />} />
        <Route exact path="/todo/:id?" render={() => <ContainerItemPage />} />
        <Route exact path="/dialogs" render={() => <DialogsPage />} />
        <Route exact path="/calculate" render={() => <CalcFinance />} />
        <Redirect exact to="/" />
      </Switch>
    </section>
  );
}

export default Content;
