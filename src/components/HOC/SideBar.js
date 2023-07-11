import React, { useState } from 'react';
import './Hoc.css';
import { BsGridFill } from 'react-icons/bs';
import { LiaStoreAltSolid } from 'react-icons/lia';
import { HiUsers } from 'react-icons/hi';
import { GiFlamethrowerSoldier } from 'react-icons/gi';
import {
  MdOutlineLocalGroceryStore,
  MdProductionQuantityLimits,
} from 'react-icons/md';

import { RiStockLine } from 'react-icons/ri';
import { TbTruckDelivery } from 'react-icons/tb';
import { AiFillCaretRight } from 'react-icons/ai';
import { SlCalculator } from 'react-icons/sl';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const SideBar = ({ setSold, setAllProduct }) => {
  //  sold={soldStock} ={setSoldStock} allProduct={allProduct} setAllProduct={setAllProduct}
  const [openStore, setOpenStore] = useState(false);
  return (
    <div className='side_bar_container'>
      <NavLink
        to='/user/dashboard'
        className='sidebar_item'
        activeClassName='active_link'
      >
        <div>
          <BsGridFill size={12} />
        </div>
        <span>Dashboard</span>
      </NavLink>
      <NavLink
        to='/user/store_manager'
        className='sidebar_item'
        onClick={() => setOpenStore(true)}
        activeClassName='active_link store_active'
      >
        <div>
          <LiaStoreAltSolid size={15} />
        </div>
        <span>Store Manager</span>
        <AiFillCaretRight size={14} className='store_icon' />
      </NavLink>
      {openStore && (
        <div className='overlay' onClick={() => setOpenStore(false)}></div>
      )}
      {openStore && (
        <div className='store_dropdown' onClick={() => setOpenStore(false)}>
          <div onClick={() => setSold(true) & setAllProduct(false)}>
            <GiFlamethrowerSoldier />
            <span>Sold Stock</span>
          </div>
          <div onClick={() => setSold(false) & setAllProduct(true)}>
            <RiStockLine />
            <span>All Products</span>
          </div>
          <div>
            <LiaStoreAltSolid />
            <span>Out of Stock products</span>
          </div>
          <div>
            <LiaStoreAltSolid />
            <span>Most Sold Products</span>
          </div>
          <div>
            <LiaStoreAltSolid />
            <span>Stock expiration dates</span>
          </div>
        </div>
      )}
      <NavLink
        to='/user/dashboard/customers'
        className='sidebar_item'
        activeClassName='active_link'
      >
        <div>
          <HiUsers size={15} />
        </div>
        <span>Customers</span>
      </NavLink>
      <NavLink
        to='/user/dashboard/orders'
        className='sidebar_item'
        activeClassName='active_link'
      >
        <div>
          <MdOutlineLocalGroceryStore size={15} />
        </div>
        <span>Job Orders</span>
      </NavLink>
      <NavLink
        to='/user/stock_management'
        className='sidebar_item'
        activeClassName='active_link'
      >
        <div>
          <RiStockLine size={15} />
        </div>
        <span>Stock Manager</span>
      </NavLink>
      <NavLink
        to='/user/dashboard/orders'
        className='sidebar_item'
        activeClassName='active_link'
      >
        <div>
          <TbTruckDelivery size={15} />
        </div>
        <span>Delivery</span>
      </NavLink>
      <NavLink
        to='/user/dashboard/orders'
        className='sidebar_item'
        activeClassName='active_link'
      >
        <div>
          <BiSolidShoppingBags size={15} />
        </div>
        <span>Purchase Order</span>
      </NavLink>
      <NavLink
        to='/user/dashboard/orders'
        className='sidebar_item'
        activeClassName='active_link'
      >
        <div>
          <SlCalculator size={15} />
        </div>
        <span>Invoice</span>
      </NavLink>
      <NavLink
        to='/user/dashboard/orders'
        className='sidebar_item'
        activeClassName='active_link'
      >
        <div>
          <MdProductionQuantityLimits size={15} />
        </div>
        <span>Production</span>
      </NavLink>
      <NavLink
        to='/user/sales_rep/dashboard'
        className='sidebar_item'
        activeClassName='active_link'
      >
        <div>
          <MdProductionQuantityLimits size={15} />
        </div>
        <span>Sales Rep</span>
      </NavLink>
    </div>
  );
};

export default SideBar;
