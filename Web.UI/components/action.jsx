import React from "react";
import axios from 'axios';

class SelectAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'select'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
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

    render() {
        return (
          <form>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="select">Select</option>
              <option value="buy">Buy</option>
            </select>
          </form>
        );
    }
}

export default SelectAction