import React from "react";

// const bikeName = [];
// const bikeType = [];
// const bikePrice = [];

const Avail = (props) => {
  console.log(props.message);
  // render() {
    return (
      <div className="rentBike">
        <h2>Available bicycles</h2>
        <div className="rentBox">
          <div className="rentSpan">
            <span className="rentSpan__type"> {props.bikeName} </span> /
            <span className="rentSpan__type"> {props.bikeType} </span> /
            <span className="rentSpan__type"> {props.bikePrice}$ </span>
          </div>
          <div className="avail-btn">
            <button className="avail-btn__rent" type="submit">Rent</button>
            <button className="avail-btn__del" type="submit">Delete</button>
          </div>
        </div>
      </div>
    );
  // }
}

export default Avail;
