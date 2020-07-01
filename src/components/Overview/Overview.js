import React from 'react';

import ApartListOverview from '../ApartListOverview';
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
      <ApartListOverview />
    </div>
  );
};

export default Overview;
