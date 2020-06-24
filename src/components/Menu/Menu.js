import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = (props) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink to="/apartaments" activeClassName="isActiveLink" className="navigation__link">
            Выбрать квартиру
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/about" activeClassName="isActiveLink" className="navigation__link">
            Как мы работаем
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/reviews" activeClassName="isActiveLink" className="navigation__link">
            Отзывы о нас
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
