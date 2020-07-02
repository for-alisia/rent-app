import React from 'react';

import Filters from '../../components/Filters';
import Aparts from '../../components/Aparts';
import './ApartsPage.scss';

const ApartsPage = (props) => {
  return (
    <div className="page aparts-page">
      <Filters />
      <Aparts />
    </div>
  );
};

export default ApartsPage;
