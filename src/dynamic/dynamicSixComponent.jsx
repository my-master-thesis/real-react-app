import React, {Component} from "react";
import {interval} from 'rxjs';

export class DynamicSix extends Component {

  state = {
    showContent: false,
    currentDate: new Date(),
    currentDate2: new Date(),
  };

  componentDidMount() {
    this.resetTimer(1);
    this.resetTimer(2);
  }

  componentWillUnmount() {
    this.stopTimer(1);
    this.stopTimer(2);
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  reverseShowContent = () => {
    this.setState(prevState => {
      return {showContent: !prevState.showContent};
    });
  }

  resetTimer = (nr) => {
    this.stopTimer(nr);
    if (nr === 1) {
      this.timerSubscription = interval(1000).subscribe(() => this.setState({currentDate: new Date()}));
    } else {
      this.timer2Subscription = interval(200).subscribe(() => this.setState({currentDate2: new Date()}));
    }
  }

  stopTimer = (nr) => {
    if (nr === 1 && this.timerSubscription) {
      void this.timerSubscription.unsubscribe();
    }
    if (nr === 2 && this.timer2Subscription) {
      void this.timer2Subscription.unsubscribe();
    }
  }

  render() {
    return (
      <div className="container rounded pb-2" style={{backgroundColor: '#e8e9ea'}}>
        <h4>Komponenta 6/7</h4>
        <p>Ta podvojena komponenta vsebuje HTML kodo, ki ni prikazana, saj vsebuje <code>style="display: none"</code>.
          Še
          vedno pa je ta prisotna v DOM strukturi in se v ozadju tudi posodablja.</p>
        <div className="form-check">
          <input
            id="showContent"
            name="showContent"
            type="checkbox"
            className="form-check-input"
            checked={this.state.showContent}
            onChange={this.handleInputChange}/>
          <label onClick={this.reverseShowContent} className="form-check-label">
            Prikaži vsebino (spreminja zgolj display)
          </label>
        </div>
        <main className={this.state.showContent ? '' : 'hidden'} role="main">
          <p>Ura s posodabljanjem na
            1000ms: {this.state.currentDate.getHours()} : {this.state.currentDate.getMinutes()} : {this.state.currentDate.getSeconds()}</p>
          <p>
            <button onClick={() => this.stopTimer(1)} className="btn btn-secondary">Ustavi</button>
          </p>
          <p>
            <button onClick={() => this.resetTimer(1)} className="btn btn-secondary">Nadaljuj</button>
          </p>
          <p>Ura s posodabljanjem na
            200ms: {this.state.currentDate2.getHours()} : {this.state.currentDate2.getMinutes()} : {this.state.currentDate2.getSeconds()}</p>
          <p>
            <button onClick={() => this.stopTimer(2)} className="btn btn-secondary">Ustavi</button>
          </p>
          <p>
            <button onClick={() => this.resetTimer(2)} className="btn btn-secondary">Nadaljuj</button>
          </p>
        </main>
      </div>

    );
  }
}
