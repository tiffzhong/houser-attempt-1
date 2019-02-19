import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Switch, Route } from "react-router-dom";
import Wizard1 from "../Wizard1/Wizard1";
import Wizard2 from "../Wizard2/Wizard2";
import Wizard3 from "../Wizard3/Wizard3";
import { connect } from "react-redux";
import "./wizard.css";

class Wizard extends Component {
  render() {
    return (
      <div className="form-title">
        <div className="form-header">
          <h1>Add New Listing</h1>

          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
        <Switch>
          <Route component={Wizard1} path="/wizard/1" />
          <Route component={Wizard2} path="/wizard/2" />
          <Route component={Wizard3} path="/wizard/3" />
        </Switch>
      </div>
    );
  }
}

export default connect(null)(Wizard);
