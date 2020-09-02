import React, { useEffect } from "react";
import s from "./App.module.scss";
import ErrorBoundry from "../../utils/ErrorBoundry/ErrorBoundry";
import Header from "./../Header/Header";
import Body from "./../Body/Body";
import { setAphorismsThunkCreator } from "./../../bll/aphorisms-reducer";
import { setCalcItemsThunkCreator } from "./../../bll/calcFinance-reducer";
import { connect } from "react-redux";

const App = ({ setAphorismsThunkCreator, setCalcItemsThunkCreator }) => {
  useEffect(() => {
    setAphorismsThunkCreator();
    setCalcItemsThunkCreator();
  }, [setAphorismsThunkCreator, setCalcItemsThunkCreator]);

  return (
    <ErrorBoundry>
      <section className={s.app}>
        <header className={s.header}>
          <Header />
        </header>
        <section className={s.body}>
          <Body />
        </section>
      </section>
    </ErrorBoundry>
  );
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
  setAphorismsThunkCreator,
  setCalcItemsThunkCreator,
})(App);
