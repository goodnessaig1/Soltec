import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { GoReport } from 'react-icons/go';
import { TbCup } from 'react-icons/tb';
import { BsCart4 } from 'react-icons/bs';
import { LiaSearchSolid } from 'react-icons/lia';
import {
  MdOutlineBakeryDining,
  MdOutlineComputer,
  MdOutlineDining,
} from 'react-icons/md';
import { PiBeerBottleFill } from 'react-icons/pi';
import { baked } from './ProductsData';

const SalesRepLeft = () => {
  // const [bakedProduct, setBaked] = useState(true);
  return (
    <div className='sales_dashboard_left_ct'>
      <div className='sales_left_top'>
        <div className='sales_rep_profie'>
          <div>
            <img
              src='https://ik.imagekit.io/nz8zngrxv/amazon-image/salesrepphoto_-PcWao3_G.png?updatedAt=1689053729552'
              alt='profile'
            />
            <span>Ibadin Victory</span>
          </div>
          <span>
            <span>Sales rep</span>
            <FaCaretDown />
          </span>
        </div>
        <div className='top_category'>
          <div>
            <p>Total </p>
            <p>sales</p>
          </div>
          <span>57</span>
        </div>
        <div className='top_category'>
          <div>
            <p>Top </p>
            <p>category</p>
          </div>
          <span>Beverages</span>
        </div>
        <div className='top_category'>
          <div>
            <p>Last</p>
            <p>sales</p>
          </div>
          <span>13,000</span>
        </div>
        <div className='top_category'>
          <div>
            <p>Returned </p>
            <p>sales</p>
          </div>
          <span>Television</span>
        </div>
        <div className='top_category'>
          <div>
            <p>View</p>
            <p>sales</p>
          </div>
          <span>Ice-cream</span>
        </div>
        <div className='generate_rep'>
          <p>GENERATE</p>
          <p>
            REPORT <GoReport />
          </p>
        </div>
      </div>
      <div className='sales_rep_bottom'>
        <div className='sales_rep_bottom_left'>
          <div>
            <TbCup size={40} />
          </div>
          <div>
            <MdOutlineDining size={40} />
          </div>
          <div className='baked'>
            <MdOutlineBakeryDining size={40} />
          </div>
          <div>
            <PiBeerBottleFill size={40} />
          </div>
          <div>
            <MdOutlineComputer size={40} />
          </div>
        </div>
        <div className='sales_rep_bottom_right'>
          <div className='sales_rep_bottom_right_top'>
            <div className='shopping_cart'>
              <span>Shopping Cart</span>
              <BsCart4 />
            </div>
            <div className='shopping_search'>
              <input type='text' placeholder='search products by keywords' />
              <LiaSearchSolid />
            </div>
          </div>
          <div className='sales_rep_bottom_products'>
            {baked &&
              baked.map((item, index) => (
                <div key={index} className='product_container'>
                  <div className='product_img'>
                    <img src={item.image} alt='product_Img' />
                  </div>
                  <div className='product_description'>
                    <div className='product__name'>
                      <span>{item.name}</span>
                      <div>
                        <span>-</span>
                        <input type='number' defaultValue={0} />
                        <span>+</span>
                      </div>
                    </div>
                    {/* <br /> */}
                    <div className='product_category'>
                      <span>Brand </span>
                      <div>
                        <span>{item.brand}</span>
                        <FaCaretDown size={13} />
                      </div>
                    </div>
                    <div className='product_category'>
                      <span>Specification </span>
                      <div>
                        <span>{item.specifiction}</span>
                        <FaCaretDown size={13} />
                      </div>
                    </div>
                    <div className='product_category'>
                      <span>Size </span>
                      <div>
                        <span>{item.size}</span>
                        <FaCaretDown size={13} />
                      </div>
                    </div>
                    <div className='add_product_to_order'>Add to order</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesRepLeft;
