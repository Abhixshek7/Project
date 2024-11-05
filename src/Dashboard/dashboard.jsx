import React from 'react';
import './dashboard.css';

import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  // const navigate = useNavigate();
  // const handleSales = () =>{
  //   navigate('/SalesForm');
  // }
  return (
    <div className="dashboard-container">
      
      <div className="content">
        <header className="header">
          <h1>Dashboard</h1>
          <div className="admin-section">
            <button className="new-btn">+ New</button>
            <span className="admin-text">Admin</span>
          </div>
        </header>

        <div className="cards-section">
          <div className="card">
            <p>Incomes</p>
            <h2>₹9,450.00</h2>
            <span className="percentage positive">+2.7%</span>
          </div>
          <div className="card">
            <p>Expenses</p>
            <h2>₹3,945.55</h2>
            <span className="percentage negative">-5.3%</span>
          </div>
          <div className="card">
            <p>Balance</p>
            <h2>₹5,502.45</h2>
            <span className="percentage positive">+12.5%</span>
          </div>
        </div>

        <div className="actions-section">
          <button className="action-btn">Add Product</button>
          <button className="action-btn">Add Expense</button>
          <button className="action-btn">Add Sales</button>
        </div>

        <div className="stats-section">
          <div className="chart">
            <h3>Expenses by Category</h3>
            <div className="pie-chart">
              {/* Placeholder for chart */}
            </div>
            <ul className="chart-legend">
              <li><span className="legend-circle color1"></span> Goods Purchase - 45.35%</li>
              <li><span className="legend-circle color2"></span> Employees Salary - 21.15%</li>
              <li><span className="legend-circle color3"></span> Transportation - 15.47%</li>
              <li><span className="legend-circle color4"></span> Rent - 10.97%</li>
            </ul>
          </div>

          <div className="products">
            <h3>Top Products</h3>
            <ul className="product-stats">
              <li><span className="product-name">Shampoo</span><span className="product-bar color1"></span><span className="product-percent">32%</span></li>
              <li><span className="product-name">Soap</span><span className="product-bar color2"></span><span className="product-percent">25%</span></li>
              <li><span className="product-name">Bathroom Essentials</span><span className="product-bar color3"></span><span className="product-percent">19%</span></li>
              <li><span className="product-name">Snacks</span><span className="product-bar color4"></span><span className="product-percent">23%</span></li>
            </ul>
          </div>
        </div>

        <div className="transactions-section">
          <h3>Last Transactions</h3>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Method</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Customer 1</td><td>Cash</td><td>2024/04/01</td><td>₹750.00</td></tr>
              <tr><td>Vendor 2D</td><td>Cash</td><td>2024/04/02</td><td>₹900.00</td></tr>
              <tr><td>Rent</td><td>Online Banking</td><td>2024/04/03</td><td>₹500.00</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
