import React from 'react';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ["Select Category", "sneakers", "flats", "sandals", "heels"];

  return (
    <select className='select' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
