import React from 'react';
import './Header.css';
// import { SlMenu } from 'react-icons/sl';
import { TfiMenu } from 'react-icons/tfi';
import { LiaSearchSolid } from 'react-icons/lia';
import { MdNotifications } from 'react-icons/md';
import { PiUserCircleFill } from 'react-icons/pi';

const Header = ({ text }) => {
  return (
    <div className='header_container'>
      <div className='header_right'>
        <div className='p__container'>
          <p>Soltec Inventory</p>
          <p>And Point Of Sale</p>
          <p>Management System</p>
        </div>
        <div className='right_menu_container'>
          <TfiMenu />
          <h3>{text}</h3>
        </div>
      </div>
      <div className='header_left'>
        <div className='search_input_container'>
          <input
            type='text'
            placeholder='search something here'
            className='search_input'
          />
          <LiaSearchSolid />
        </div>
        <div className='add_order'>+ Add order</div>
        <div className='notification_container'>
          <MdNotifications size={30} />
          <span>.</span>
        </div>
        <div className='user_header_container'>
          <PiUserCircleFill size={35} />
          <div>
            <h5>Account</h5>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
