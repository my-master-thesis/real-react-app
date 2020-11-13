import React, {Component} from "react";
import {StaticSix} from "./staticSixComponent";
import {StaticEight} from "./staticEightComponent";

export class StaticFive extends Component {

  render() {
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#d8d9da'}}>
        <h3>Komponenta 5</h3>
        <p>Vsebuje samo tole besedilo in 3 podkomponente.</p>
        <div className="row">
          <div className="col-12 col-md-4 pb-3">
            <StaticSix></StaticSix>
          </div>
          <div className="col-12 col-md-4 pb-3">
            <StaticSix></StaticSix>
          </div>
          <div className="col-12 col-md-4 pb-3">
            <StaticEight></StaticEight>
          </div>
        </div>
      </div>

    );
  }
}
