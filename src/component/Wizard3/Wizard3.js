import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateWizard3 } from "../../ducks/reducer";

class Wizard3 extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: "",
      rent: ""
    };
    this.changeMortgage = this.changeMortgage.bind(this);
    this.changeRent = this.changeRent.bind(this);
  }

  changeMortgage(val) {
    this.setState({
      mortgage: val
    });
  }

  changeRent(val) {
    this.setState({
      rent: val
    });
  }

  addItem() {
    const { name, address, city, stateAbbr, zip, image_url } = this.props;
    console.log("props", this.props);
    const { mortgage, rent } = this.state;
    axios
      .post("/api/house", {
        name,
        address,
        city,
        stateAbbr,
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
    const { name, address, city, stateAbbr, zip, image_url } = this.props;
    const { updateWizard3 } = this.props;
    const { mortgage, rent } = this.state;
    return (
      <div>
        <h6>Recommended Rent: $0</h6>
        <div className="form-info">
          <label>Monthly Mortgage Amount</label>
          <input
            name="mortgage"
            type="text"
            input={mortgage}
            onChange={event => this.changeMortgage(event.target.value)}
          />
          <label>Desired Monthly Rent</label>
          <input
            name="rent"
            type="text"
            input={rent}
            onChange={event => this.changeRent(event.target.value)}
          />

          <Link to="/wizard/2">
            <button className="previous">Previous Step</button>
          </Link>

          <Link to="/">
            <button
              className="complete"
              onClick={() => {
                this.addItem(name, address, city, stateAbbr, zip, image_url);
                updateWizard3(mortgage, rent);
              }}
            >
              Complete
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    name,
    address,
    city,
    stateAbbr,
    zip,
    image_url,
    mortgage,
    rent
  } = state;
  return {
    name,
    address,
    city,
    stateAbbr,
    zip,
    image_url,
    mortgage,
    rent
  };
}
export default connect(
  mapStateToProps,
  { updateWizard3 }
)(Wizard3);
