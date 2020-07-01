import React from 'react';

import ApartsList from '../ApartsList';
import Menu from '../Menu';

import './Aparts.scss';

const Aparts = () => {
  return (
    <div className="aparts">
      <div className="aparts__menu">
        <Menu />
      </div>
      <ApartsList />
    </div>
  );
};

export default Aparts;
