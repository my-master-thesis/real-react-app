import React, {Component} from "react";
import ContactsCard from "./contactsCardComponent";
import {connect} from "react-redux";

class ContactsDetail extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h1 className="mt-4">O strani</h1>
        <p>Stran prikazuje podrobnosti kontakta skupaj z njegovimi nalogami.</p>
        <h2>Kontakt:</h2>
        <ContactsCard contact={this.props.contact} full={true}/>
        <br/>
      </div>

    );
  }
}

function mapStateToProps(state){
  const id = Number(window.location.pathname.split('/').pop());
  console.log(id);
  return{
    contact: state.contacts.find(contact => contact.id === id)
  };
}

export default connect(mapStateToProps)(ContactsDetail);
