import React from "react";

class SelectAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'select'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        alert('Your want ' + event.target.value + ' on product ' + this.props.productId);

    }

    render() {
        return (
          <form>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="select">Select</option>
              <option value="buy">Buy</option>
              <option value="view reviews">View reviews</option>
            </select>
          </form>
        );
    }
}

export default SelectAction