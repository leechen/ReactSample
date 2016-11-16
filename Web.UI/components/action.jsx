import React from "react";

class SelectAction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'select'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        alert('Your selection is: ' + event.target.value);

    }

    render() {
        return (
          <form>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="select">Select</option>
              <option value="start a scan">Start scan</option>
              <option value="view scans">View scans</option>
            </select>
          </form>
        );
    }
}

export default SelectAction