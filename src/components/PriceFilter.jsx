import React from 'react';

const PriceFilter = ({ selectedPriceRange, setSelectedPriceRange }) => {
  const priceRanges = ["Select Price", "0-50", "51-100", "101-150", "151-200"];

  return (
    <select className='select' value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}>
      {priceRanges.map((range) => (
        <option key={range} value={range}>
          {range}
        </option>
      ))}
    </select>
  );
};

export default PriceFilter;
