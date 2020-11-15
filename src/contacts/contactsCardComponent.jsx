import React, {Component} from "react";
import {favoriteContact, deleteContact, editContact} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {TrashIcon} from "../components/trashIconComponent";
import {StarIcon} from "../components/starIconComponent";
import './ContactsCard.css';
import {Link} from "react-router-dom";
import {Input} from "../components/inputComponent";
import {Select} from "../components/selectComponent";

class ContactsCard extends Component {

  render() {
    const contact = this.props.contact;
    let trashIcon;
    if (!this.props.full) {
      trashIcon = (<div className="col-2" onClick={() => this.props.deleteContact(contact.id)}>
        <TrashIcon/>
      </div>);
    }
    return (
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-10 contact-card">
              <div className={contact.isFavorite ? 'favorite' : ''}
                   onClick={() => this.props.favoriteContact(contact.id)}>
                <StarIcon/>
              </div>
              <div className="contact-card-title">#{contact.id} {contact.firstName} {contact.lastName}</div>
            </div>
            {trashIcon}
          </div>
        </div>
        <div className="card-body">
          <form className="example-form">
            <Input value={contact.firstName} onChange={(event) => this.props.editContact(contact.id, event.target.value, contact.lastName, contact.email, contact.phone, contact.companyId)} placeholder="Janez" label="Ime"/>
            <Input value={contact.lastName} onChange={(event) => this.props.editContact(contact.id, contact.firstName, event.target.value, contact.email, contact.phone, contact.companyId)} placeholder="Novak" label="Priimek"/>
            <Input value={contact.email} onChange={(event) => this.props.editContact(contact.id, contact.firstName, contact.lastName, event.target.value, contact.phone, contact.companyId)} placeholder="info@test.com" label="Email"/>
            <Input value={contact.phone} onChange={(event) => this.props.editContact(contact.id, contact.firstName, contact.lastName, contact.email, event.target.value, contact.companyId)} placeholder="+386 31 123 456" label="Telefon"/>
            <Select value={contact.companyId} items={this.props.companies} onChange={(event) => this.props.editContact(contact.id, contact.firstName, contact.lastName, contact.email, contact.phone, event.target.value)} bindLabel="companyName" bindValue="id" name="companyId" label="Podjetje" />
            <p><Link to={'contacts/' + contact.id}>Več</Link></p>
          </form>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state){
  return{
    companies: state.companies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteContact: deleteContact,
    editContact: editContact,
    favoriteContact: favoriteContact
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsCard);

