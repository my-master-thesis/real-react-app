import React, {Component} from "react";

export class Tasks extends Component {

  render() {
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#e8e9ea'}}>
        <h4>Komponenta 4</h4>
        <p>Seznam testov v aplikaciji:</p>
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
      </div>
    );
  }
}
