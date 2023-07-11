import React from 'react';
import { LiaSearchSolid } from 'react-icons/lia';
import { LuCalendarDays } from 'react-icons/lu';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { BsBuildingCheck, BsCheck2All } from 'react-icons/bs';
import { MdFreeCancellation } from 'react-icons/md';
import { TbArrowBackUpDouble } from 'react-icons/tb';
import { SlCalculator } from 'react-icons/sl';

const Overview = () => {
  return (
    <div className='overview_container'>
      <div className='overview_item_container'>
        <div className='over_view_top'>
          <h3>TV overview</h3>
          <div className='over_view_t_left'>
            <div>
              <input type='text' placeholder='search a product here' />
              <LiaSearchSolid />
            </div>
            <span className='search__product'>search</span>
          </div>
        </div>
        <div className='days_container'>
          <span>7 days</span>
          <LuCalendarDays />
        </div>
        <div className='overview_details_container'>
          <div>
            <div>
              <h3>120</h3>
              <BsBuildingCheck className='completed_icon' />
            </div>
            <span>Total No Sold</span>
          </div>
          <div>
            <h3>Samsung</h3>
            <span>Total selling Brand</span>
          </div>
          <div>
            <div>
              <h3>120</h3>
              <BsBuildingCheck className='availiable_product_icon' />
            </div>
            <span>total No. Availiable</span>
          </div>
          <div>
            <h3>#4,350,000</h3>
            <span>Total sold</span>
          </div>
        </div>
      </div>
      <div className='overview_item_container'>
        <div className='over_view_top'>
          <h3>Sales Overview</h3>
          <div className='overview_top_left_ct'>
            <div className='date_overview_'>
              <span>7 days</span>
              <LuCalendarDays />
            </div>
            <div className='dots'>
              <HiOutlineDotsHorizontal />
            </div>
          </div>
        </div>
        <div className='overview_details_container'>
          <div>
            <div>
              <h3>120 </h3>
              <BsBuildingCheck className='completed_icon' />
            </div>
            <span>Total Product Sold</span>
          </div>
          <div>
            <div>
              <h3>11 </h3>
              <MdFreeCancellation className='cancel_icon' />
            </div>
            <span>Cancelled order</span>
          </div>
          <div>
            <div>
              <h3>#550,000</h3>
              <BsBuildingCheck className='completed_icon' />
            </div>
            <span>Total sold cost</span>
          </div>
          <div>
            <div>
              <h3>5</h3>
              <TbArrowBackUpDouble className='cancel_icon' />
            </div>
            <span>Returnded order</span>
          </div>
        </div>
      </div>
      <div className='overview_item_container'>
        <div className='over_view_top'>
          <h3>Order Overview</h3>
          <div className='overview_top_left_ct'>
            <div className='date_overview_'>
              <span>7 days</span>
              <LuCalendarDays />
            </div>
            <div className='dots'>
              <HiOutlineDotsHorizontal />
            </div>
          </div>
        </div>
        <div className='overview_details_container'>
          <div>
            <h3>42</h3>
            <span>No of order</span>
          </div>
          <div>
            <div>
              <h3>7</h3>
              <MdFreeCancellation className='cancel_icon' />
            </div>
            <span>Cancelled order</span>
          </div>
          <div>
            <div>
              <h3>#245,000</h3>
              <SlCalculator className='completed_icon' size={15} />
            </div>
            <span>Total cost of orders</span>
          </div>
          <div>
            <div>
              <h3>36</h3>
              <BsCheck2All className='completed_icon' />
            </div>
            <span>Completed orders</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
