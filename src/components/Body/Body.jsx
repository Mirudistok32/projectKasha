import React from "react";
import s from "./Body.module.scss";
import ErrorBoundry from './../../utils/ErrorBoundry/ErrorBoundry'
import ContainerTitle from './Title/ContainerTitle'
import ContainerContent from './Content/ContainerContent'

class Body extends React.PureComponent {
  render() {
    return (
      <ErrorBoundry>
        <section className={s.body}>
          <ContainerTitle />
          <ContainerContent />
        </section>
      </ErrorBoundry>
    );
  }
}

export default Body;
