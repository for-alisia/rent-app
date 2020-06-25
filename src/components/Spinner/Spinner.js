import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__blocks">
        <div className="spinner__main">
          <div className="spinner__first"></div>
          <div className="spinner__second"></div>
          <div className="spinner__third"></div>
          <div className="spinner__fourth"></div>
          <div className="spinner__fifth"></div>
          <div className="spinner__sixth"></div>
          <div className="spinner__seventh"></div>
          <div className="spinner__eight"></div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
