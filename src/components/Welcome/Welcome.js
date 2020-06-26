import React from 'react';

import Title from '../Title';
import Logo from '../Logo';
import Button from '../Button';

import './Welcome.scss';

const Welcome = () => {
	return (
		<div className="welcome">
			<div className="welcome__decor-first">Аренда</div>
			<div className="welcome__decor-second">квартир</div>

			<div className="welcome__content">
				<div className="welcome__decor-third">Казань</div>
				<Logo isLight />
				<div className="welcome__cta">
					<Title size="big" mb="2.5rem">
						Аренда квартир и апартаментов для бизнеса в Казани
					</Title>
					<Title size="medium" mb="2rem" isSubtitle>
						Командировка или релокация? Оказывем услуги аренды "под ключ", чтобы вы занимались бизнесом
					</Title>
					<p className="welcome__text">
						Личный менеджер подберет квартиру, идеально соответствующую вашим требованиям, подготовит ее к вашему
						приезду, организует встречу и будет на связи 24/7
					</p>
					<p className="welcome__text">
						Мы не просто предлагаем жилье, мы делаем ваше пребывание в Казани комфортным, как дома.
					</p>
				</div>
				<div className="welcome__features">
					<ul className="welcome__list">
						<li className="welcome__item">Только квартиры с новым и качественным ремонтом</li>
						<li className="welcome__item">Клининг 2 раза в неделю включен в проживание</li>
						<li className="welcome__item">Предоставление необходимой финансовой отчетности</li>
					</ul>
				</div>
				<div className="welcome__button">
					<Button>Заказать подбор квартиры</Button>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
