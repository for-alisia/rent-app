import React from 'react';

import { ReactComponent as LogoSvgLight } from '../../icons/logo-light.svg';
import { ReactComponent as LogoSvgDark } from '../../icons/logo-dark.svg';
import { ReactComponent as LogoElement } from '../../icons/logo-element.svg';

import './Logo.scss';

const Logo = (props) => {
	const { isLight } = props;
	return (
		<div className="logo">
			<div className="logo__icon">{isLight ? <LogoSvgLight /> : <LogoSvgDark />}</div>
			<div className="logo__title">
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
	);
};

export default Logo;
