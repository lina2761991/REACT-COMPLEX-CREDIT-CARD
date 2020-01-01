import React from "react";

class Inputs extends React.Component {

    constructor (props) {
        super(props);
    }


    
  render() {
    return (
      <div id="inputs">
        <input
          name="numberform"
          type="number"
          placeholder="card holder"
          onChange={this.props.handleChange}
          onKeyDown={this.props.onKeyDown}
        ></input>
        <input
          name="nameform"
          type="text"
          placeholder="name"
          onChange={this.props.handleChange}
          onKeyDown={this.props.onKeyDown}
        ></input>
        <input
          name="dateform"
          type="date"
          
          placeholder="dd/mm/yyyy"
          onChange={this.props.handleChange}
          onKeyDown={this.props.onKeyDown}
        ></input>
      </div>
    );
  }
}

export default Inputs;
