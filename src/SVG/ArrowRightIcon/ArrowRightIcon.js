import React from 'react';

import './ArrowRightIcon.scss';

const ArrowRightIcon = ({
  style = {},
  fill = '#f5d6c6',
  width = '44',
  className = '',
  height = '9',
  viewBox = '0 0 44 9',
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M43.0751 4.80944C43.2704 4.61418 43.2704 4.2976 43.0751 4.10233L39.8932 0.920353C39.6979 0.725091 39.3813 0.725091 39.1861 0.920353C38.9908 1.11562 38.9908 1.4322 39.1861 1.62746L42.0145 4.45589L39.1861 7.28431C38.9908 7.47958 38.9908 7.79616 39.1861 7.99142C39.3813 8.18668 39.6979 8.18668 39.8932 7.99142L43.0751 4.80944ZM0.189941 4.95589H42.7216V3.95589H0.189941V4.95589Z"
      fill={fill}
    />
  </svg>
);

export default ArrowRightIcon;
