import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const LoginHome = () => {
  return (
    <div className='login_in_home'>
      <div className='login__ct'>
        <div>
          <p>Soltec Inventory</p>
          <p>And Point Of Sale</p>
          <p>Management System </p>
        </div>
        <div className='login_category'>
          <div className='login_sales_rep'>
            <div className='login_img_container'>
              <img
                src='https://ik.imagekit.io/nz8zngrxv/amazon-image/login_wLOaumllN.png?updatedAt=1688588104919'
                alt=''
              />
            </div>
            <p>Member Login</p>
            <Link to='/user/login' className='login_btn'>
              Login
            </Link>
          </div>
          <div className='login_admin'>
            <div className='login_img_container'>
              <img
                src='https://ik.imagekit.io/nz8zngrxv/amazon-image/salesrep_Y6yGPjQqR.jpg?updatedAt=1688490528371'
                alt=''
              />
            </div>
            <p>Don't have an account?</p>
            <Link to='/create_account' className='login_btn'>
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHome;
