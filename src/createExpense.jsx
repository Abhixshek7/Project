import React, { useState } from 'react';
import './createExpense.css';
import logo from "./assets/logo.jpeg";


const Expense = () => {
  const [formData, setFormData] = useState({
    type: '',
    paidFrom: '',
    category: '',
    date: '',
    amount: '',
    description: '',
    receipt: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, receipt: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="expense-page">
      {/* Sidebar */}
      

      {/* Expense Form */}
      <div className="expense-container">
        <header className="expense-header">
          <h1>Create Expense</h1>
          <button className="expense-button">Expense</button>
        </header>

        <form className="expense-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Type <span>*</span></label>
            <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="Type" required />
          </div>
          <div className="form-group">
            <label>Paid From <span>*</span></label>
            <select name="paidFrom" value={formData.paidFrom} onChange={handleChange} required>
              <option value="">Select</option>
              <option value="cash">Cash</option>
              <option value="bank">Bank</option>
            </select>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Select category</option>
              <option value="office">Tax included</option>
              <option value="travel">Tax excluded</option>
            
            </select>
          </div>
          <div className="form-group">
            <label>Record Date <span>*</span></label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Total Amount</label>
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
          </div>
          <div className="form-group">
            <label>Attach Receipt (Image or PDF only)</label>
            <input type="file" onChange={handleFileChange} accept="image/*, application/pdf" />
          </div>
          <div className="button-group">
            <button type="submit" className="create-btn">Create</button>
            <button type="button" className="create-add-btn" onClick={handleSubmit}>Create and add another</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Expense;
