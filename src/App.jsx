
import Dashboard from "./dashboard.jsx";
import SalesForm from "./salesform.jsx";
import Invoice from "./invoice.jsx";
import Expense from './createExpense.jsx'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Sidebar from "./component/sidebar.jsx";
function App(){
  return(

    <div style = {{display:"flex"}}>
    <Sidebar/>
    
   <Invoice/>
    </div>
  );
}

export default App