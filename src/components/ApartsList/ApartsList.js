import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAparts, getError, getIsLoading, fetchApartsRequest } from '../../store/aparts';
import { getFilters } from '../../store/filters';

import ApartListItem from '../ApartListItem';
import Spinner from '../Spinner';

import './ApartsList.scss';

const ApartsList = ({ fetchApartsRequest, aparts, isLoading, error, filters }) => {
  useEffect(() => {
    fetchApartsRequest();
  }, [fetchApartsRequest]);

  if (isLoading) return <Spinner />;
  if (error) return <p>Произошла сетевая ошибка</p>;

  return (
    <ul className="apart__list">
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
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  aparts: getAparts(state),
  isLoading: getIsLoading(state),
  error: getError(state),
  filters: getFilters(state),
});

const mapDispatchToProps = { fetchApartsRequest };

ApartsList.propTypes = {
  aparts: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchApartsRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartsList);
