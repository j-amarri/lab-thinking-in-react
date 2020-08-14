import React, { Component } from 'react';
import './App.css';
import data from './data.json';

import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      stocked: '',
      list: data.data,
    };
  }

  handleSearch = (event) => {
    const searchFor = event.target.value;
    this.setState({
      search: searchFor,
    });
  };

  showStockedProduct = (event) => {
    const stockedFlag = event.target.checked;
    this.setState({
      stocked: stockedFlag,
    });
  };

  render() {
    const searchWord = this.state.search.toLowerCase();
    const listResults = [...this.state.list].filter((product) => {
      if (this.state.stocked && product.stocked) {
        return false;
      }
      return product.name.toLowerCase().includes(searchWord);
    });

    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable
          products={listResults}
          handleSearch={this.handleSearch}
          showStockedProduct={this.showStockedProduct}
        />
      </div>
    );
  }
}

export default App;
