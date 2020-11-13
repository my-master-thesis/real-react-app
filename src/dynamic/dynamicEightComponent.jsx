import React, {Component} from "react";

export class DynamicEight extends Component {

  render() {
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#e8e9ea'}}>
        <h4>Komponenta 8</h4>
        <p>Vsebina praznih HTML elementov:</p>

        <div className="form-group">
          <label htmlFor="inputField">Vnosno polje:</label><br/>
          <input readOnly type="text" name="inputField" id="inputField" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="selectField">Izbira vrednosti</label>
          <select readOnly className="form-control" name="selectField" id="selectField">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="textField">Besedilno polje</label>
          <textarea readOnly className="form-control" rows="3" name="textField" id="textField"></textarea>
        </div>
        <div className="form-group">
          <input readOnly className="form-check-input" type="checkbox" value="" id="checkField" name="checkField"/>
          <label className="form-check-label" htmlFor="checkField">
            Potrditveno okno
          </label>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input readOnly className="form-check-input" type="radio" value="option1" checked name="radioField" id="option1"/>
            <label className="form-check-label" htmlFor="option1">
              Izbirno okno 1
            </label>
          </div>
          <div className="form-check">
            <input readOnly className="form-check-input" type="radio" value="option2" name="radioField" id="option2"/>
            <label className="form-check-label" htmlFor="option2">
              Izbirno okno 2
            </label>
          </div>
        </div>
        <div className="form-group">
          <button className="btn btn-secondary">Nek Gumb</button>
        </div>
      </div>

    );
  }
}
