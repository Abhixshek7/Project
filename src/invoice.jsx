import React from 'react';
import './Invoice.css';


const Invoice = () => {
  return (
    <div className="invoice-page">
      
      <div className="invoice-container">
        <header className="invoice-header">
          <div className="title">INVOICE</div>
        </header>

        <section className="invoice-details">
          <div className="section">
            <h3>Customer</h3>
            <p>Name: _________________________</p>
            <p>Address: ______________________</p>
            <p>Phone: ________________________</p>
          </div>
          <div className="section">
            <h3>Shipped to</h3>
            <p>Company: ______________________</p>
            <p>Location: ______________________</p>
          </div>
          <div className="section">
            <h3>Invoice Details</h3>
            <p>Invoice Number: _______________</p>
            <p>Date: _________________________</p>
            <p>Vehicle: _______________________</p>
            <p>Seller Name: __________________</p>
          </div>
        </section>

        <table className="invoice-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item and Description</th>
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
              <td>____________________________</td>
              <td>____</td>
              <td>____</td>
              <td>____</td>
              <td>____</td>
              <td>_________</td>
            </tr>
          </tbody>
        </table>

        <div className="amount-in-words">
          Amount in words: __________________________
        </div>

        <section className="totals-section">
          <div className="totals-row">
            <span>Subtotal</span>
            <span>_________</span>
          </div>
          <div className="totals-row">
            <span>CGST 4%</span>
            <span>_________</span>
          </div>
          <div className="totals-row">
            <span>SGST 4%</span>
            <span>_________</span>
          </div>
          <div className="totals-row total">
            <span>Total(₹)</span>
            <span>_________</span>
          </div>
        </section>

        <div className="buttons">
          <button className="button share">Share</button>
          <button className="button print">Print</button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
