import React from "react";
import s from './Header.module.scss'
import ErrorBoundry from "../../utils/ErrorBoundry/ErrorBoundry";
import { NavLink } from 'react-router-dom'
import Logo from './Logo/Logo'
class Header extends React.Component {
  render() {
    return (
      <ErrorBoundry>
        <>
          <nav className={s.nav}>
            <Logo />
            <ul>
              <li><NavLink to="/todo" activeClassName={s.active}  title="Список дел">Todo</NavLink></li>
              <li><NavLink to="/calculate" activeClassName={s.active} className={s.calc} title="Калькулятор бюджета">CalcF</NavLink></li>
              <li><NavLink to="/dialogs" activeClassName={s.active} className={s.calc} title="Простое сообщение">Inc</NavLink></li>
            </ul>
          </nav>
        </>
      </ErrorBoundry>
    );
  }
}

export default Header;
