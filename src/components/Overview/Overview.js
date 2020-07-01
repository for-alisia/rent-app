import React from 'react';

import ApartList from '../ApartList';
import Menu from '../Menu';
import SocialMenu from '../SocialMenu';

import './Overview.scss';

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview__menu">
        <Menu />
      </div>
      <div className="overview__social-menu">
        <SocialMenu />
      </div>
      <ApartList />
    </div>
  );
};

export default Overview;
