import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getError, getIsLoading, fetchApartsRequest, getApartsPerPage, getPostsPerPage } from '../../store/aparts';
import { getFilters } from '../../store/filters';

import ApartListItem from '../ApartListItem';
import Spinner from '../Spinner';

import './ApartsList.scss';

const ApartsList = ({ fetchApartsRequest, aparts, isLoading, error, filters, postsPerPage }) => {
  useEffect(() => {
    fetchApartsRequest();
  }, [fetchApartsRequest]);

  if (isLoading) return <Spinner />;
  if (error) return <p>Произошла сетевая ошибка</p>;

  return (
    <ul className={postsPerPage === 9 ? 'apart__list-9' : 'apart__list-14'}>
      {aparts.map((apart) => {
        let isFiltered = true;
        for (let key in filters) {
          if ((key === 'guests' || key === 'bedrooms') && filters[key] > apart[key]) {
            return (isFiltered = false);
          }
        }
        if (isFiltered) {
          return (
            <li key={apart.id} className="apart__item">
              <ApartListItem apart={apart} />
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  aparts: getApartsPerPage(state),
  isLoading: getIsLoading(state),
  error: getError(state),
  filters: getFilters(state),
  postsPerPage: getPostsPerPage(state),
});

const mapDispatchToProps = { fetchApartsRequest };

ApartsList.propTypes = {
  aparts: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchApartsRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartsList);
