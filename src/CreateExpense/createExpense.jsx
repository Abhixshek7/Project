import React from 'react';
import './createExpense.css';

const ExpenseForm = () => {
  return (
    <div className="expense-form">
      <header>
        <h2>Create Expense</h2>
        <button className="expense-button">Expense</button>
      </header>
      <form className="form-section">
        <div className="form-row">
          <div className="form-group">
            <label>Type *</label>
            <input type="text" placeholder="Type" />
          </div>
          <div className="form-group">
            <label>Paid From *</label>
            <select>
              <option>Select</option>
            </select>
          </div>
          <div className="form-group">
            <label>Category</label>
            <select>
              <option>Select category</option>
            </select>
          </div>
          <div className="form-group">
            <label>Record Date *</label>
            <input type="date" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Total Amount</label>
            <input type="text" placeholder="Amount" />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input type="text" placeholder="Description" />
          </div>
        </div>
        <div className="file-upload">
          <label>
            <span role="img" aria-label="attachment">📎</span> Attach receipt (Image or PDF only)
          </label>
          <input type="file" />
        </div>
        <div className="action-buttons">
          <button type="submit" className="create-button">Create</button>
          <button type="button" className="create-add-button">Create and add another</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
