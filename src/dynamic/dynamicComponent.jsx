import React, {Component} from "react";
import logo from '../img/aplikacija_drevesna_struktura.jpg';
import {DynamicTwo} from "./dynamicTwoComponent";
import {DynamicFive} from "./dynamicFiveComponent";

export class Dynamic extends Component {

  state = {
    showTwo: true,
    showFive: true
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
    let two, five;
    if (this.state.showTwo) {
      two = <DynamicTwo></DynamicTwo>;
    }
    if (this.state.showFive) {
      five = <DynamicFive></DynamicFive>;
    }
    return (
      <div className="container-fluid">
        <h1 className="mt-4">O strani</h1>
        <p>Ta stran vsebuje 8 dinamičnih komponent, ki imajo podatke vključene s pomočjo doseganja spremenljivk in z
          drevesno strukturo prikazano na spodnji sliki. Ta vsebina se nahaja na komponenti 1. Stran je namenjena
          primerjavi s stranjo Statična vsebina.</p>
        <p>Ta komponenta vsebuje tudi potrditvena polja s katerimi se lahko odstrani in nato spet vrne določeno
          komponento.</p>
        <img src={logo} alt="Drevesna struktura"/>
        <div className="row">
          <div className="col-md-12 col-lg-5 pb-3">
            <div className="form-check">
              <input
                id="showTwo"
                name="showTwo"
                type="checkbox"
                className="form-check-input"
                checked={this.state.showTwo}
                onChange={this.handleInputChange}/>
              <label className=" form-check-label" htmlFor="showTwo">
                Prikaži komponento 2
              </label>
            </div>
            {two}
          </div>
          <div className=" col-md-12 col-lg-7">
            <div className=" form-check">
              <input
                id="showFive"
                name="showFive"
                type="checkbox"
                className="form-check-input"
                checked={this.state.showFive}
                onChange={this.handleInputChange}/>
              <label className=" form-check-label" htmlFor="showFive">
                Prikaži komponento 5
              </label>
            </div>
            {five}
          </div>
        </div>
      </div>
    );
  }
}
