import React from 'react';
import { LiaSearchSolid } from 'react-icons/lia';
import { AllProduct } from './StoreData';

const AllProducts = () => {
  let startIndex = 1;
  return (
    <div className='store_item_container'>
      <div className='stock_top'>
        <h5>All Products</h5>
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
          <div className='manage_store_item'>
            <h5 className='number'>NO</h5>
            <h5 className='product_id'>PRODUCT ID</h5>
            <h5 className='product_name'>NAME</h5>
            <h5 className='category'>CATEGORY</h5>
            <h5 className='cost_price'>PRICE</h5>
            <h5 className='quantity'>AVAILABLE</h5>
            <h5 className='quantity'>SOLD</h5>
          </div>
          <hr className='store_manager_hr' />
        </div>
        {AllProduct &&
          AllProduct.map((item, index) => (
            <div key={index} className='manage_store_items'>
              <div className='manage_store_item'>
                <span className='number'>
                  {(startIndex + index).toString().padStart(3, '0')}
                </span>
                <span className='product_id'>{item.id}</span>
                <span className='product_name'>{item.name}</span>
                <span className='category'>{item.category}</span>
                <span className='cost_price'>{item.price}</span>
                <span className='quantity'>{item.available}</span>
                <span className='quantity'>{item.sold}</span>
              </div>
              <hr className='store_manager_hr' />
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
