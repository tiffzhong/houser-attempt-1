import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard1 } from "../../ducks/reducer";

class Wizard1 extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      stateAbbr: "",
      zip: ""
    };
  }
  changeName = val => {
    this.setState({
      name: val
    });
  };
  changeAddress = val => {
    this.setState({
      address: val
    });
  };
  changeCity = val => {
    this.setState({
      city: val
    });
  };
  changeStateAbbr = val => {
    this.setState({
      stateAbbr: val
    });
  };
  changeZip = val => {
    this.setState({
      zip: val
    });
  };

  render() {
    const { updateWizard1 } = this.props;
    const { name, address, city, stateAbbr, zip } = this.state;
    console.log("this.props", this.props);
    return (
      <div className="form">
        <label>Property Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={event => this.changeName(event.target.value)}
        />
        <br />
        <label>Address</label>
        <input
          name="address"
          type="text"
          value={address}
          onChange={event => this.changeAddress(event.target.value)}
        />
        <br />
        <label>City</label>
        <input
          name="city"
          type="text"
          value={city}
          onChange={event => this.changeCity(event.target.value)}
        />
        <label>State</label>
        <input
          name="stateAbbr"
          type="text"
          value={stateAbbr}
          onChange={event => this.changeStateAbbr(event.target.value)}
        />
        <br />
        <label>Zip</label>
        <input
          name="zip"
          type="text"
          value={zip}
          onChange={event => this.changeZip(event.target.value)}
        />

        <div className="link">
          <Link to="/wizard/2">
            <button
              className="nextstep"
              onClick={() => updateWizard1(name, address, city, stateAbbr, zip)}
            >
              Next Step
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, address, city, stateAbbr, zip } = state;
  return {
    name,
    address,
    city,
    stateAbbr,
    zip
  };
}

export default connect(
  mapStateToProps,
  { updateWizard1 }
)(Wizard1);
