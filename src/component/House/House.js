import React from "react";

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
    <div className="house-listing-container">
      <img src={image_url} alt={name} />
      <h5>Property Name: {name} </h5>
      <h5>Address: {address}</h5>
      <h5>City: {city}</h5>
      <h5>State: {stateabbr} </h5>
      <h5>Zip: {zip}</h5>
      <h6>Monthly Mortgage: {mortgage}</h6>
      <h6>Desired Rent: {rent}</h6>
      <button className="delete-button" onClick={() => deleteHouse(id)}>
        DELETE
      </button>
    </div>
  );
}

export default House;
