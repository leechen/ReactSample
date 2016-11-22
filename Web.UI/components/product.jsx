import React from "react";
import DecoratedAction from "./action.jsx";

class ProductRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.product.id}</td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.price}</td>
        <td><DecoratedAction productId={this.props.product.id}/></td>
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
      rows.push(<ProductRow product={product} key={product.id} />);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
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
        filterText: '',
        products: []
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }
    componentDidMount() {
        fetch('http://localhost:9021/api/products', {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response=> response.json())
        .then(json => {
            console.log(json);
            this.setState({products: json})
        });
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
            products={this.state.products} 
        />
      </div>
    );
  }
}

export default FilterableProductTable