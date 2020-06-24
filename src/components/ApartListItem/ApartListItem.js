import React from 'react';
import { Link } from 'react-router-dom';

import ArrowRightIcon from '../../SVG/ArrowRightIcon';

import './ApartListItem.scss';

const ApartListItem = ({ apart }) => {
  const { title, image, id } = apart;
  return (
    <div className="apart__block">
      <img src={image} alt={title} className="apart__image" />
      <Link to={`/apartaments/${id}`} className="apart__link">
        <span className="apart__title">{title}</span>
        <ArrowRightIcon className="apart__arrow-icon" />
      </Link>
    </div>
  );
};

export default ApartListItem;
