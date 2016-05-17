import React, { PropTypes } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onProductClick, addToShoppingCart }) => (
  <div className="row">
    {products.map(product =>
      <ProductCard
        key={product.Id}
        onProductClick={onProductClick}
        addToShoppingCart={addToShoppingCart}
        {...product}
      />
    )}
  </div>
);


ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    Id: PropTypes.number.isRequired,
    Name: PropTypes.string,
    Description: PropTypes.string,
    Thumbnail: PropTypes.string,
    Tags: PropTypes.array,
    Amount: PropTypes.number,
    Pictures: PropTypes.array,
  }).isRequired).isRequired,
  onProductClick: PropTypes.func.isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
};

export default ProductList;
