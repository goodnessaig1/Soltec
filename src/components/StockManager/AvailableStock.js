import React from 'react';
import { StoreProducts } from './StockData';
import { LuEdit } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';

const AvailableStock = () => {
  let startIndex = 1;
  const renderProductStatus = (sold, available) => {
    const percentage = (available / sold) * 100;
    const percent = Math.round(percentage);
    return (
      <span
        style={{
          backgroundColor: `${percent > 50 ? '#73ff7e' : '#ff0101'}`,
          width: `${percent >= 0 && percent <= 100 ? `${percent}%` : '100%'}`,
          height: '100%',
        }}
      ></span>
    );
  };

  return (
    <div className='stock_item_container'>
      <div className='availiable_items top_'>
        <h4 className='number_'>NO</h4>
        <h4 className='product__id'>PRODUCT ID</h4>
        <h4 className='category_'>CATEGORY</h4>
        <h4 className='price_'>COST PRICE</h4>
        <h4 className='price_'>SELLING PRICE</h4>
        <h4 className='quantity'>QTY</h4>
        <h4 className='status'>STATUS</h4>
        <h4 className='update'>Update</h4>
        <h4 className='edit'>Edit</h4>
        <h4 className='delete'>Delete</h4>
      </div>
      {StoreProducts &&
        StoreProducts.map((item, index) => (
          <div key={index} className='availiable_items items_'>
            <span className='number_'>
              {' '}
              {(startIndex + index).toString().padStart(3, '0')}
            </span>
            <span className='product__id'>{item.id}</span>
            <span className='category_'>{item.category}</span>
            <span className='price_'>{item.costPrice}</span>
            <span className='price_'>{item.sellingPrice}</span>
            <span className='quantity'>{item.available}</span>
            <span className='status'>
              <span className='status_bar'>
                {renderProductStatus(item.sold, item.available)}
              </span>
            </span>
            <span className='update update_'>
              <span>Update</span>
            </span>
            <span className='edit'>
              <LuEdit size={15} />
            </span>
            <span className='delete'>
              <RiDeleteBin6Line size={18} color='red' />
            </span>
          </div>
        ))}
    </div>
  );
};

export default AvailableStock;
