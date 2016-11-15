import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, IndexLink, Link, hashHistory } from "react-router";

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

function Configuration(props) {
    console.log("Configuration:");
    console.log(this);
    return (
        <div>
          <h2>Configuration</h2>
          <p>
              Configuration stuff.
          </p>
        </div>
      );
};

function Result(props) {
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
                <li><Link to="/Configuration" activeClassName="active">Configuration</Link></li>
                <li><Link to="/Result" activeClassName="active">Result</Link></li>
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
        <Route path="configuration" component={Configuration} />
        <Route path="result" component={Result} />
    </Route>
  </Router>,
  document.getElementById('container')
);