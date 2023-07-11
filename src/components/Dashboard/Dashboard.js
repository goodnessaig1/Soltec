import './Dashboard.css';
import { SlCalender } from 'react-icons/sl';
import { MdNotifications } from 'react-icons/md';
import BarChart from './BarChat';
import LineChart from './LineChat';
import Overview from './Overview';
import PageLayout from '../HOC/PageLayout';
const Dashboard = () => {
  return (
    <PageLayout text='Dashboard'>
      <div className='main__dashboard'>
        <div className='dashboard_top'>
          <div className='dashboard__top'>
            <h4>Inventory overview (Today)</h4>
            <div className='today_container'>
              <div>Today</div>
              <SlCalender size={16} />
              <span>Search</span>
            </div>
          </div>
          <div className='dashboard_top_bottom'>
            <div className='dashboard_bottom_left'>
              <div>
                <span>No of sales</span>
                <span>120</span>
              </div>
              <div>
                <span>Total Profit</span>
                <span>#120,000</span>
              </div>
              <div>
                <span>Total sales</span>
                <span>#600,000</span>
              </div>
            </div>
            <div className='dashboard_top_right'>
              <div className='dashboard_right_item'>
                <span>Generate</span>
                <span>Barcode</span>
              </div>
              <div className='dashboard_right_item'>
                <span>Generate</span>
                <span>Report</span>
              </div>
              <div className='dashboard_right__item'>
                <span>Stock Expiring</span>
                <span>Date Alert</span>
                <div className='alert_'>
                  <MdNotifications size={22} />
                  <span></span>
                </div>
              </div>
              <div className='dashboard_right_item'>
                <span>Cloud</span>
                <span>Storage</span>
              </div>
              <div className='dashboard_right_item'>
                <span>Expenses/</span>
                <span>Maintenance</span>
              </div>
              <div className='dashboard_right__item'>
                <span>Low Stock</span>
                <span>Alert</span>
                <div className='alert_'>
                  <MdNotifications size={22} />
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='analysis_container'>
          <div className='charts_container'>
            <BarChart />
            <LineChart />
          </div>
          <div className='review_container'>
            <Overview />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Dashboard;
