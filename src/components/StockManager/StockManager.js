import React, { useState } from 'react';
import PageLayout from '../HOC/PageLayout';
import './StockManager.css';
import { LiaSearchSolid } from 'react-icons/lia';
import AvailableStock from './AvailableStock';
import AddNewStock from './AddNewStock';
import Restock from './Restock';

const StockManager = () => {
  const [available, setAvailable] = useState(true);
  const [addNew, setAddNew] = useState(false);
  const [restock, setRestock] = useState(false);
  return (
    <PageLayout text='Stock Manager'>
      <div className='stock_manager_container'>
        <div className='stock_manager_top'>
          <div className='stock_top_features'>
            <h4
              className={`${available ? 'text_underline' : ''} `}
              onClick={() =>
                setAvailable(true) & setAddNew(false) & setRestock(false)
              }
            >
              Available Stock
            </h4>
            <h4
              className={`${addNew ? 'text_underline' : ''} `}
              onClick={() =>
                setAvailable(false) & setAddNew(true) & setRestock(false)
              }
            >
              Add New Stock
            </h4>
            <h4
              className={`${restock ? 'text_underline' : ''} `}
              onClick={() =>
                setAvailable(false) & setAddNew(false) & setRestock(true)
              }
            >
              Restock
            </h4>
          </div>
          <div className='stock_manager_t_left'>
            <div className='stock_search_container'>
              <div>
                <input
                  type='text'
                  className='stock_input_search'
                  placeholder='search products here'
                />
                <LiaSearchSolid />
              </div>
              <span className='stock_search_btn'>Search</span>
            </div>
            {!addNew && (
              <div className='filter'>
                <span>filter</span>
              </div>
            )}
          </div>
        </div>
        <div>
          {available && <AvailableStock />}
          {addNew && <AddNewStock />}
          {restock && <Restock />}
        </div>
      </div>
    </PageLayout>
  );
};

export default StockManager;
