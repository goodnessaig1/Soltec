import React from 'react';
import Header from '../Header/Header';
import SideBar from './SideBar';

const PageLayout = ({ children, text, setSold, setAllProduct }) => {
  return (
    <div className='page_layout_container'>
      <div className='header__container'>
        <Header text={text} />
      </div>
      <div className='main_page_container'>
        <div className='side_bar_ct'>
          <SideBar setSold={setSold} setAllProduct={setAllProduct} />
        </div>
        <div className='main_page_container__'>{children}</div>
      </div>
    </div>
  );
};

export default PageLayout;
