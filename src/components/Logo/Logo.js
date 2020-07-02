import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoSvgLight } from '../../icons/logo-light.svg';
import { ReactComponent as LogoSvgDark } from '../../icons/logo-dark.svg';
import { ReactComponent as LogoElement } from '../../icons/logo-element.svg';

import './Logo.scss';

const Logo = ({ isLight, isSmall }) => {
  return (
    <Link to="/">
      <div className={isSmall ? 'logo logo--small' : 'logo'}>
        <div className="logo__icon">{isLight ? <LogoSvgLight /> : <LogoSvgDark />}</div>
        <div className={isLight ? 'logo__title logo__title--light' : 'logo__title'}>
          <div className="logo__company-name">
            <span className="logo__prefix">Bon</span>
            <span className="logo__element">
              <LogoElement />
            </span>
            <span className="logo__suffix">Apart</span>
          </div>
          <div className="logo__slogan">
            <span> Квартиры для бизнеса</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

Logo.propTypes = {
  isLight: PropTypes.bool,
  isSmall: PropTypes.bool,
};

export default Logo;
