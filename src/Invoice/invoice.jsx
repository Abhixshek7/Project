import React from 'react';
import './invoice.css';

const Invoice = () => {
  return (
    <div className="invoice">
      <header>
        <h2>Invoice</h2>
        <div className="invoice-actions">
          <button className="share-button">Share</button>
          <button className="print-button">Print</button>
        </div>
      </header>
      
      <div className="invoice-details">
        <div className="details-section">
          <h3>Customer</h3>
          <p>.........</p>
          <p>.........</p>
          <p>.........</p>
        </div>
        <div className="details-section">
          <h3>Shipped to</h3>
          <p>.........</p>
          <p>.........</p>
        </div>
        <div className="details-section">
          <h3>Invoice details</h3>
          <p>.........</p>
          <p>.........</p>
          <p>.........</p>
          <p>.........</p>
        </div>
      </div>

      <table className="invoice-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item and description</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Rate (exl)</th>
            <th>Tax</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>   <br/><small>        </small></td>
            <td>   </td>
            <td>    </td>
            <td>    </td>
            <td>  </td>
            <td>   </td>
          </tr>
        </tbody>
      </table>

      <div className="invoice-summary">
        <p>Amount in words:        </p>
        <div className="totals">
          <p>Subtotal: <span> </span></p>
          <p>CGST 4%: <span> </span></p>
          <p>SGST 4%: <span>  </span></p>
          <p className="total">Total (₹): <span>   </span></p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
