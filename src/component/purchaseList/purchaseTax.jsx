import React, { useState } from 'react';
import './PurchaseTax.css';

const PurchaseList = () => {
  const initialData = [
    { id: 1, date: '2024-10-16', sellerGst: '27ABCDE1234F1Z5', purchaserGst: '27EFGHI5678J1Z7', voucherNo: 'PUR/01', amount: 12000.00, gstRate: 18 },
    { id: 2, date: '2024-10-13', sellerGst: '27ABCDE1234F1Z5', purchaserGst: '27JKLMN9123K1Z9', voucherNo: 'PUR/02', amount: 5500.00, gstRate: 9 },
    { id: 3, date: '2024-10-12', sellerGst: '27QRSTU4567L1Z3', purchaserGst: '27VWXYZ7890M1Z1', voucherNo: 'PUR/03', amount: 8000.00, gstRate: 18 },
    { id: 4, date: '2024-10-10', sellerGst: '27ABCDE1234F1Z5', purchaserGst: '27VWXYZ7890M1Z1', voucherNo: 'PUR/04', amount: 9500.00, gstRate: 9 },
    { id: 5, date: '2024-10-09', sellerGst: '27QRSTU4567L1Z3', purchaserGst: '27EFGHI5678J1Z7', voucherNo: 'PUR/05', amount: 6700.00, gstRate: 18 },
  ];

  const [purchaseData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const calculateGstAmount = (amount, gstRate) => {
    return (amount * gstRate) / 100;
  };

  const totalGstAmount = filteredData.reduce((total, item) => {
    return total + calculateGstAmount(item.amount, item.gstRate);
  }, 0);

  const handleDateFilter = () => {
    const filtered = purchaseData.filter((item) => {
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
    <div className="purchase-list-container">
      <header className="header">
        <h2>Purchase List</h2>
      </header>

      <div className="date-filter">
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
        <button onClick={handleDateFilter}>Generate</button>
      </div>

      <div className="purchase-table">
        <div className="table-header">
          <div>Date</div>
          <div>Seller GST ID</div>
          <div>Purchaser GST ID</div>
          <div>Voucher No</div>
          <div>Amount</div>
          <div>GST Rate (%)</div>
          <div>GST Amount</div>
          <div>Total Amount</div>
        </div>
        
        {filteredData.map((item) => {
          const gstAmount = calculateGstAmount(item.amount, item.gstRate);
          const totalAmount = item.amount + gstAmount;

          return (
            <div key={item.id} className="table-row">
              <div>{item.date}</div>
              <div>{item.sellerGst}</div>
              <div>{item.purchaserGst}</div>
              <div>{item.voucherNo}</div>
              <div>{item.amount.toFixed(2)}</div>
              <div>{item.gstRate}%</div>
              <div>{gstAmount.toFixed(2)}</div>
              <div>{totalAmount.toFixed(2)}</div>
            </div>
          );
        })}
        
        <div className="total-row">
          <div colSpan="6">Total GST Amount:</div>
          <div>{totalGstAmount.toFixed(2)}</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseList;
