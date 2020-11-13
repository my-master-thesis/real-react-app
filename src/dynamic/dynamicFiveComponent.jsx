import React, {Component} from "react";
import {DynamicSix} from "./dynamicSixComponent";
import {DynamicEight} from "./dynamicEightComponent";

export class DynamicFive extends Component {

  state = {
    showSix: true,
    showSeven: true,
    showEight: true,
    componentTitle: 'Komponenta 5',
    componentText: 'Vsebuje samo tole besedilo (ki je podano s pomočjo interpolacije) in 3 podkomponente.'
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
    let six, seven, eight;
    if (this.state.showSix) {
      six = <DynamicSix></DynamicSix>;
    }
    if (this.state.showSeven) {
      seven = <DynamicSix></DynamicSix>;
    }
    if (this.state.showEight) {
      eight = <DynamicEight></DynamicEight>;
    }
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#d8d9da'}}>
        <h3>{this.state.componentTitle}</h3>
        <p>{this.state.componentText}</p>
        <div className="row">
          <div className="col-12 col-md-4 pb-3">
            <div className="form-check">
              <input
                id="showSix"
                name="showSix"
                type="checkbox"
                className="form-check-input"
                checked={this.state.showSix}
                onChange={this.handleInputChange}/>
              <label className=" form-check-label" htmlFor="showSix">
                Prikaži komponento 6
              </label>
            </div>
            {six}
          </div>
          <div className=" col-12 col-md-4 pb-3">
            <div className=" form-check">
              <input
                id="showSeven"
                name="showSeven"
                type="checkbox"
                className="form-check-input"
                checked={this.state.showSeven}
                onChange={this.handleInputChange}/>
              <label className=" form-check-label" htmlFor="showSeven">
                Prikaži komponento 7
              </label>
            </div>
            {seven}
          </div>
          <div className=" col-12 col-md-4 pb-3">
            <div className=" form-check">
              <input
                id="showEight"
                name="showEight"
                type="checkbox"
                className="form-check-input"
                checked={this.state.showEight}
                onChange={this.handleInputChange}/>
              <label className=" form-check-label" htmlFor="showEight">
                Prikaži komponento 8
              </label>
            </div>
            {eight}
          </div>
        </div>
      </div>
    );
  }
}
