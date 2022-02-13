import React, { Component } from "react";
import Rent from "./Component/rent";
import Avail from './Component/available';

class App extends Component {
  render() {
    return (
      <div className="rentInform">
        <h1>Awesome Bike Rental</h1>
        <h2>Create new Rent</h2>
        <div className="rentInput">
          <span className="rentInput__type">Bike name
            <input className="rentInput__name"></input>
          </span>
          <span className="rentInput__type">Bike type
          <select className="rentInput__bike">
            <option>Custom</option>
            <option>Road</option>
            <option>Mountain</option>
          </select>
          </span>
          <span className="rentInput__type">Rent Price
            <input className="rentInput__price"></input>
            </span>
          
          <button className="rentInput__btn" type="submit">Submit rent</button>
        </div>
        <Rent />
        <Avail />
      </div>
    );
  }
}

export default App;
