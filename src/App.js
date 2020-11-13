import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";
import {Home} from "./home/homeComponent";
import {Content} from "./content/contentComponent";
import {Dynamic} from "./dynamic/dynamicComponent";
import {BoundaryCases} from "./boundary-cases/boundaryCasesComponent";

export class App extends Component {

  state = {
    showToolbar: true,
    sideMenuItems: [
      {link: 'home', text: 'Naslovnica'},
      {link: 'contacts', text: 'Kontakti'},
      {link: 'tasks', text: 'Naloge'},
      {link: 'boundary', text: 'Test nastavljanja vrednosti'},
      {link: 'content', text: 'Statična vsebina'},
      {link: 'dynamic', text: 'Dinamična vsebina'},
    ]
  };

  toggleMenu = () => {
    this.setState((state) => ({
      showToolbar: !state.showToolbar
    }));
  }

  render() {
    return (
      <div id="wrapper" className={`d-flex ${this.state.showToolbar ? "" : "toggled"}`}>
        <Router>
          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading" title="Magistrski demonstartiven primer">MDP</div>
            <div className="list-group list-group-flush">
              {this.state.sideMenuItems.map((item, index) => {
                return <NavLink
                  activeClassName='active'
                  to={item.link}
                  key={index}
                  className="list-group-item list-group-item-action"
                >{item.text}</NavLink>
              })}
            </div>
          </div>

          <div id=" page-content-wrapper">

            <nav className=" navbar navbar-light bg-light border-bottom">
              <button className=" navbar-toggler"
                      onClick={this.toggleMenu}>
            <span className="navbar-toggler-icon">
          </span>
              </button>
            </nav>

            <div className="container-fluid">
              <Switch>
                <Route exact path="/">
                  <Redirect to="/home"/>
                </Route>
                <Route exact path="/home">
                  <Home/>
                </Route>
                <Route path="/boundary">
                  <BoundaryCases/>
                </Route>
                <Route path="/content">
                  <Content/>
                </Route>
                <Route path="/dynamic">
                  <Dynamic/>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

// export default App;
