import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import * as colors from 'material-ui/styles/colors';

import './product-card.scss';

const getAltImageName = (name) => `product-card-img-${name}`;

const ProductCard = ({
  Id, Name, Description, Price, Thumbnail, Tags, Amount, Pictures,
  onProductClick, addToShoppingCart }) => (
  <Card className="productCard__container col-xs-12 col-sm-3">
    <CardMedia className="productCard__card-media-thumbnail">
      <img
        className="productCard__card-media-thumbnail-img"
        src={Thumbnail}
        onClick={() => onProductClick(Id)}
        alt={getAltImageName(Name)}
      />
    </CardMedia>
    <CardTitle className="productCard__title" onClick={() => onProductClick(Id)}>
      <h3>{Name}</h3>
    </CardTitle>
    <div className="row productCard__second-block">
      <div className="productCard__availability col-xs-6 start-xs">
        {Amount > 0 ?
          <span style={{ color: 'green' }}>Available</span> : <span style={{ color: 'red' }}>Out of stock</span>
        }
      </div>
      <div className="productCard__price col-xs-6 end-xs">
        <span style={{ fontWeight: 'bold' }}>Price: </span> {Price}
      </div>
    </div>
    <div className="row">
      <div className="col-xs-9">
        Tags
      </div>
      <CardActions className="product-item__card-actions col-xs-3 row end-xs">
        <div className="productCard__add-to-cart-button">
          <FontIcon
            className="productCard__add-to-cart-button-font-icon material-icons"
            color={colors.orange400}
            hoverColor={colors.amber900}
            onClick={() => addToShoppingCart(Id, 1)}
          >
            add_shopping_cart
          </FontIcon>
        </div>
        <Link to={`/products/${Id}`}>
          <FlatButton label="View detail" class="btn productCard__view-detail-button" />
        </Link>
      </CardActions>
    </div>
  </Card>
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
  addToShoppingCart: PropTypes.func.isRequired,
};

export default ProductCard;
