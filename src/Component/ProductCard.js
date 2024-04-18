// components/ProductCard.js

import React from 'react';

const ProductCard = ({ product }) => {
      const productNameCapitalized = product.name.toUpperCase();

  return (
    <div className="product-card">
      <img className='image-one'  src={product.image} alt={product.name} />
      <h3 className='product-name' >{productNameCapitalized}</h3>
      <p className='pricing-tag' >Sign in or Create an account to see pricing</p>
    </div>
  );
};

export default ProductCard;
