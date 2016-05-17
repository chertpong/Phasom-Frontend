import React, { PropTypes } from 'react';

const ProductDetail = ({ Id, Name, Description, Price, Thumbnail, Tags, Amount, Pictures, addToShoppingCart }) => (
  <div className="productDetail__wrapper">
    <h1 className="productDetail__title-header">{`${Id}: ${Name}`}</h1>
    <div className="productDetail__body">
      <h5>Description</h5>
      <div className="productDetail__description">
        {Description}
      </div>
      <div className="productDetail__price">
        {Price}
      </div>
    </div>
    <button className="btn productDetail__add-to-cart-button" onClick={(id) => addToShoppingCart(id)}>
      Add to cart
    </button>
  </div>
);

ProductDetail.propTypes = {
  Id: PropTypes.number.isRequired,
  Name: PropTypes.string,
  Description: PropTypes.string,
  Price: PropTypes.number,
  Thumbnail: PropTypes.string,
  Tags: PropTypes.array,
  Amount: PropTypes.number,
  Pictures: PropTypes.array,
  addToShoppingCart: PropTypes.func.isRequired,
};

export default ProductDetail;
