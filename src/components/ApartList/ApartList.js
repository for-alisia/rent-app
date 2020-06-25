import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAparts, getError, getIsLoading, fetchApartsRequest } from '../../store/aparts';

import ApartListItem from '../ApartListItem';
import Spinner from '../Spinner';

import './ApartList.scss';

const ApartList = (props) => {
  const { fetchApartsRequest } = props;

  useEffect(() => {
    fetchApartsRequest();
  }, [fetchApartsRequest]);

  const { aparts, isLoading, error } = props;

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
    </ul>
  );
};

const mapStateToProps = (state) => ({
  aparts: getAparts(state),
  isLoading: getIsLoading(state),
  error: getError(state),
});
const mapDispatchToProps = { fetchApartsRequest };

export default connect(mapStateToProps, mapDispatchToProps)(ApartList);
