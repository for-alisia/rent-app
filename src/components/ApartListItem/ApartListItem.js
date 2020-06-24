import React from 'react';
import './ApartListItem.scss';

const ApartListItem = ({ apart }) => {
  const { title, image } = apart;
  return (
    <div>
      <img src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default ApartListItem;
