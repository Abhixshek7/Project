
import Dashboard from "./Dashboard/dashboard.jsx";
import SalesForm from "./Salesform/salesform.jsx";
import Invoice from "./Invoice/invoice.jsx";
import Expense from './CreateExpense/createExpense.jsx'
import Login from "./component/login/login.jsx";
import LoginForm from "./component/login/signup.jsx";
import ForgetPassword from "./component/forgetPassword/forget.jsx";
import Sidebar from "./component/sidebar.jsx";
import PurchaseList from "./component/purchaseList/purchaseTax.jsx";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App(){
  return(

    <div style = {{display:"flex"}}>
      <Router>
        <Routes>

       
    <Route path = "/forget" element = {<ForgetPassword/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App