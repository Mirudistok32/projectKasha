import React from "react";
import s from './Header.module.scss'
import ErrorBoundry from "../../utils/ErrorBoundry/ErrorBoundry";
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <ErrorBoundry>
        <>
          <nav className={s.nav}>
            <ul>
              <li><NavLink to="/todo" activeClassName={s.active} >Todo</NavLink></li>
              <li><NavLink to="/catalog" activeClassName={s.active}>Шоп</NavLink></li>
            </ul>
          </nav>
        </>
      </ErrorBoundry>
    );
  }
}

export default Header;
