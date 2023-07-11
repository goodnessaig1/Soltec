import React from 'react';
import { PiUserCircleFill } from 'react-icons/pi';
import { IoIosHome, IoMdStats } from 'react-icons/io';
import { AiFillSetting, AiOutlineLogin } from 'react-icons/ai';
import { TfiAlarmClock } from 'react-icons/tfi';
import { FiHelpCircle } from 'react-icons/fi';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const SalesSidebar = () => {
  return (
    <div className='sales_sidebar'>
      <div>
        <NavLink
          className='sales_sidebar_link'
          activeClassName='active_sidebar_link'
          to='/user/sales_rep/dashboard'
        >
          <div>
            <IoIosHome size={22} />
            <span>Home</span>
          </div>
        </NavLink>
        <NavLink
          className='sales_sidebar_link'
          activeClassName='active_sidebar_link'
          to='/user/profile/salesrep'
        >
          <div>
            <PiUserCircleFill size={22} />
            <span>Profile</span>
          </div>
        </NavLink>
        <NavLink
          className='sales_sidebar_link'
          activeClassName='active_sidebar_link'
          to='/user/sales/recent'
        >
          <div>
            <TfiAlarmClock size={22} />
            <span>Recent</span>
          </div>
        </NavLink>
        <NavLink
          className='sales_sidebar_link'
          activeClassName='active_sidebar_link'
          to='/user/sales/analytics'
        >
          <div>
            <IoMdStats size={22} />
            <span>Sales</span>
          </div>
        </NavLink>
        <NavLink
          className='sales_sidebar_link'
          activeClassName='active_sidebar_link'
          to='/user/salesrep/settings'
        >
          <div>
            <AiFillSetting size={22} />
            <span>Settings</span>
          </div>
        </NavLink>
        <NavLink
          className='sales_sidebar_link'
          activeClassName='active_sidebar_link'
          to='/user/settings/salesrep'
        >
          <div>
            <FiHelpCircle size={22} />
            <span>Help</span>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink
          className='sales_sidebar_link'
          activeClassName='active_sidebar_link'
          to='/user/logout'
        >
          <div>
            <AiOutlineLogin size={20} />
            <span>Logout</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default SalesSidebar;
