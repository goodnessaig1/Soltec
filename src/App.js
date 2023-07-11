import './App.css';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import LoginHome from './components/SignIn/LoginHome';
import SalesRepLogin from './components/SignIn/SalesRepLogin';
import Register from './components/SignIn/SignIn';
import Home from './components/Dashboard/Home';
import StoreManager from './components/StoreManager/StoreManager';
import StockManager from './components/StockManager/StockManager';
import SalesRep from './components/SalesRep/SalesRep';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/welcome/user/login' exact component={LoginHome} />
      <Route path='/user/login' exact component={SalesRepLogin} />
      <Route path='/create_account' exact component={Register} />
      <Route path='/user/dashboard' exact component={Dashboard} />
      <Route path='/user/store_manager' exact component={StoreManager} />
      <Route path='/user/stock_management' exact component={StockManager} />
      <Route path='/user/sales_rep/dashboard' exact component={SalesRep} />
    </Switch>
  );
}

export default App;
