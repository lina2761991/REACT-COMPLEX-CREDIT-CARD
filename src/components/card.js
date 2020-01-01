import React from "react";
import card from "../images/card.png";
import mastercard from "../images/mastercard.png";
import Inputs from "./inputs.js";
import Moment from 'react-moment';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberform: "",
      nameform: "",
      dateform: "01-01-2020"
    };
  }

  handleChange = e => {
    let x = e.target.name;

    this.setState({
      [x]: e.target.value
    });
  };

  checkNumber = e => {
    if (e.target.value.length !== 16) {
      alert("The card Number has to be 16 digits dude !");
    }
  };

  checkName = e => {
    if (e.target.value.length > 20) {
      alert("The name has a maximum length of 20 characters !");
    }
  };

  _handleKeyDown = e => {
    if (e.key === "Enter") {
      if (e.target.name === "numberform") {
        this.checkNumber(e);
      }

      else if(e.target.name === "nameform"){
        this.checkName(e);
     
      }
    }
  };

  render() {
    return (
      <div className="All">
        <div id="card">
          <h2>Company Name</h2>
          <img src={card} width="50px" />

          <h4>{this.state.numberform}</h4>

          <div id="bottom">
            <h1>{this.state.nameform.toUpperCase()}</h1>

            <div id="bottomRight">
              <h4 id="datee">
              <Moment format="MM/YY">
              {this.state.dateform}
            </Moment>
                  
                </h4>
              <img src={mastercard} width="100px" />
            </div>
          </div>
        </div>

        <Inputs
          handleChange={this.handleChange}
          onKeyDown={this._handleKeyDown}
        />
      </div>
    );
  }
}

export default Card;
