import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ReactComponent as BookmarkIcon } from '../../icons/bookmark.svg';
import { ReactComponent as ShareIcon } from '../../icons/share.svg';
import { ReactComponent as ArrowRightIcon } from '../../icons/Arrow.svg';

import './ApartListItem.scss';

const ApartListItem = ({ apart }) => {
  const { title, image, id } = apart;
  const addToBookmarkHandler = (e) => {
    console.log('You want to add the bookmark');
  };
  return (
    <div className="apart__block">
      <div className="apart__icons">
        <i className="apart__icon" onClick={addToBookmarkHandler}>
          <BookmarkIcon />
        </i>
        <i className="apart__icon">
          <ShareIcon />
        </i>
      </div>
      <img src={image} alt={title} className="apart__image" />
      <Link to={`/apartaments/${id}`} className="apart__link">
        <span className="apart__title">{title}</span>
        <ArrowRightIcon className="apart__arrow" />
      </Link>
    </div>
  );
};

ApartListItem.propTypes = {
  apart: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default ApartListItem;
