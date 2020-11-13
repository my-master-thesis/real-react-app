import React, {Component} from "react";
import {LevelThree} from "./levelThreeComponent";

export class LevelTwo extends Component {

  render() {
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#e8e9ea'}}>
        <h3>Nivo 2</h3>
        <LevelThree></LevelThree>
      </div>
    );
  }
}
