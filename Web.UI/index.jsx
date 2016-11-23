import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from "react-router";
import FilterableProductTable from './components/product.jsx';

function Home(props) {
    console.log("Home:");
    console.log(this);
    return (
        <div>
          <h2>Home</h2>
          <p>
              Home stuff
          </p>
        </div>
      );
};

function Products(props) {
    return (
        <div>
          <FilterableProductTable/>
        </div>
      );
};

function Results(props) {
    console.log("Result:");
    console.log(this);
    return (
        <div>
          <h2>Result</h2>
          <p>
              Result stuff.
          </p>
        </div>
      );
};

const App = React.createClass({

  render: function() {
    console.log("App:");
    console.log(this);
    return (
        <div>
            <h1>Lighthouse</h1>
            <ul className="header">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/Products" activeClassName="active">Products</Link></li>
                <li><Link to="/Results" activeClassName="active">Results</Link></li>
            </ul>
            <div className="content">
                {this.props.children}
            </div>
        </div>
    )
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="products" component={Products} />
        <Route path="results" component={Results} />
    </Route>
  </Router>,
  document.getElementById('container')
);