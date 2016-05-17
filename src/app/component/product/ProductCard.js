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
    <CardTitle className="productCard__title">
      {Name}
    </CardTitle>
    <CardActions className="product-item__card-actions box box-container">
      <Link to={`/products/${Id}`}>
        <FlatButton label="View detail" class="btn productCard__view-detail-button" />
      </Link>
      <FontIcon
        className="productCard__add-to-cart-button material-icons end-xs"
        color={colors.orange500}
        hoverColor={colors.amber900}
        onClick={() => addToShoppingCart(Id)}
      >
        add_shopping_cart
      </FontIcon>

    </CardActions>
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
