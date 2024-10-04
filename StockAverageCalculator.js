import React, { useState } from 'react';

const StockAverageCalculator = () => {
  const [entries, setEntries] = useState([]);
  const [price, setPrice] = useState('');
  const [shares, setShares] = useState('');

  const handleAddEntry = () => {
    if (price && shares) {
      const newEntry = {
        price: parseFloat(price),
        shares: parseFloat(shares),
      };
      setEntries([...entries, newEntry]);
      setPrice('');
      setShares('');
    }
  };

  const handleClearEntries = () => {
    setEntries([]); // Clears all the entries
  };

  const calculateAverage = () => {
    const totalShares = entries.reduce((total, entry) => total + entry.shares, 0);
    const totalCost = entries.reduce((total, entry) => total + entry.price * entry.shares, 0);
    return totalShares ? (totalCost / totalShares).toFixed(2) : 0;
  };

  return (
    <div>
      <h1>Stock Average Calculator</h1>
      <div>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Shares"
          value={shares}
          onChange={(e) => setShares(e.target.value)}
        />
        <button onClick={handleAddEntry}>Add Entry</button>
        <button onClick={handleClearEntries}>Clear All Entries</button>
      </div>
      <h2>Entries:</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            Price: ${entry.price}, Shares: {entry.shares}
          </li>
        ))}
      </ul>
      <h2>Average Price per Share: ${calculateAverage()}</h2>
    </div>
  );
};

export default StockAverageCalculator;
