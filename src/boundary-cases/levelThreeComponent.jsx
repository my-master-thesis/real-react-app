import React, {Component} from "react";
import {Test} from "./testComponent";

export class LevelThree extends Component {

  render() {
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#d8d9da'}}>
        <h3>Nivo 3</h3>
        <Test></Test>
      </div>
    );
  }
}
