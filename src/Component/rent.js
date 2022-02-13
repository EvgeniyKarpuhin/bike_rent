import React, { Component } from "react";


class Rent extends Component {
  render() {
    return (
      <div className="rentBike">
        <h2>Your rent</h2>
        <div className="rentBox">
          <div className="rentSpan">
            <span className="rentSpan__type">Super bike</span> / <span className="rentSpan__type">type</span> / <span className="rentSpan__type">price</span>
            </div>
          
          <button className="rentBox__btn" type="submit">Cancel rent</button>
        </div>
      </div>
    );
  }
}

export default Rent;
