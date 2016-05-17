import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const getAltImageName = (name) => `product-card-img-${name}`;

const ProductCard = ({ Id, Name, Description, Price, Thumbnail, Tags, Amount, Pictures, onProductClick }) => (
  <div className="productCard__container">
    <h1 className="productCard__title-header">{`${Id}: ${Name}`}</h1>
    <div className="productCard__thumbnail-wrapper">
      <img
        className="productCard__thumbnail-img"
        src={Thumbnail}
        onClick={() => onProductClick(Id)}
        alt={getAltImageName(Name)}
      />
    </div>
    <button className="btn productCard__view-detail-button">
      <Link to={`/products/${Id}`}>View Detail</Link>
    </button>
  </div>
);

ProductCard.propTypes = {
  Id: PropTypes.number.isRequired,
  Name: PropTypes.string,
  Description: PropTypes.string,
  Price: PropTypes.number,
  Thumbnail: PropTypes.string,
  Tags: PropTypes.array,
  Amount: PropTypes.number,
  Pictures: PropTypes.array,
  onProductClick: PropTypes.func.isRequired,
};

export default ProductCard;
