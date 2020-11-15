import React, {Component} from "react";
import ContactsCard from "./contactsCardComponent";
import {Pagination} from "../components/paginationComponent";

export class ContactsGrid extends Component {

  state = {
    pageSize: 6,
    pageIndex: 0
  };

  pageChange(obj) {
    this.setState({pageSize: obj.pageSize, pageIndex: obj.pageIndex});
  }

  render() {
    let contacts = this.props.contacts ? this.props.contacts : [];
    let pagination;
    if (this.props.search) {
      pagination = (<Pagination length={contacts.length} pageSizeOptions={[6, 30, 60, 100]} pageSize={this.state.pageSize} page={(obj) => this.pageChange(obj)} />);
    }
    const from = (this.state.pageIndex) * this.state.pageSize,
      to = (this.state.pageIndex + 1) * this.state.pageSize;
    return (
      <div>
        <div className="row mr-md-n3 mr-0">
          {contacts.filter((val, index) => index >= from && index < to).map(contact => {
            return (<div className="col-lg-4 col-md-6 mb-3" key={contact.id}><ContactsCard contact={contact} /></div>);
          })}
        </div>
        {pagination}
      </div>
    );
  }
}
