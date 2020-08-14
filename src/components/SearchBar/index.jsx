import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <h3>Search</h3>
      <input type="text" name="search" onChange={props.handleSearch} />
      <input
        id="stocked-input"
        type="checkbox"
        name="stocked"
        onChange={props.showStockedProduct}
      />
      <label htmlFor="stocked-input">Only show products in stock</label>
    </div>
  );
};

export default SearchBar;
