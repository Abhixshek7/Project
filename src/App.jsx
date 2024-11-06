import Sidebar from "./component/sidebar.jsx"
import Dashboard from "./dashboard.jsx";
import SalesForm from "./salesform.jsx";
import Invoice from "./invoice.jsx";
import Expense from './createExpense.jsx'

function App(){
  return(

    <div style = {{display:"flex"}}>
    <Sidebar/>
    <SalesForm/>
    
   
   
    </div>
  );
}

export default App