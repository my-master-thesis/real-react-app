import React, {Component} from "react";

export class DynamicEight extends Component {

  state = {
    inputField: '',
    selectField: '',
    textField: '',
    checkField: false,
    radioField: 'option1',
    buttonClickedCounter: 0
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  btnClicked() {
    this.setState(prevState => {
      return { buttonClickedCounter: prevState.buttonClickedCounter + 1 };
    });
  }

  render() {
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#e8e9ea'}}>
        <h4>Komponenta 8</h4>
        <p>Vsebina HTML elementov ki vsebujejo doseganje:</p>

        <div className="form-group">
          <label htmlFor="inputField">Vnosno polje:</label><br/>
          <input value={this.state.inputField} onChange={this.handleInputChange} type="text" name="inputField"
                 id="inputField" className="form-control"/>
          <span>{this.state.inputField}</span>
        </div>
        <div className="form-group">
          <label htmlFor="selectField">Izbira vrednosti</label>
          <select value={this.state.selectField} onChange={this.handleInputChange} className="form-control"
                  name="selectField" id="selectField">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <span>{this.state.selectField}</span>
        </div>
        <div className="form-group">
          <label htmlFor="textField">Besedilno polje</label>
          <textarea value={this.state.textField} onChange={this.handleInputChange} className="form-control" rows="3" name="textField"
                    id="textField"></textarea>
          <span>{this.state.textField}</span>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              id="checkField"
              name="checkField"
              type="checkbox"
              className="form-check-input"
              checked={this.state.checkField}
              onChange={this.handleInputChange}
            />
            <label className="form-check-label" htmlFor="checkField">
              Potrditveno okno
            </label>
          </div>
          <span>{this.state.checkField ? 'true' : 'false'}</span>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              onChange={this.handleInputChange}
              className="form-check-input"
              type="radio"
              value="option1"
              checked={this.state.radioField === "option1"}
              name="radioField"
              id="option1"/>
            <label className="form-check-label" htmlFor="option1">
              Izbirno okno 1
            </label>
          </div>
          <div className="form-check">
            <input
              onChange={this.handleInputChange}
              className="form-check-input"
              type="radio"
              checked={this.state.radioField === "option2"}
              value="option2"
              name="radioField"
              id="option2"/>
            <label className="form-check-label" htmlFor="option2">
              Izbirno okno 2
            </label>
          </div>
          <span>{this.state.radioField}</span>
        </div>
        <div className="form-group">
          <button onClick={() => this.btnClicked() } className="btn btn-secondary">Nek Gumb
          </button>
        </div>
        <span>Število klikov gumba: {this.state.buttonClickedCounter}</span>
      </div>


    );
  }
}
