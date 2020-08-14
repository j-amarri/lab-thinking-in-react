import React from 'react';
import ProductRow from './../ProductRow';
import './style.css';

const ProductTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((item) => {
          return <ProductRow key={item.name} product={item} />;
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
