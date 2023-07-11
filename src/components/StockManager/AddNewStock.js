import React from 'react';
import { ImUpload3 } from 'react-icons/im';
const AddNewStock = () => {
  return (
    <div className='stock_item_container add_new'>
      <div className='add_item_'>
        <div className='add_new_item_container'>
          <div className='add_item_name'>
            <h5>Invoice Number</h5>
          </div>
          <div className='add_item_input'>
            <input type='text' defaultValue='AX6566JK' />
          </div>
        </div>
        <div className='add_new_item_container'>
          <div className='add_item_name'>
            <h5>Category</h5>
          </div>
          <div className='add_item_input'>
            <input
              className='color_input'
              type='text'
              defaultValue='Stationary'
            />
          </div>
        </div>

        <div className='add_new_item_container middle'>
          <div className='add_item_name'></div>
          <div className='add_item_input multiple'>
            <div className='add_items_multiple'>
              <div>
                <span>Item Name</span>
                <input type='text' />
              </div>
              <div>
                <span>Brand</span>
                <input type='text' />
              </div>
              <div>
                <span>Specification</span>
                <input type='text' />
              </div>
              <div>
                <span>Size</span>
                <input type='text' />
              </div>
            </div>
            <div className='add_items_multiple'>
              <div>
                <span>Quantity</span>
                <input type='number' />
              </div>
              <div>
                <span>Cost Price</span>
                <input type='text' defaultValue='#' />
              </div>
              <div>
                <span>Selling Price</span>
                <input type='text' defaultValue='#' />
              </div>
              <div>
                <span>Expiring date</span>
                <input type='date' />
              </div>
            </div>
          </div>
        </div>

        <div className='add_new_item_container'>
          <div className='add_item_name'></div>
          <div className='add_item_btns'>
            <button className='add_button'>Add New</button>
            <button className='add_category'>Electronics</button>
          </div>
        </div>
        <div className='add_new_item_container'>
          <div className='add_item_name'>
            <h5>Supplier</h5>
          </div>
          <div className='add_item__'>
            <select>
              <option defaultValue='ibezim'>Ibezim Victor</option>
              <option value='richard'>Richard Okafor</option>
              <option value='calistus'>Calistus Umeze</option>
              <option value='eze'>Eze Emmanuel</option>
            </select>
          </div>
        </div>
        <div className='add_new_item_container'>
          <div className='add_item_name'>
            <h5>Upload Invoice</h5>
          </div>
          <div className='add_item__ upload'>
            <label>
              <div>
                <ImUpload3 />
                <span>Choose Photo</span>
                <input className='upload_input' type='file' name='invoice' />
              </div>
            </label>
          </div>
        </div>
        <div className='add_new_item_container'>
          <div className='add_item_name'></div>
          <div className='add_item__ complete'>
            <button className='complete_btn'>Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewStock;
