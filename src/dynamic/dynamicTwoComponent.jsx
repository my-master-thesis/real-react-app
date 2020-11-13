import React, {Component} from "react";
import {DynamicThree} from "./dynamicThreeComponent";
import {DynamicFour} from "./dynamicFourComponent";

export class DynamicTwo extends Component {

  state = {
    showThree: true,
    showFour: true,
    componentTitle: 'Komponenta 2',
    componentText: 'Vsebuje samo tole besedilo (ki je podano s pomočjo interpolacije) in 2 podkomponenti.'
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    let three, four;
    if (this.state.showThree) {
      three = <DynamicThree></DynamicThree>;
    }
    if (this.state.showFour) {
      four = <DynamicFour></DynamicFour>;
    }
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#d8d9da'}}>
        <h3>{this.state.componentTitle}</h3>
        <p>{this.state.componentText}</p>
        <div className="row">
          <div className="col-12 col-md-6 pb-3">
            <div className="form-check">
              <input
                id="showThree"
                name="showThree"
                type="checkbox"
                className="form-check-input"
                checked={this.state.showThree}
                onChange={this.handleInputChange}/>
              <label className=" form-check-label" htmlFor="showThree">
                Prikaži komponento 3
              </label>
            </div>
            {three}
          </div>
          <div className=" col-12 col-md-6 pb-3">
            <div className=" form-check">
              <input
                id="showFour"
                name="showFour"
                type="checkbox"
                className="form-check-input"
                checked={this.state.showFour}
                onChange={this.handleInputChange}/>
              <label className=" form-check-label" htmlFor="showFour">
                Prikaži komponento 4
              </label>
            </div>
            {four}
          </div>
        </div>
      </div>

    );
  }
}
