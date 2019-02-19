import React from "react";
import "./house.css";
function House(props) {
  let {
    image_url,
    mortgage,
    rent,
    name,
    address,
    city,
    stateabbr,
    zip,
    id,
    deleteHouse
  } = props;
  console.log("house", props);
  return (
    <div className="house-container">
      <div className="img-section">
        <img src={image_url} alt={name} />
      </div>
      <div className="house-info-section">
        <p>
          <b>Property Name:</b> {name}
        </p>
        <p>
          <b>Address:</b> {address}
        </p>
        <p>
          <b>City:</b> {city}
        </p>
        <p>
          <b>State: </b>
          {stateabbr}
        </p>
        <p>
          <b>Zip:</b> {zip}
        </p>
      </div>
      <div className="money-section">
        <p>
          <b>Monthly Mortgage:</b> {mortgage}
        </p>
        <p>
          <b>Desired Rent:</b> {rent}
        </p>
      </div>
      <button className="delete-button" onClick={() => deleteHouse(id)}>
        X
      </button>
    </div>
  );
}

export default House;
