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
        <label>Property Name</label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={event => updateName(event.target.value)}
        />
        <br />
        <label>Address</label>
        <input
          name="address"
          type="text"
          value={address}
          onChange={event => updateAddress(event.target.value)}
        />
        <br />
        <label>City</label>
        <input
          name="city"
          type="text"
          value={city}
          onChange={event => updateCity(event.target.value)}
        />
        <label>State</label>
        <input
          name="stateabbr"
          type="text"
          value={stateabbr}
          onChange={event => updateStateAbbr(event.target.value)}
        />
        <br />
        <label>Zip</label>
        <input
          name="zip"
          type="text"
          value={zip}
          onChange={event => updateZip(event.target.value)}
        />

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
