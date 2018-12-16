import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";
class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      allHomes: []
    };
    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }
  getAll() {
    axios.get("/api/houses").then(res => {
      this.setState({ allHomes: res.data });
    });
  }

  deleteHouse = id => {
    axios.delete(`/api/house/${id}`).then(res => {
      this.getAll();
    });
  };

  render() {
    const { allHomes } = this.state;

    const displayHomes = allHomes.map(house => {
      return (
        <div>
          <House
            {...house}
            key={house.id}
            id={house.id}
            deleteHouse={this.deleteHouse}
          />
        </div>
      );
    });
    return (
      <div>
        Dashboard
        <Link to="/wizard/1">
          <button className="add-new-button"> Add New Property </button>
        </Link>
        <h2> Home Listings</h2>
        {displayHomes}
      </div>
    );
  }
}

export default Dashboard;
