import React from 'react';
import { ApartServiceConsumer } from '../ApartServiceContext';

const withApartService = () => (Wrapped) => {
  return (props) => {
    return (
      <ApartServiceConsumer>
        {(apartService) => {
          return <Wrapped {...props} apartService={apartService} />;
        }}
      </ApartServiceConsumer>
    );
  };
};

export default withApartService;
