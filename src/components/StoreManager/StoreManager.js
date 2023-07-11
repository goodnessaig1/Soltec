import React, { useState } from 'react';
import './StoreManager.css';
import SoldStock from './SoldStock';
import AllProducts from './AllProducts';
import PageLayout from '../HOC/PageLayout';

const StoreManager = () => {
  const [soldStock, setSoldStock] = useState(true);
  const [allProduct, setAllProduct] = useState(false);
  return (
    <PageLayout
      text='Store Manager'
      setSold={setSoldStock}
      setAllProduct={setAllProduct}
    >
      <div className='main_store_dashboard'>
        {soldStock && <SoldStock />}
        {allProduct && <AllProducts />}
      </div>
    </PageLayout>
  );
};

export default StoreManager;
