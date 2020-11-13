import React, {Component} from "react";
import {Test} from "./testComponent";
import {LevelOne} from "./levelOneComponent";

export class BoundaryCases extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h1 className="mt-4">O strani</h1>
        <p>Ta del vsebuje teste, ki so podrobneje opisani v 4. poglavju magistrskega dela.</p>
        <p>
          Gre za časovno testiranje nastavljanja vrednosti spremenljivk, ki se odražajo na uporabniškem vmesniku.
          Identični testi se nahajajo na nivoju 0 in na nivoju 3.
          Edina razlika je v tem, da so med nivojem 0 in nivojem 3 še tri komponente, ki povečajo drevesno sturkturo
          aplikacije.
        </p>
        <p>Testi predstavljajo sledeče:</p>
        <ul>
          <li>#1A gre za 10.000.000x povečevanje prikazanega števca pri čemer v vsakem koraku kličemo funkcijo za
            zaznavanje sprememb
          </li>
          <li>#1B gre za 10.000.000x povečevanje treh prikazanih števcev pri čemer v vsakem koraku kličemo funkcijo za
            zaznavanje sprememb
          </li>
          <li>#1C gre za 10.000.000x nastavljanje novega objekta v prikazano spremenljivko</li>
          <li>#2 gre za 10.000.000x povečevanje prikazanega števca pri čemer se ta začasno prepiše in povečuje v lokalni
            spremenljivki; funkcijo za zaznavanje sprememb kličemo samo na koncu
          </li>
          <li>#3 gre za 10.000.000x povečevanje skritega števca (ki se ne prikazuje na uporabniškem vmesniku) pri čemer
            v vsakem koraku kličemo funkcijo za zaznavanje sprememb
          </li>
          <li>#4 gre za 1.000x povečevanje prikazanega števca znotraj asinhrone funkcije <code>setTimeout</code> pri
            čemer v vsakem koraku kličemo funkcijo za zaznavanje sprememb
          </li>
          <li>#5 gre za 1.000x rekurzivno povečevanje prikazanega števca znotraj asinhrone
            funkcije <code>setTimeout</code> pri čemer v vsakem koraku kličemo funkcijo za zaznavanje sprememb
          </li>
        </ul>
        <h3>Nivo 0</h3>
        <Test></Test>
        <LevelOne></LevelOne>
      </div>
    );
  }
}
