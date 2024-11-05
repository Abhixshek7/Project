import React, { useState } from 'react';
import './SalesTax.css';

const SalesTaxSummaryReport = () => {
  // Initial data for the report
  const initialData = [
    { id: 1, date: '2024-10-16', voucherNo: 'INV/01', account: 'Customer1', voucher: 5480.00, taxType: 'IGST 18%', totalTax: 986.4 },
    { id: 2, date: '2024-10-13', voucherNo: 'INV/02', account: 'Customer1', voucher: 5480.00, taxType: 'SGST 9%', totalTax: 493.2 },
    { id: 3, date: '2024-10-13', voucherNo: 'INV/02', account: 'Customer1', voucher: 5480.00, taxType: 'CGST 9%', totalTax: 493.2 },
    { id: 4, date: '2024-10-10', voucherNo: 'INV/03', account: 'Customer2', voucher: 5480.00, taxType: 'IGST 18%', totalTax: 986.4 },
    { id: 5, date: '2024-10-09', voucherNo: 'INV/04', account: 'Vendor 1', voucher: 7500.00, taxType: 'SGST 9%', totalTax: 572.03 },
    { id: 6, date: '2024-10-06', voucherNo: 'INV/04', account: 'Vendor 1', voucher: 7500.00, taxType: 'CGST 9%', totalTax: 572.03 },
  ];

  const [reportData] = useState(initialData); // Keeping the original data intact
  const [filteredData, setFilteredData] = useState(initialData);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleDateFilter = () => {
    const filtered = reportData.filter((item) => {
      const itemDate = new Date(item.date);
      const startDate = fromDate ? new Date(fromDate) : null;
      const endDate = toDate ? new Date(toDate) : null;

      return (
        (!startDate || itemDate >= startDate) &&
        (!endDate || itemDate <= endDate)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <header className="header">
        <h2>DEMO</h2>
        <button className="new-button">New</button>
        <div className="user-icon">Admin</div>
      </header>

      <nav className="tabs">
        <button className="tab">Sales</button>
        <button className="tab">Purchase Tax</button>
        <button className="tab">Taxes</button>
      </nav>

      <section className="content">
        <h3>Sales Tax Summary Report</h3>
        <div className="date-picker">
          <input 
            type="date" 
            value={fromDate} 
            onChange={(e) => setFromDate(e.target.value)} 
            placeholder="Start Date" 
          />
          <input 
            type="date" 
            value={toDate} 
            onChange={(e) => setToDate(e.target.value)} 
            placeholder="End Date" 
          />
          <button className="generate-button" onClick={handleDateFilter}>Generate</button>
        </div>

        <div className="report-columns">
          <div className="report-column">
            <h4>Date</h4>
            {filteredData.map((item) => (
              <p key={item.id}>{item.date}</p>
            ))}
          </div>
          <div className="report-column">
            <h4>Voucher No</h4>
            {filteredData.map((item) => (
              <p key={item.id}>{item.voucherNo}</p>
            ))}
          </div>
          <div className="report-column">
            <h4>Account</h4>
            {filteredData.map((item) => (
              <p key={item.id}>{item.account}</p>
            ))}
          </div>
          <div className="report-column">
            <h4>Voucher</h4>
            {filteredData.map((item) => (
              <p key={item.id}>{item.voucher.toFixed(2)}</p>
            ))}
          </div>
          <div className="report-column">
            <h4>Tax Type</h4>
            {filteredData.map((item) => (
              <p key={item.id}>{item.taxType}</p>
            ))}
          </div>
          <div className="report-column">
            <h4>Total Tax</h4>
            {filteredData.map((item) => (
              <p key={item.id}>{item.totalTax.toFixed(2)}</p>
            ))}
          </div>
        </div>

        <div className="totals">
          <p>IGST @18% : 1,972.8</p>
          <p>CGST @9% : 1,065.03</p>
          <p>SGST @9% : 1,065.03</p>
          <h4>Total Tax: 4,103.26</h4>
        </div>

        <div className="pagination">
          <button className="page-number">1</button>
          <button className="page-number">2</button>
          <button className="page-number">3</button>
          <button className="page-number">4</button>
          <button className="page-number">5</button>
        </div>
      </section>
    </div>
  );
};

export default SalesTaxSummaryReport;
