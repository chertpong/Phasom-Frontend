import React, { PropTypes } from 'react';

const ProductCard = ({ Id, Name, Description, Thumbnail, Tags, Amount, Pictures, onClick }) => (
  <div className="productCard__container">
    <h1 className="productCard__title-header">{`${Id}: ${Name}`}</h1>
    <button className="btn productCard__view-detail-button" onClick={onClick}>View detail</button>
  </div>
);

ProductCard.propTypes = {
  Id: PropTypes.number.isRequired,
  Name: PropTypes.string,
  Description: PropTypes.string,
  Thumbnail: PropTypes.string,
  Tags: PropTypes.array,
  Amount: PropTypes.number,
  Pictures: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;