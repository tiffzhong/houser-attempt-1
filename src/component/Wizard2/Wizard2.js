import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateWizard2 } from "../../ducks/reducer";

class Wizard2 extends Component {
  constructor() {
    super();

    this.state = {
      image_url: ""
    };
  }

  changeImageURL = val => {
    this.setState({
      image_url: val
    });
  };

  render() {
    const { updateWizard2 } = this.props;
    const { image_url } = this.state;
    return (
      <div className="form-info">
        <label>Image URL</label>
        <input
          name="image_url"
          type="text"
          value={image_url}
          onChange={event => this.changeImageURL(event.target.value)}
        />
        <div>
          <Link to="/wizard/1">
            <button className="previous">Previous Step</button>
          </Link>

          <Link to="/wizard/3">
            <button
              className="nextstep"
              onClick={() => updateWizard2(image_url)}
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
  const { image_url } = state;
  return {
    image_url
  };
}

export default connect(
  mapStateToProps,
  { updateWizard2 }
)(Wizard2);
