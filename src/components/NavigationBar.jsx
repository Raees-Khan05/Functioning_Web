import React from 'react';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';

const NavigationBar = ({ query, setQuery, selectedCategory, setSelectedCategory, selectedPriceRange, setSelectedPriceRange }) => {
  return (
    <div className="navigation-bar">
      <SearchBar query={query} setQuery={setQuery} />
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <PriceFilter selectedPriceRange={selectedPriceRange} setSelectedPriceRange={setSelectedPriceRange} />
    </div>
  );
};

export default NavigationBar;
