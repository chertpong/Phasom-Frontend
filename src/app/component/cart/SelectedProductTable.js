import React, { PropTypes } from 'react';
import SelectedProduct from './SelectedProduct';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';

const SelectedProductTable = ({
  selectedProducts,
  onProductClick,
  onSelectedProductAmountChange,
  deleteSelectedProduct,
  showCheckBoxes = false,
}) => (
  <div className="row">
    <Table>
      <TableHeader displaySelectAll={showCheckBoxes} adjustForCheckbox={showCheckBoxes}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Thumbnail</TableHeaderColumn>
          <TableHeaderColumn>Tags</TableHeaderColumn>
          <TableHeaderColumn>Amount</TableHeaderColumn>
          <TableHeaderColumn>Price</TableHeaderColumn>
          <TableHeaderColumn>Total Price</TableHeaderColumn>
          <TableHeaderColumn>Remove</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={showCheckBoxes}>
        {selectedProducts.map(selectedProduct =>
          <SelectedProduct
            key={selectedProduct.product.Id}
            onProductClick={onProductClick}
            onSelectedProductAmountChange={onSelectedProductAmountChange}
            deleteSelectedProduct={deleteSelectedProduct}
            {...selectedProduct}
          />
        )}
      </TableBody>
    </Table>
  </div>
);


SelectedProductTable.propTypes = {
  selectedProducts: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
      Id: PropTypes.number.isRequired,
      Name: PropTypes.string,
      Thumbnail: PropTypes.string,
      Tags: PropTypes.array,
      Amount: PropTypes.number,
      TotalPrice: PropTypes.number,
    }).isRequired,
    Amount: PropTypes.number,
  }).isRequired).isRequired,
  onProductClick: PropTypes.func.isRequired,
  onSelectedProductAmountChange: PropTypes.func.isRequired,
  showCheckBoxes: PropTypes.bool,
  deleteSelectedProduct: PropTypes.func.isRequired,
};

export default SelectedProductTable;
