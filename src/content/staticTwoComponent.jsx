import React, {Component} from "react";
import {StaticThree} from "./staticThreeComponent";
import {StaticFour} from "./staticFourComponent";

export class StaticTwo extends Component {

  render() {
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#d8d9da'}}>
        <h3>Komponenta 2</h3>
        <p>Vsebuje samo tole besedilo in 2 podkomponenti.</p>
        <div className="row">
          <div className="col-12 col-md-6 pb-3">
            <StaticThree></StaticThree>
          </div>
          <div className="col-12 col-md-6 pb-3">
            <StaticFour></StaticFour>
          </div>
        </div>
      </div>

    );
  }
}
