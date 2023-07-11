import React from 'react';
import { LiaSearchSolid } from 'react-icons/lia';
import { stockData } from './StoreData';

const SoldStock = () => {
  let startIndex = 1;
  return (
    <div className='store_item_container'>
      <div className='stock_top'>
        <h5>Sold Stock</h5>
        <div>
          <div>
            <input type='text' placeholder='search products here' />
            <LiaSearchSolid />
          </div>
          <span className=''>Search</span>
        </div>
      </div>
      <div className='manage_store_items_ct'>
        <div className='manage_store_items'>
          <div>
            <h5 className='number'>NO</h5>
            <h5 className='product_id'>PRODUCT ID</h5>
            <h5 className='category'>CATEGORY</h5>
            <h5 className='cost_price'>COST PRICE</h5>
          </div>
          <hr className='store_manager_hr' />
        </div>
        {stockData &&
          stockData.map((item, index) => (
            <div className='manage_store_items' key={index}>
              <div>
                <span className='number'>
                  {(startIndex + index).toString().padStart(3, '0')}
                </span>
                <span className='product_id'>{item?.productId}</span>
                <span className='category'>{item?.category}</span>
                <span className='cost_price'>{item?.price}</span>
              </div>
              <hr className='store_manager_hr' />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SoldStock;
