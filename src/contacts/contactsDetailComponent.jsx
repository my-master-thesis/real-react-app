import React, {Component} from "react";
import ContactsCard from "./contactsCardComponent";
import {connect} from "react-redux";
import TasksTable from "../tasks/tasksTableComponent";

class ContactsDetail extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h1 className="mt-4">O strani</h1>
        <p>Stran prikazuje podrobnosti kontakta skupaj z njegovimi nalogami.</p>
        <h2>Kontakt:</h2>
        <ContactsCard contact={this.props.contact} full={true}/>
        <br/>
        <TasksTable tasks={this.props.tasks} defaultContact={this.props.id} />
      </div>

    );
  }
}

function mapStateToProps(state){
  const id = Number(window.location.pathname.split('/').pop());
  return{
    id: id,
    contact: state.contacts.find(contact => contact.id === id),
    tasks: state.tasks.filter(task => task.contactId === id)
  };
}

export default connect(mapStateToProps)(ContactsDetail);
