import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateImageURL } from "../../ducks/reducer";

class Wizard2 extends Component {
  constructor() {
    super();

    this.state = {
      image_url: ""
    };
  }

  render() {
    const { updateImageURL } = this.props;
    const { image_url } = this.props;
    return (
      <div className="form-info">
        <label>Image URL</label>
        <input
          name="image_url"
          type="text"
          value={image_url}
          onChange={event => updateImageURL(event.target.value)}
        />
        <div>
          <Link to="/wizard/1">
            <button className="previous">Previous Step</button>
          </Link>

          <Link to="/wizard/3">
            <button className="nextstep">Next Step</button>
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
  { updateImageURL }
)(Wizard2);
