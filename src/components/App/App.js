import React from "react";
import s from "./App.module.scss";
import ErrorBoundry from "../../utils/ErrorBoundry/ErrorBoundry";
import Header from "./../Header/Header";
import Body from "./../Body/Body";

class App extends React.Component {
  
  render() {
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
  }
}


export default App;
