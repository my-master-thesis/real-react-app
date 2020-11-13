import React, {Component} from "react";
import {LevelTwo} from "./levelTwoComponent";

export class LevelOne extends Component {

  render() {
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#f8f9fa'}}>
        <h3>Nivo 1</h3>
        <LevelTwo></LevelTwo>
      </div>

    );
  }
}
