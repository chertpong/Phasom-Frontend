import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductDetail from './../../component/product/ProductDetail';
import { getProductById, addToShoppingCart } from './../../action';

class ProductDetailContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.dispatch(getProductById(this.props.params.id));
  }

  handleAddToCart(id) {
    this.props.addToCart(id);
    // TODO: add product to cart
    // this.context.router.push(`products/${id}`);
  }

  render() {
    return (
      <div className="productListContainer">
        <ProductDetail
          key={this.props.product.Id}
          {...this.props.product}
          addToCart={(id) => this.handleAddToCart(id)}
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
  addToCart: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};

ProductDetailContainer.contextTypes = {
  router: React.PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToShoppingCart(id)),
  dispatch,
});

const mapStateToProps = (state) => ({
  product: state.products.product || { Id: undefined },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetailContainer);
