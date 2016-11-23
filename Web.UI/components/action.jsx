import React from "react";
import { withRouter } from 'react-router';

class SelectAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'select'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.target.value === 'create') {
            fetch('http://localhost:9021/api/scan-configurations/' + this.props.productId + '/scans', {
                method: 'post',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    description: "test 12",
                    name: "test from sample app"
                })
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                alert('A scan with id ${json.id} is created'); 
            });
        }
        else if (event.target.value === 'result') {
            const path = '/results';
            this.props.router.push(path);
        }
    }

    render() {
        return (
          <form>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="select">Select</option>
              <option value="buy">Buy</option>
              <option value="result">View result</option>
            </select>
          </form>
        );
    }
}

// Export the decorated class
var DecoratedAction = withRouter(SelectAction);

// PropTypes
SelectAction.propTypes = {
    router: React.PropTypes.shape({
        push: React.PropTypes.func.isRequired
    }).isRequired
};

export default DecoratedAction