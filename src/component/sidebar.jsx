import React from 'react';
import './sidebar.css';
import logo from "../assets/logo.jpeg";
import house from "../assets/house.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src ={logo}alt="Cloud Accounting" />
        <h2>DEMO</h2>
      </div>
      <div className='list'>
      <nav>
        <ul >
          <li className='listelements'><img className='image' src={house}></img>Dashboard</li>
          <li className='listelements'>Sales</li>
          <li className='listelements'>Expenses</li>
          <li className='listelements'>Inventory</li>
          <li className='listelements'>Accounts</li>
          <li className='listelements'>Settings</li>
        </ul> 
      </nav>
      </div>
    </div>
  );
}

export default Sidebar;
