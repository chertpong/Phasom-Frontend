import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductList from './../../component/product/ProductList';
import { getAllProduct, getProductById, addToShoppingCart } from './../../action';

import './product-list-container.scss';

class ProductListContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    this.props.dispatch(getAllProduct());
  }

  handleOnProductClick(id) {
    this.props.onProductClick(id);
    this.context.router.push(`/products/${id}`);
  }

  handleAddToShoppingCart(id, amount) {
    this.props.addToShoppingCart(id, amount);
    // TODO: add product to cart
    // this.context.router.push(`products/${id}`);
  }

  render() {
    return (
      <div className="productListContainer__container">
        <ProductList
          products={this.props.products}
          onProductClick={(id) => this.handleOnProductClick(id)}
          addToShoppingCart={(id, amount) => this.handleAddToShoppingCart(id, amount)}
        />
      </div>
    );
  }
}
ProductListContainer.propTypes = {
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
  dispatch: PropTypes.func.isRequired,
};
ProductListContainer.contextTypes = {
  router: React.PropTypes.object,
};
const mapDispatchToProps = (dispatch) => ({
  onProductClick: (id) => dispatch(getProductById(id)),
  addToShoppingCart: (id, amount) => dispatch(addToShoppingCart(id, amount)),
  dispatch,
});
const mapStateToProps = (state) => ({
  products: state.products.products || [],
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
