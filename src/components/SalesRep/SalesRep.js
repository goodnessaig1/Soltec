import React from 'react';
import './SalesRep.css';

import SalesSidebar from './SalesSidebar';
import SalesRepLeft from './SalesRepLeft';
import SalesRepRight from './SalesRepRight';

const SalesRep = () => {
  return (
    <div className='sales_rep_container'>
      <div>
        <SalesSidebar />
        <div className='sales_dashboard'>
          <div className='sales_dashboard_left'>
            <SalesRepLeft />
          </div>
          <div className='sales_dashboard_right'>
            <SalesRepRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesRep;
