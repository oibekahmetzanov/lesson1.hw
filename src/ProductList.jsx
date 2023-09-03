import React, { useState } from 'react';

const ProductList = () => {
  const [sortOption, setSortOption] = useState('');

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortProducts = (products) => {
    if (sortOption === 'asc') {
      return products.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'desc') {
      return products.sort((a, b) => b.price - a.price);
    }
    return products;
  };

  const products = [
    { id: 1, img: '', price: 30000,},
    { id: 2, img: 'Product 2', price: 27500 },
    { id: 3, img: 'Product 3', price: 15500 },
    // ...
  ];

  const sortedProducts = sortProducts(products);

  return (
    <div className='filter'>
      <div className="filter-select-price">
        <select className="filter-assort-price" value={sortOption} onChange={handleSortChange}>
          <option value="">Default Price</option>
          <option value="asc">Lowest Price</option>
          <option value="desc">Highest Price</option>
        </select>
      </div>

      <div className="product-container">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product">
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
         
export default ProductList;