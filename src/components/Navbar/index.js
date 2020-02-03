import React, { useState } from 'react';
import ClassNames from 'classnames';
import MenuButton from '../MenuButton';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='navbar-wrapper'>
      <div className='header-content clearfix'>
        <div className='text-logo'>
          <NavLink exact to='/'>
            <div className='logo-symbol'>X</div>
            <div className='logo-text'>
              Xuan's <span>CV</span>
            </div>
          </NavLink>
        </div>
        <div
          className={ClassNames(
            'site-nav',
            { 'mobile-menu-hide': !toggle },
            { 'mobile-menu-show': toggle }
          )}
        >
          <ul className='site-main-menu'>
            <li>
              <NavLink
                exact
                to='/'
                onClick={() => {
                  setToggle(false);
                }}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/resume'
                onClick={() => {
                  setToggle(false);
                }}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/contact'
                onClick={() => {
                  setToggle(false);
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className='menu-toggle mobile-visible'
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <MenuButton toggle={toggle} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
