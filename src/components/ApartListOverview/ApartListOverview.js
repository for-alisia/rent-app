import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getAparts, getError, getIsLoading, fetchApartsRequest } from '../../store/aparts';

import ApartListItem from '../ApartListItem';
import Spinner from '../Spinner';
import { ReactComponent as ArrowRightIcon } from '../../icons/Arrow.svg';

import './ApartListOverview.scss';

const ApartListOverview = ({ fetchApartsRequest, aparts, isLoading, error, filters }) => {
  useEffect(() => {
    fetchApartsRequest();
  }, [fetchApartsRequest]);

  if (isLoading) return <Spinner />;
  if (error) return <p>Произошла сетевая ошибка</p>;

  return (
    <ul className="apart__list">
      {aparts.map((apart) => {
        return (
          <li key={apart.id} className="apart__item">
            <ApartListItem apart={apart} />
          </li>
        );
      })}
      <li className="apart__view-all">
        <Link to="/apartaments">
          Посмотреть все варианты
          <ArrowRightIcon />
        </Link>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => ({
  aparts: getAparts(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});

const mapDispatchToProps = { fetchApartsRequest };

ApartListOverview.propTypes = {
  aparts: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchApartsRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartListOverview);
