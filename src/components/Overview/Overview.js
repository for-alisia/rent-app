import React from 'react';

import ApartList from '../ApartList';
import Menu from '../Menu';
import SocialMenu from '../SocialMenu';

import './Overview.scss';

const Overview = () => {
  return (
    <div className="overview">
      <Menu />
      <SocialMenu />
      <ApartList />
    </div>
  );
};

export default Overview;
