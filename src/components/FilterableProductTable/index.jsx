import React from 'react';
import SearchBar from './../SearchBar';
import ProductTable from './../ProductTable';

const FilterableProductTable = (props) => {
  return (
    <div>
      <SearchBar
        handleSearch={props.handleSearch}
        showStockedProduct={props.showStockedProduct}
      />
      <ProductTable products={props.products} />
    </div>
  );
};

export default FilterableProductTable;
