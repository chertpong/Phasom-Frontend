import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductDetail from './../../component/product/ProductDetail';
import { getProductById, addToShoppingCart } from './../../action';

import './produc-detail-container.scss';

class ProductDetailContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.dispatch(getProductById(this.props.params.id));
  }

  handleAddToShoppingCart(id, amount) {
    this.props.addToShoppingCart(id, amount);
    // TODO: add product to cart
    // this.context.router.push(`products/${id}`);
  }

  render() {
    return (
      <div className="productDetailContainer__container container">
        <ProductDetail
          key={this.props.product.Id}
          {...this.props.product}
          addToShoppingCart={(id, amount) => this.handleAddToShoppingCart(id, amount)}
        />
      </div>
    );
  }
}
ProductDetailContainer.propTypes = {
  product: PropTypes.shape({
    Id: PropTypes.number.isRequired,
    Name: PropTypes.string,
    Description: PropTypes.string,
    Thumbnail: PropTypes.string,
    Tags: PropTypes.array,
    Amount: PropTypes.number,
    Pictures: PropTypes.array,
  }).isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

ProductDetailContainer.contextTypes = {
  router: React.PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  addToShoppingCart: (id, amount) => dispatch(addToShoppingCart(id)),
  dispatch,
});

const mapStateToProps = (state) => ({
  product: state.products.product || { Id: undefined },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailContainer);
