import React, { useState } from 'react';

import Logo from '../Logo';
import SocialMenu from '../SocialMenu';

import { ReactComponent as ArrowLabelIcon } from '../../icons/arrow-label-left.svg';

import './Filters.scss';

const Filters = (props) => {
  const [open, setOpen] = useState(true);

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
      </div>
    </div>
  );
};

export default Filters;
