import React from 'react';
import './style.scss';

const ScrollTop = () => {
  return (
    <div className='scrolltop-wrapper'>
      <div
        className='lmpixels-scroll-to-top'
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <i className='fa fa-chevron-up' aria-hidden='true'></i>
      </div>
    </div>
  );
};

export default ScrollTop;
