import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SelecteProductTable from '../../component/cart/SelectedProductTable';
import {
  getProductById,
  onSelectedProductAmountChange,
  selectPaymentMethod,
  deleteSelectedProduct,
} from './../../action';

import './cart-list-container.scss';

class CartListContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleOnProductClick(id) {
    this.props.onProductClick(id);
    this.context.router.push(`/products/${id}`);
  }

  handleOnSelectedProductAmountChange(id, amount) {
    this.props.onSelectedProductAmountChange(id, amount);
  }

  handleDeleteSelectedProduct(id) {
    this.props.deleteSelectedProduct(id);
  }

  render() {
    return (
      <div className="productListContainer__container">
        <SelecteProductTable
          selectedProducts={this.props.selectedProducts}
          onProductClick={(id) => this.handleOnProductClick(id)}
          addToShoppingCart={(id) => this.handleAddToShoppingCart(id)}
          onSelectedProductAmountChange={(id, amount) => this.handleOnSelectedProductAmountChange(id, amount)}
          deleteSelectedProduct={(id) => this.handleDeleteSelectedProduct(id)}
        />
      </div>
    );
  }
}
CartListContainer.propTypes = {
  selectedProducts: PropTypes.arrayOf(PropTypes.shape({
    selectedProduct: PropTypes.shape({
      product: PropTypes.shape({
        Id: PropTypes.number.isRequired,
        Name: PropTypes.string,
        Thumbnail: PropTypes.string,
        Tags: PropTypes.array,
        Amount: PropTypes.number,
        Price: PropTypes.number,
        TotalPrice: PropTypes.number,
      }),
      Amount: PropTypes.number,
    }),

  }).isRequired).isRequired,
  onProductClick: PropTypes.func.isRequired,
  onSelectedProductAmountChange: PropTypes.func.isRequired,
  selectPaymentMethod: PropTypes.func.isRequired,
  deleteSelectedProduct: PropTypes.func.isRequired,
};

CartListContainer.contextTypes = {
  router: React.PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  onProductClick: (id) => dispatch(getProductById(id)),
  selectPaymentMethod: (id) => dispatch(selectPaymentMethod(id)),
  onSelectedProductAmountChange: (id, amount) => dispatch(onSelectedProductAmountChange(id, amount)),
  deleteSelectedProduct: (id) => dispatch(deleteSelectedProduct(id)),
  dispatch,
});

const mapStateToProps = (state) => ({
  selectedProducts: state.cart.selectedProducts || [],
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartListContainer);
