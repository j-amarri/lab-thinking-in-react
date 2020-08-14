import React from 'react';
import './style.css';

const ProductRow = (props) => {
  return (
    <tr>
      <td style={{ color: props.product.stocked ? 'red' : 'black' }}>
        {props.product.name}
      </td>
      <td>{props.product.price}</td>
    </tr>
  );
};

export default ProductRow;
