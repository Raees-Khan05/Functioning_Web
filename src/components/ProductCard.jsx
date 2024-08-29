
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.company}</p>
      <p>{product.star} {product.reviews}</p>
      <p><span className="prev-price">{product.prevPrice}</span> <span className="new-price">${product.newPrice}</span></p>
      <p>{product.color} | {product.category}</p>
    </div>
  );
};

export default ProductCard;