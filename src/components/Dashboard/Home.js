import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
  return (
    <div className='dashboard_container'>
      <div>
        <h3>Soltec Inventory</h3>
        <h3>And Point of Sale</h3>
        <h3>Management</h3>
        <h3>System</h3>
      </div>
      <div>
        <p>Boost Your Business And Get Detailed Insights</p>
        <p>With Our Professional Inventory And Point Of Sale</p>
        <p>Management System</p>
      </div>
      <Link to='/user/login' className='get_started_btn'>
        Get Started
      </Link>
    </div>
  );
};

export default Home;
