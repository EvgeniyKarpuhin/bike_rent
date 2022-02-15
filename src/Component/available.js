import React, { Component } from "react";

const bikeName = ['Over'];
const bikeType = [];
const bikePrice = [];

class Avail extends Component {
  render() {
    return (
      <div className="rentBike">
        <h2>Available bicycles</h2>
        <div className="rentBox">
          <div className="rentSpan">
            <span className="rentSpan__type">{bikeName}</span> /
            <span className="rentSpan__type">{bikeType}</span> /
            <span className="rentSpan__type">{bikePrice}$</span>
          </div>
          <div className="avail-btn">
            <button className="avail-btn__rent" type="submit">Rent</button>
            <button className="avail-btn__del" type="submit">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Avail;
