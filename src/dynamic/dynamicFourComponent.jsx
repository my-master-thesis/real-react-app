import React, {Component} from "react";

export class DynamicFour extends Component {
  state = {
    listItems: [
      '#1A gre za 10.000.000x povečevanje prikazanega števca pri čemer v vsakem koraku kličemo funkcijo za zaznavanje sprememb',
      '#1B gre za 10.000.000x povečevanje treh prikazanih števcev pri čemer v vsakem koraku kličemo funkcijo za zaznavanje sprememb',
      '#1C gre za 10.000.000x nastavljanje novega objekta v prikazano spremenljivko',
      '#2 gre za 10.000.000x povečevanje prikazanega števca pri čemer se ta začasno prepiše in povečuje v lokalni spremenljivki; funkcijo' +
      ' za zaznavanje sprememb kličemo samo na koncu',
      '#3 gre za 10.000.000x povečevanje skritega števca (ki se ne prikazuje na uporabniškem vmesniku) pri čemer v vsakem koraku kličemo' +
      ' funkcijo za zaznavanje sprememb',
      '#4 gre za 1.000x povečevanje prikazanega števca znotraj asinhrone funkcije setTimeout pri čemer v vsakem koraku kličemo' +
      ' funkcijo za zaznavanje sprememb',
      '#5 gre za 1.000x rekurzivno povečevanje prikazanega števca znotraj asinhrone funkcije setTimeout pri čemer v vsakem' +
      ' koraku kličemo funkcijo za zaznavanje sprememb',

    ]
  }

  render() {
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#e8e9ea'}}>
        <h4>Komponenta 4</h4>
        <p>Seznam testov v aplikaciji vključen prek sprehoda čez seznam iz spremenljivke:</p>
        <ul>
          {this.state.listItems.map((item, index) => {
            return <li key={index}>
              {item}
            </li>
          })}
        </ul>
      </div>
    );
  }
}
