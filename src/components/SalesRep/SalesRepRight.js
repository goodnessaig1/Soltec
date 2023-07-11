import React, { useState } from 'react';
import { orders } from './ProductsData';
import { RiCalculatorLine } from 'react-icons/ri';
import { MdOutlinePayments } from 'react-icons/md';
import { BsCreditCard } from 'react-icons/bs';
import { TbCoinBitcoin } from 'react-icons/tb';

const SalesRepRight = () => {
  const [cash, setCash] = useState(true);
  const [card, setCard] = useState(false);
  const [crypto, setCrypto] = useState(false);
  return (
    <div className='sales_dashboard_right_ct'>
      <div className='sales_dashboard_r_top'>
        <h4>Total Sales </h4>
        <span># 623,453</span>
      </div>
      <div className='product_activity'>
        <span className='product_activity_name'>Product Name</span>
        <span className='product_activity_scan'>Scan Product</span>
      </div>
      <div className='purchase_products'>
        <h4 className='purchase_item'>ITEM</h4>
        <h4 className='purchase_quantity'>QTY</h4>
        <h4 className='purchase_price'>PRICE</h4>
        <h4 className='purchase_amount'>AMOUNT</h4>
      </div>
      <div className='purchase_container'>
        {orders &&
          orders.map((item, index) => (
            <div key={index} className='purchase__procuts_ct'>
              <div className='purchase__products'>
                <span className='purchase_item'>{item.name}</span>
                <span className='purchase_quantity'>{item.quantity}</span>
                <span className='purchase_price'>{item.price}</span>
                <span className='purchase_amount'>{item.amount}</span>
              </div>
              <hr className='store_manager_hr' />
            </div>
          ))}
        <div className='purchase_total'>
          <h6>TOTAL</h6>
          <span>6,900.00</span>
        </div>
      </div>
      <div className='purchase__middle'>
        <div className='purchase_middle'>
          <span>
            <RiCalculatorLine />
          </span>
          <div>
            <span>Add Discount</span>
          </div>
          <div>
            <span>Promo</span>
          </div>
        </div>
        <h4>Payment Method</h4>
        <div className='payment_method'>
          <div
            className={`${
              cash ? 'active_payment_method p_method' : ' p_method'
            }`}
            onClick={() => setCash(true) & setCard(false) & setCrypto(false)}
          >
            <div>
              <MdOutlinePayments size={22} />
              <span>cash</span>
            </div>
          </div>
          <div
            className={`${
              card ? 'active_payment_method p_method' : ' p_method'
            }`}
            onClick={() => setCash(false) & setCard(true) & setCrypto(false)}
          >
            <div>
              <BsCreditCard size={22} />
              <span>card</span>
            </div>
          </div>
          <div
            className={`${
              crypto ? 'active_payment_method p_method' : ' p_method'
            }`}
            onClick={() => setCash(false) & setCard(false) & setCrypto(true)}
          >
            <div>
              <TbCoinBitcoin size={22} />
              <span>crypto</span>
            </div>
          </div>
        </div>
        <div className='amount_recieved'>
          <div>
            <h6>Amont Received</h6>
            <span></span>
          </div>
          <div>
            <h6>Purchase Balance</h6>
            <span></span>
          </div>
        </div>
        <div className='print'>
          <span>PRINT</span>
        </div>
      </div>
    </div>
  );
};

export default SalesRepRight;
