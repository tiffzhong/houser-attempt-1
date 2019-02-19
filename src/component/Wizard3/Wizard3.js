import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateMortgage, updateRent } from "../../ducks/reducer";
import "./wizard3.css";

class Wizard3 extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: "",
      rent: ""
    };
  }

  addItem() {
    const {
      name,
      address,
      city,
      stateabbr,
      zip,
      image_url,
      mortgage,
      rent
    } = this.props;
    console.log("props", this.props);

    axios
      .post("/api/house", {
        name,
        address,
        city,
        stateabbr,
        zip,
        image_url,
        mortgage,
        rent
      })
      .then(res => {})
      .catch(error => {
        console.log("Axios Error with adding", error);
      });
  }

  render() {
    const {
      name,
      address,
      city,
      stateabbr,
      zip,
      image_url,
      mortgage,
      rent
    } = this.props;
    const { updateMortgage, updateRent } = this.props;

    return (
      <div className="form-info-2">
        <h5>Recommended Rent: $0</h5>
        <label>
          <b>Monthly Mortgage Amount</b>
        </label>
        <input
          name="mortgage"
          type="text"
          input={mortgage}
          onChange={event => updateMortgage(event.target.value)}
        />{" "}
        <br />
        <label>
          <b>Desired Monthly Rent</b>
        </label>
        <input
          name="rent"
          type="text"
          input={rent}
          onChange={event => updateRent(event.target.value)}
        />
        <br />
        <Link to="/wizard/2">
          <button className="previous-button">Previous Step</button>
        </Link>
        <Link to="/">
          <button
            className="complete"
            onClick={() => {
              this.addItem(
                name,
                address,
                city,
                stateabbr,
                zip,
                image_url,
                mortgage,
                rent
              );
            }}
          >
            Complete
          </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    name,
    address,
    city,
    stateabbr,
    zip,
    image_url,
    mortgage,
    rent
  } = state;
  return {
    name,
    address,
    city,
    stateabbr,
    zip,
    image_url,
    mortgage,
    rent
  };
}
export default connect(
  mapStateToProps,
  { updateMortgage, updateRent }
)(Wizard3);
