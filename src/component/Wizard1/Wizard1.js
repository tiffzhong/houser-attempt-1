import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  updateName,
  updateAddress,
  updateCity,
  updateStateAbbr,
  updateZip
} from "../../ducks/reducer";
import "./wizard1.css";

class Wizard1 extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      stateabbr: "",
      zip: ""
    };
  }

  render() {
    const {
      updateName,
      updateAddress,
      updateCity,
      updateStateAbbr,
      updateZip
    } = this.props;
    const { name, address, city, stateabbr, zip } = this.props;
    console.log("this.props", this.props);
    return (
      <div className="form">
        <label>Property Name </label>
        <div className="name-field">
          <input
            name="name"
            type="text"
            value={name}
            onChange={event => updateName(event.target.value)}
          />
        </div>
        <br />

        <div className="address-field">
          <label>Address </label> <br />
          <input
            name="address"
            type="text"
            value={address}
            onChange={event => updateAddress(event.target.value)}
          />
        </div>

        <br />

        <div className="helladivs">
          <div className="city-field">
            <label>City </label> <br />
            <input
              name="city"
              type="text"
              value={city}
              onChange={event => updateCity(event.target.value)}
            />
          </div>

          <div className="state-field">
            <label>State </label>
            <br />
            <input
              name="stateabbr"
              type="text"
              value={stateabbr}
              onChange={event => updateStateAbbr(event.target.value)}
            />
          </div>

          <div className="zip-field">
            <label>Zip </label>
            <br />
            <input
              name="zip"
              type="text"
              value={zip}
              onChange={event => updateZip(event.target.value)}
            />
          </div>
        </div>

        <div className="link">
          <Link to="/wizard/2">
            <button className="nextstep">Next Step</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { name, address, city, stateabbr, zip } = state;
  return {
    name,
    address,
    city,
    stateabbr,
    zip
  };
}

export default connect(
  mapStateToProps,
  { updateName, updateAddress, updateCity, updateStateAbbr, updateZip }
)(Wizard1);
