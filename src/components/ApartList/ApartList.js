import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { withApartService } from '../../serviceComponents/hoc';
import { apartsLoaded } from '../../actions';
import { compose } from '../../utils';

import ApartListItem from '../ApartListItem';
import Spinner from '../Spinner';

import './ApartList.scss';

const ApartList = (props) => {
  const { aparts, apartService, apartsLoaded, loading } = props;

  useEffect(() => {
    apartService
      .getAparts()
      .then(({ data, success, info }) => {
        console.log(info);
        apartsLoaded(data);
      })
      .catch((err) => console.log(err));
  }, [apartService, apartsLoaded]);

  if (loading) {
    return <Spinner />;
  }

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

const mapStateToProps = ({ aparts, loading }) => {
  return { aparts, loading };
};

const mapDispatchToProps = { apartsLoaded };

export default compose(withApartService(), connect(mapStateToProps, mapDispatchToProps))(ApartList);
