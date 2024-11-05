import Dashboard from "../Dashboard/dashboard.jsx";
import SalesForm from "../Salesform/salesform.jsx";
import Invoice from "../Invoice/invoice.jsx";
import Expense from "../CreateExpense/createExpense.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "../component/sidebar.jsx"; // Assuming 'components' is the correct folder
import Layout from '../Layoutsidebar.jsx';

function AppLayout() {
    return (
        <Router>
            <Layout>
                <Sidebar />  {/* Sidebar is included here */}
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/sales" element={<SalesForm />} />
                        <Route path="/invoice" element={<Invoice />} />
                        <Route path="/expense" element={<Expense />} />
                    </Routes>
                </div>
            </Layout>
        </Router>
    );
}

export default AppLayout;
