import React, { useState } from 'react';
import { StoreProducts } from './StockData';
import { RiDeleteBin6Line } from 'react-icons/ri';

const Restock = () => {
  let startIndex = 1;
  const [updateIndex, setUpdateIndex] = useState(0);

  return (
    <div className='stock_item_container'>
      <div className='availiable_items top_'>
        <h4 className='number_'>NO</h4>
        <h4 className='product__id'>PRODUCT ID</h4>
        <h4 className='category_'>CATEGORY</h4>
        <h4 className='price_'>COST PRICE</h4>
        <h4 className='price_'>SELLING PRICE</h4>
        <h4 className='quantity'>QUANTITY</h4>
        <h4 className='update'>UPDATE</h4>
        <h4 className='update'>Restock</h4>
        <h4 className='delete'>Delete</h4>
      </div>
      {StoreProducts &&
        StoreProducts.map((item, index) => (
          <div
            key={index}
            className='availiable_items items'
            onClick={() => setUpdateIndex(index)}
          >
            <span className='number_'>
              {(startIndex + index).toString().padStart(3, '0')}
            </span>
            <span className='product__id'>{item.id}</span>
            <span className='category_'>{item.category}</span>
            <span className='price_'>{item.costPrice}</span>
            <span className='price_'>{item.sellingPrice}</span>
            <span className='quantity'>{item.available}</span>
            <span className='update upda'>
              <div>
                <span>+</span>
                <input defaultValue='0' type='number' />
                <span>-</span>
              </div>
            </span>
            <span className='update'>
              <span className={`${index === updateIndex ? 'update_b' : ''}`}>
                Restock
              </span>
            </span>
            <span className='delete'>
              <RiDeleteBin6Line size={18} color='red' />
            </span>
          </div>
        ))}
    </div>
  );
};

export default Restock;
