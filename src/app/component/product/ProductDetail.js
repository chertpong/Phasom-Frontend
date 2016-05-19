import React, { PropTypes } from 'react';
import FontIcon from 'material-ui/FontIcon';
import * as colors from 'material-ui/styles/colors';

import './product-detail.scss';

const getAltImageName = (name) => `product-detail-img-${name}`;

const ProductDetail = ({ Id, Name, Description, Price, Thumbnail, Tags, Amount, Pictures, addToShoppingCart }) => (
  <div className="productDetail__wrapper row">
    <div className="productDetail__image-preview col-xs-12 col-sm-4">
      <img className="productDetail__image-preview-img" src={Thumbnail} alt={getAltImageName(Name)} />
    </div>
    <div className="productDetail__body col-xs-12 col-sm-7">
      <h1 className="productDetail__title-header">{`${Name}`}</h1>
      <div className="productDetail__description">
        <span style={{ fontWeight: 'bold' }}>Description:</span>{Description}
      </div>
      <div className="productDetail__price">
        <span style={{ fontWeight: 'bold' }}>Price:</span> {Price}
      </div>
      <div className="productDetail__tags">
        <span style={{ fontWeight: 'bold' }}>Tags:</span>
        {Tags ? Tags.map(t => (<span className="productDetail__tag">t</span>)) : (<span>None</span>)}
      </div>
      <div className="productDetail__add-to-cart-button" onClick={() => addToShoppingCart(Id,1)}>
        <FontIcon
          className="productDetail__add-to-cart-button-font-icon material-icons"
          color={colors.orange400}
          hoverColor={colors.amber900}
        >
          add_shopping_cart
        </FontIcon>
        Add to shopping cart
      </div>
    </div>

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
