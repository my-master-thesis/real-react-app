import React, {Component} from "react";

export class Test extends Component {

  state = {
    counterA: 1,
    counterB: 1,
    counterC: 1,
    initialObject: {title: 'Some random obj', value: 0, deeper: {title: 'Deeper object', someBool: true}, emptyOby: {}},

    resultsClick: null,
    resultsClickVar: null,
    resultsClickHidden: null,
    resultsClickTimeout: null,
    resultsClickRecursiveTimeout: null,
    resultsMultiple: null,
    resultsSetObject: null,

    hidden: 1,

    recursiveTimer: null,
  };

  click() {
    console.time('Function this increase');
    const tmp = Date.now();
    for (let i = 0; i < 10000000; i++) {
      this.setState((prevState) => {
        return {counterA: prevState.counterA + 1};
      });
    }
    this.setState({
      resultsClick: Date.now() - tmp
    });
    console.timeEnd('Function this increase');
  }

  clickVar() {
    console.time('Function var increase');
    const tmp = Date.now();
    let counter = this.state.counterB;
    for (let i = 0; i < 10000000; i++) {
      counter++;
    }
    this.setState({
      counterB: counter,
    });
    this.setState({
      resultsClickVar: Date.now() - tmp
    });
    console.timeEnd('Function var increase');
  }

  clickHidden() {
    console.time('Function hidden increase');

    const tmp = Date.now();
    // for (let i = 0; i < 10000000; i++) {
    //     this.setState({ counter: this.state.hidden + 1 });
    // }
    for (let i = 0; i < 10000000; i++) {
      this.setState((prevState) => {
        return {hidden: prevState.hidden + 1};
      });
    }
    this.setState({
      resultsClickHidden: Date.now() - tmp
    });
    console.timeEnd('Function hidden increase');
  }

  clickTimeout() {
    console.time('Function timeout increase');
    const tmp = Date.now();
    for (let i = 0; i < 10000; i++) {
      setTimeout(() => {
        this.setState((prevState) => {
          return {counterC: prevState.counterC + 1};
        });
      }, 1);
    }
    this.setState({
      resultsClickTimeout: Date.now() - tmp
    });
    console.timeEnd('Function timeout increase');
  }

  clickRecursiveTimeout(nr) {
    if (nr === 1000) {
      console.time('Function recursive timeout increase');
      this.setState({
        recursiveTimer: Date.now()
      });
    }
    if (nr > 0) {
      setTimeout(() => {
        this.setState((prevState) => {
          return {counterC: prevState.counterC + 1};
        });
        this.clickRecursiveTimeout(nr - 1);
      }, 1);
    } else {
      this.setState((prevState) => {
        return {resultsClickRecursiveTimeout: Date.now() - prevState.recursiveTimer};
      });
      console.timeEnd('Function recursive timeout increase');
    }
  }

  clickMultiple() {
    console.time('Function multiple increase');
    const tmp = Date.now();
    for (let i = 0; i < 10000000; i++) {
      this.setState((prevState) => {
        return {
          counterA: prevState.counterA + 1,
          counterB: prevState.counterB + 1,
          counterC: prevState.counterC + 1
        };
      });
    }
    this.setState({
      resultsMultiple: Date.now() - tmp
    });
    console.timeEnd('Function multiple increase');
  }

  clickSetObject() {
    console.time('Function set object');
    const tmp = Date.now();
    for (let i = 0; i < 10000000; i++) {
      this.setState({ initialObject: { title: 'Some changed obj', value: i, deeper: { title: 'Deeper object', someBool: true }, emptyOby: {}}});
    }
    this.setState({
      resultsSetObject: Date.now() - tmp
    });
    console.timeEnd('Function set object');
  }

  render() {
    return (
      <div>
        <span>Števc A: <b>{this.state.counterA}</b></span>&nbsp;
        <span>Števc B: <b>{this.state.counterB}</b></span>&nbsp;
        <span>Števc C: <b>{this.state.counterC}</b></span>
        <br/>
        <span>Testni objekt: <b>{JSON.stringify(this.state.initialObject)}</b></span>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Test</th>
            <th scope="col">Porabljen čas v ms</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1A</th>
            <td>
              <button className="btn btn-dark" onClick={() => this.click()}>Test this</button>
            </td>
            <td>{this.state.resultsClick}</td>
          </tr>
          <tr>
            <th scope="row">1B</th>
            <td>
              <button className="btn btn-dark" onClick={() => this.clickMultiple()}>Test set multiple</button>
            </td>
            <td>{this.state.resultsMultiple}</td>
          </tr>
          <tr>
            <th scope="row">1C</th>
            <td>
              <button className="btn btn-dark" onClick={() => this.clickSetObject()}>Test set object</button>
            </td>
            <td>{this.state.resultsSetObject}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <button className="btn btn-dark" onClick={() => this.clickVar()}>Test var</button>
            </td>
            <td>{this.state.resultsClickVar}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              <button className="btn btn-dark" onClick={() => this.clickHidden()}>Test hidden</button>
            </td>
            <td>{this.state.resultsClickHidden}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>
              <button className="btn btn-dark" onClick={() => this.clickTimeout()}>Test timeout</button>
            </td>
            <td>{this.state.resultsClickTimeout}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>
              <button className="btn btn-dark" onClick={() => this.clickRecursiveTimeout(1000)}>Test recursive timeout</button>
            </td>
            <td>{this.state.resultsClickRecursiveTimeout}</td>
          </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
