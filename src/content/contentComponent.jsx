import React, {Component} from "react";
import logo from '../img/aplikacija_drevesna_struktura.jpg';
import {StaticTwo} from "./staticTwoComponent";
import {StaticFive} from "./staticFiveComponent";

export class Content extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h1 className="mt-4">O strani</h1>
        <p>Ta stran vsebuje 8 statičnih komponent z drevesno strukturo prikazano na spodnji sliki. Ta vsebina se
          nahaja na komponenti 1. Stran je namenjena testiranju zahtevnosti uporabe več komponent s statično vsebino
          direktno v HTML kodi.</p>
        <img src={logo} alt="Drevesna struktura" />
        <div className="row">
          <div className="col-md-12 col-lg-5 pb-3">
            <StaticTwo></StaticTwo>
          </div>
          <div className="col-md-12 col-lg-7">
            <StaticFive></StaticFive>
          </div>
        </div>
      </div>
    );
  }
}
