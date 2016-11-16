import React from "react";
import SelectAction from "./action.jsx";

class ProductRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td><SelectAction/></td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    var rows = [];
    this.props.products.forEach((product) => {
      if (product.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ProductRow product={product} key={product.name} />);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  }

  render() {
    return (
      <form>
        <input 
            type="text" 
            placeholder="Search..." 
            value={this.props.filterText}
            ref="filterTextInput"
            onChange={this.handleChange} />
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchBar 
            filterText={this.state.filterText} 
            onUserInput={this.handleUserInput} 
        />
        <ProductTable 
            filterText={this.state.filterText} 
            products={this.props.products} 
        />
      </div>
    );
  }
}

export default FilterableProductTable