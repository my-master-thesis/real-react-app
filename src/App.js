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
import Contacts from "./contacts/contactsComponent";
import Tasks from "./tasks/tasksComponent";
import ContactsDetail from "./contacts/contactsDetailComponent";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

export class App extends Component {

  store = createStore(reducer);

  state = {
    showToolbar: true,
    sideMenuItems: [
      {link: '/home', text: 'Naslovnica'},
      {link: '/contacts', text: 'Kontakti'},
      {link: '/tasks', text: 'Naloge'},
      {link: '/boundary', text: 'Test nastavljanja vrednosti'},
      {link: '/content', text: 'Statična vsebina'},
      {link: '/dynamic', text: 'Dinamična vsebina'},
    ]
  };

  toggleMenu = () => {
    this.setState((state) => ({
      showToolbar: !state.showToolbar
    }));
  }

  saveData() {
    console.log(123);
    const state = this.store.getState();
    localStorage.setItem('contacts-store', JSON.stringify(state.contacts));
    localStorage.setItem('tasks-store', JSON.stringify(state.tasks));
    console.log(345);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.saveData.bind(this));
  }

  render() {
    return (
      <div id="wrapper" className={`d-flex ${this.state.showToolbar ? "" : "toggled"}`}>
        <Provider store={this.store}>
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

            <div id=" page-content-wrapper" style={{width: '100%'}}>

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
                  <Route exact path="/contacts">
                    <Contacts/>
                  </Route>
                  <Route exact path="/contacts/:id">
                    <ContactsDetail/>
                  </Route>
                  <Route exact path="/tasks">
                    <Tasks/>
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
        </Provider>
      </div>
    );
  }
}

// export default App;
