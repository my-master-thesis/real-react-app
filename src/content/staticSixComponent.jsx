import React, {Component} from "react";

export class StaticSix extends Component {

  render() {
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#e8e9ea'}}>
        <h4>Komponenta 6/7</h4>
        <p>Ta podvojena komponenta vsebuje HTML kodo, ki ni prikazana, saj vsebuje <code>style="display: none"</code>.
          Še vedno pa je ta prisotna v DOM strukturi.</p>
        <main role="main" style={{display: 'none'}}>
          <p>Tu bi bila ura s posodabljanjem na 1000ms: 10 : 0 : 0</p>
          <p>
            <button className="btn btn-secondary">Ustavi</button>
          </p>
          <p>
            <button className="btn btn-secondary">Nadaljuj</button>
          </p>
          <p>Tu bi bila ura s posodabljanjem na 200ms: 10 : 0 : 0</p>
          <p>
            <button className="btn btn-secondary">Ustavi</button>
          </p>
          <p>
            <button className="btn btn-secondary">Nadaljuj</button>
          </p>
        </main>
      </div>
    );
  }
}
