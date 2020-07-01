import React from 'react';
import './SocialMenu.scss';

const SocialMenu = ({ isLight }) => {
  return (
    <nav className={isLight ? 'social-nav social-nav--light' : 'social-nav'}>
      <ul className="social-nav__list">
        <li className="social-nav__item">
          <a href="https://vk.com" className="social-nav__link">
            VK
          </a>
        </li>
        <li className="social-nav__item">
          <a href="https://telegram.com" className="social-nav__link">
            Telegram
          </a>
        </li>
        <li className="social-nav__item">
          <a href="https://instagram.com" className="social-nav__link">
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialMenu;
