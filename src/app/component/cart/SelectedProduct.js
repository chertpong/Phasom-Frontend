import React, { PropTypes } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import './selected-product.scss';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { white, red500, red900 } from 'material-ui/styles/colors';

const SelectedProduct = ({ product, Amount, onProductClick, onSelectedProductAmountChange, deleteSelectedProduct }) => (
  <TableRow className="selectedProduct__row">
    <TableRowColumn className="selectedProduct__row-column">{product.Id}</TableRowColumn>
    <TableRowColumn className="selectedProduct__row-column">{product.Name}</TableRowColumn>
    <TableRowColumn className="selectedProduct__row-column">
      <img
        className="selectedProduct__thumbnail"
        src={product.Thumbnail}
        alt={`${product.Name}-thumbnail`}
      />
    </TableRowColumn>
    <TableRowColumn className="selectedProduct__row-column">
      {product.Tags == null || product.Tags === undefined ? '-' : product.Tags.map(t => <p>t.Description</p>)}
    </TableRowColumn>
    <TableRowColumn className="selectedProduct__row-column">
      <input
        id={`${product.Id}-amount`}
        type="number"
        name="productAmount"
        className="selectedProduct__amount-input"
        value={Amount}
        onChange={(e) => onSelectedProductAmountChange(product.Id, e.target.value)}
      />
    </TableRowColumn>
    <TableRowColumn className="selectedProduct__row-column">{product.Price}</TableRowColumn>
    <TableRowColumn className="selectedProduct__row-column">{product.Price * Amount}</TableRowColumn>
    <TableRowColumn className="selectedProduct__row-column">
      <RaisedButton
        onClick={() => deleteSelectedProduct(product.Id)}
        backgroundColor={red500}
        icon={
          <FontIcon
            className="material-icons selectedProduct__delete-icon"
          >
            delete
          </FontIcon>
        }
      />
    </TableRowColumn>
  </TableRow>
);


SelectedProduct.propTypes = {
  product: PropTypes.shape({
    Id: PropTypes.number.isRequired,
    Name: PropTypes.string,
    Thumbnail: PropTypes.string,
    Tags: PropTypes.array,
    Amount: PropTypes.number,
    TotalPrice: PropTypes.number,
  }).isRequired,
  Amount: PropTypes.number,
  onProductClick: PropTypes.func.isRequired,
  onSelectedProductAmountChange: PropTypes.func.isRequired,
  deleteSelectedProduct: PropTypes.func.isRequired,
};

export default SelectedProduct;
