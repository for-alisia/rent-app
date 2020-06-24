import React from 'react';

import Welcome from '../../components/Welcome';
import Overview from '../../components/Overview';

import './HomePage.scss';

const HomePage = () => {
  return (
    <div className="page home-page">
      <Welcome />
      <Overview />
    </div>
  );
};

export default HomePage;
