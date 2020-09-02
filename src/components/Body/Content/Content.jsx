import React, { Suspense } from "react";
import s from "./Content.module.scss";
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home/Home'
// import ContainerItemPage from './pages/TodoPage//Items/ItemPage/ContainerItemPage'
import ContainerTodoPage from './pages/TodoPage/ContainerTodoPage'
// import CalcFinance from './pages/CalcFinance/CalcFinance'
// import DialogsPage from './pages/DialogsPage/DialogsPage'


const DialogsPage = React.lazy(() => import('./pages/DialogsPage/DialogsPage'));
const CalcFinance = React.lazy(() => import('./pages/CalcFinance/CalcFinance'));
const ContainerItemPage = React.lazy(() => import('./pages/TodoPage//Items/ItemPage/ContainerItemPage'));

const Content = () => {
  return (
    <section className={s.content}>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/todo" render={() => <ContainerTodoPage />} />
        <Route exact path="/todo/:id?" render={() => (
          <Suspense fallback={<div>Поготь, идет загрузка</div>}>
            <ContainerItemPage />
          </Suspense>
        )}
        />
        <Route exact path="/calculate" render={() => (
          <Suspense fallback={<div>Поготь, идет загрузка</div>}>
            <CalcFinance />
          </Suspense>
        )}
        />
        <Route exact path="/dialogs" render={() => (
          <Suspense fallback={<div>Поготь, идет загрузка</div>}>
            <DialogsPage />
          </Suspense>)}
        />

        <Redirect exact to="/" />
      </Switch>
    </section>
  );
}

export default Content;
