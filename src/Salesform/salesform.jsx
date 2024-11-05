import React from 'react';
import './salesForm.css';

const SalesForm = () => {
  return (
    <div className="sales-form">
      <header>
        <h2>Create Sales</h2>
        <button className="sales-button">Sales</button>
      </header>
      <form className="form-section">
        <div className="form-row">
          <div className="form-group">
            <label>Customer*</label>
            <select>
              <option>Select customer</option>
            </select>
          </div>
          <div className="form-group">
            <label>Type*</label>
            <select>
              <option>Cash</option>
            </select>
          </div>
          <div className="form-group">
            <label>Paid Through*</label>
            <select>
              <option>Cash</option>
            </select>
          </div>
          <div className="form-group">
            <label>Sales Date*</label>
            <input type="date" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Contact</label>
            <input type="text" placeholder="Contact no" />
          </div>
          <div className="form-group">
            <label>Tax Type</label>
            <select>
              <option>Inclusive</option>
            </select>
          </div>
          <div className="form-group">
            <label>Due Days</label>
            <input type="number" defaultValue="0" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="Address" />
          </div>
        </div>
        <div className="product-section">
          <div className="product-header">Row 1</div>
          <div className="product-row">
            <input type="text" placeholder="Search Product(ID)" />
            <select>
              <option>Select unit</option>
            </select>
            <input type="number" placeholder="Quantity" />
            <input type="number" placeholder="0.00" />
            <input type="number" placeholder="0.00" />
            <input type="text" placeholder="HSN code" />
            <select>
              <option>Select Tax</option>
            </select>
            <input type="number" placeholder="₹" />
          </div>
          <button type="button" className="add-row-button">Add Row</button>
          <div className="summary-section">
            <div className="summary-box">
              <label>Stock Qty</label>
              <p>0</p>
            </div>
            <div className="summary-box">
              <label>Total Sales</label>
              <p>0</p>
            </div>
          </div>
        </div>
        <div className="totals-section">
          <div className="form-group">
            <label>Adjustment</label>
            <input type="number" placeholder="0.00" />
          </div>
          <div className="totals-values">
            <p>Sub Tax: 0.00</p>
            <p>Tax: 0.00</p>
            <p>Adjustment: 0.00</p>
            <p>Round off: 0.00</p>
            <p>Total: 0.00</p>
          </div>
        </div>
        <button type="submit" className="create-button">Create</button>
      </form>
    </div>
  );
};

export default SalesForm;