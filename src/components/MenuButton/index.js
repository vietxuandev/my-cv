import React from 'react';
import ClassNames from 'classnames';
import './style.scss';

const MenuButton = props => {
  const { toggle = false } = props;
  return (
    <div className='menu-button-wrapper'>
      <div id='nav-icon' className={ClassNames({ open: toggle })}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default MenuButton;
