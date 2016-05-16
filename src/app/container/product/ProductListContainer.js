import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ProductList from './../../component/product/ProductList';
import { getAllProduct, getProductById } from './../../action';

class ProductListContainer extends Component {

  componentDidMount() {
    this.props.dispatch(getAllProduct());
  }

  componentWillReceiveProps() {

  }

  render() {
    return (
      <div className="productListContainer">
        <ProductList products={this.props.products} onProductClick={this.props.onProductClick} />
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
  dispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onProductClick: (id) => dispatch(getProductById(id)),
  dispatch,
});
const mapStateToProps = (state) => ({
  products: state.products.products || [],
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
