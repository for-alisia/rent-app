import React, { useState } from 'react';
import { connect } from 'react-redux';

import Logo from '../Logo';
import SocialMenu from '../SocialMenu';

import { getFilters, setFilter } from '../../store/filters';

import { ReactComponent as ArrowLabelIcon } from '../../icons/arrow-label-left.svg';

import './Filters.scss';

const Filters = ({ filters, setFilter }) => {
  const [open, setOpen] = useState(true);

  console.log(filters);

  const setFilterHandler = (e) => {
    setFilter({ guests: 6 });
  };

  const setBedroomHandler = (e) => {
    setFilter({ bedrooms: 3 });
  };

  return (
    <div className={open ? 'filters filters--opened' : 'filters'}>
      <div className="filters__control" onClick={() => setOpen(!open)}>
        {open ? 'Скрыть фильтры' : 'Показать фильтры'}
      </div>
      <div className="filters__control-icon">
        <ArrowLabelIcon />
      </div>
      <div className="filters__content">
        <div className="filters__header">
          <Logo isLight isSmall />
          <SocialMenu isLight />
        </div>
        <main className="filters__main">
          <button onClick={setFilterHandler}>Set Guests here</button>
          <button onClick={setBedroomHandler}>Set Bedrooms here</button>
          <p>{filters.guests}</p>
        </main>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: getFilters(state),
});

const mapDispatchToProps = { setFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
