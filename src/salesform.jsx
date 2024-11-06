import React, { useState } from 'react';
import './SalesFrom.css'

const SalesForm = () => {
  const [formData, setFormData] = useState({
    customer: '',
    type: '',
    paidThrough: '',
    salesDate: '',
    contact: '',
    taxType: '',
    dueDays: '',
    address: '',
    productID: '',
    unit: '',
    quantity: 0,
    price: 0,
    hsnCode: '',
    tax: 0,
    adjustment: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="sales-page">
      <div className="main-content">
        <header className="header">
          <h1 className="title">DEMO</h1>
          <div className="admin-profile">
            <span className="admin-text">Admin</span>
          </div>
        </header>

        <div className="form-container">
          <h2>Create Sales</h2>
          <button className="new-btn">+ New</button>
          <form onSubmit={handleSubmit} className="sales-form">
            <div className="row">
              <div className="input-group">
                <label>Customer</label>
                <select name="customer" value={formData.customer} onChange={handleInputChange}>
                  <option value="">Select customer</option>
                  <option value="customer1">Customer 1</option>
                  <option value="customer2">Customer 2</option>
                </select>
              </div>

              <div className="input-group">
                <label>Type</label>
                <select name="type" value={formData.type} onChange={handleInputChange}>
                  <option value="Cash">Cash</option>
                  <option value="Credit">Credit</option>
                </select>
              </div>

              <div className="input-group">
                <label>Paid Through</label>
                <select name="paidThrough" value={formData.paidThrough} onChange={handleInputChange}>
                  <option value="Cash">Cash</option>
                  <option value="Card">Card</option>
                </select>
              </div>

              <div className="input-group">
                <label>Sales Date</label>
                <input type="date" name="salesDate" value={formData.salesDate} onChange={handleInputChange} />
              </div>

              <div className="input-group">
                <label>Contact</label>
                <input type="text" name="contact" value={formData.contact} onChange={handleInputChange} placeholder="Contact no" />
              </div>

              <div className="input-group">
                <label>Tax Type</label>
                <select name="taxType" value={formData.taxType} onChange={handleInputChange}>
                  <option value="Inclusive">Inclusive</option>
                  <option value="Exclusive">Exclusive</option>
                </select>
              </div>

              <div className="input-group">
                <label>Due Days</label>
                <input type="number" name="dueDays" value={formData.dueDays} onChange={handleInputChange} />
              </div>

              <div className="input-group">
                <label>Address</label>
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" />
              </div>
            </div>

            <div className="row">
              <h3>Row 1</h3>
              <div className="input-group">
                <label>Search Product(ID)</label>
                <input type="text" name="productID" value={formData.productID} onChange={handleInputChange} />
              </div>

              <div className="input-group">
                <label>Select unit</label>
                <select name="unit" value={formData.unit} onChange={handleInputChange}>
                  <option value="pcs">pcs</option>
                  <option value="kg">kg</option>
                  <option value="ltr">ltr</option>
                </select>
              </div>

              <div className="input-group">
                <label>Quantity</label>
                <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
              </div>

              <div className="input-group">
                <label>Price</label>
                <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
              </div>

              <div className="input-group">
                <label>HSN Code</label>
                <input type="text" name="hsnCode" value={formData.hsnCode} onChange={handleInputChange} />
              </div>
            </div>

            <div className="row">
              <button type="button" className="add-row-btn">Add Row</button>
            </div>

            <div className="summary-section">
              <div>
                <span>Stock Qty</span>
                <h4>0</h4>
              </div>
              <div>
                <span>Total Sales</span>
                <h4>0</h4>
              </div>
            </div>

            <button type="submit" className="submit-btn">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalesForm;
