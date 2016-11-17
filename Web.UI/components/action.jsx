import React from "react";
import axios from 'axios';

class SelectAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'select'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        try {
            fetch('http://localhost:9021/api/services', {
                method: 'post',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify({
                    description: "test 12"
                })
            });
        } catch (err) {
            console.error(err);
            this.dispatch({ok: false, error: err.data});
        }
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