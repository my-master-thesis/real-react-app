import React, {Component} from "react";
import {ContactsGrid} from "./contactsGridComponent";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addContact} from "../actions";
import { CSSTransition } from 'react-transition-group';
import './Contacts.css';


class Contacts extends Component {
  state = { firstTime: true };

  render() {
    const firstTime = this.state.firstTime;
    if (firstTime) {
      this.setState({firstTime: false});
    }
    const contacts = this.props.contacts ? this.props.contacts : [];
    const favoritesArr = contacts.filter(contact => contact.isFavorite);
    let favorites = (<div/>);
    if (favoritesArr.length) {
      favorites = (
        <div className="container" id="favorite-contacts">
        <h2>Priljubljeni kontakti</h2>
        <ContactsGrid contacts={favoritesArr}></ContactsGrid>
      </div>
      );
    }
    return (
      <div className="container-fluid">
        <h1 className="mt-4">O strani</h1>
        <p>Ta stran vsebuje seznam kontaktov, od koder je s klikom na povezavo Več moč priti na podrobnosti oseb. Osebe
          je prav tako mogoče v živo posodabljati.</p>
        <p>Stran prikazuje primer resne strani, kjer se prikazujejo kontakti, te pa lahko dodajamo, urejamo, brišemo ter
          dodajamo med priljubljene. Na dnu je tudi paginacija, ki služi nadzoru nad tem koliko podatkov želimo
          prikazovati na enkrat.</p>
        <CSSTransition
          in={!!favoritesArr.length && !firstTime}
          timeout={1000}
          classNames="fade"
        >
        {favorites}
        </CSSTransition>
        <div className="container" id="all-contacts">
          <div className="row">
            <div className="col-10">
              <h2>Vsi kontakti</h2>
            </div>
            <div className="col-2">
              <button onClick={() => this.props.addContact()} className="btn btn-success float-right">+</button>
            </div>
          </div>
          <ContactsGrid contacts={contacts} search={true}></ContactsGrid>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    contacts: state.contacts
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addContact: addContact}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
