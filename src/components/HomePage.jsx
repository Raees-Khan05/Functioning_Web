import React, { useState } from 'react';
import productsData from './ProductsData'
import NavigationBar from '../components/NavigationBar';
import ProductList from '../components/ProductList';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');

  const filterProducts = () => {
    return productsData
      .filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
      .filter((product) =>
        selectedCategory === 'All' ? true : product.category === selectedCategory
      )
      .filter((product) => {
        if (selectedPriceRange === 'All') return true;
        const price = parseFloat(product.newPrice);
        switch (selectedPriceRange) {
          case '0-50':
            return price <= 50;
          case '51-100':
            return price > 50 && price <= 100;
          case '101-150':
            return price > 100 && price <= 150;
          case '151-200':
            return price > 150 && price <= 200;
          default:
            return true;
        }
      });
  };

  return (
    <div className="home-page">
      <NavigationBar
        query={query}
        setQuery={setQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPriceRange={selectedPriceRange}
        setSelectedPriceRange={setSelectedPriceRange}
      />
      <ProductList products={filterProducts()} />
    </div>
  );
};

export default HomePage;
