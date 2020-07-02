import React, { useState } from 'react';
import { connect } from 'react-redux';

import Logo from '../Logo';
import SocialMenu from '../SocialMenu';

import { getFilters, setFilter, destroyFilters } from '../../store/filters';
import { getPostsPerPage, setPostsPerPage } from '../../store/aparts';

import { ReactComponent as ArrowLabelIcon } from '../../icons/arrow-label-left.svg';

import './Filters.scss';

const Filters = ({ filters, setFilter, destroyFilters, postsPerPage, setPostsPerPage }) => {
  const [open, setOpen] = useState(postsPerPage === 9 ? true : false);

  const toggleHandler = (_e) => {
    setOpen(!open);
    postsPerPage === 9 ? setPostsPerPage(16) : setPostsPerPage(9);
  };

  const setFilterHandler = (_e) => {
    setFilter({ guests: 4 });
  };

  const setBedroomHandler = (_e) => {
    setFilter({ bedrooms: 2 });
  };

  const setResetHandler = (_e) => {
    destroyFilters();
  };

  return (
    <div className={open ? 'filters filters--opened' : 'filters'}>
      <div className="filters__control" onClick={toggleHandler}>
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
          <button onClick={setResetHandler}>Reset</button>
        </main>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: getFilters(state),
  postsPerPage: getPostsPerPage(state),
});

const mapDispatchToProps = { setFilter, destroyFilters, setPostsPerPage };

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
