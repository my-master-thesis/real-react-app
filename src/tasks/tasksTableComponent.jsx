import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {addTask} from "../actions";
import {connect} from "react-redux";
import {Pagination} from "../components/paginationComponent";
import TasksTableItem from "./tasksTableItemComponent";

class TasksTable extends Component {

  state = {
    pageSize: 10,
    pageIndex: 0
  };

  pageChange(obj) {
    this.setState({pageSize: obj.pageSize, pageIndex: obj.pageIndex});
  }

  render() {
    let owner;
    if (this.props.showContacts) {
      owner = (<th scope="col">Nosilec</th>);
    }
    const from = (this.state.pageIndex) * this.state.pageSize,
      to = (this.state.pageIndex + 1) * this.state.pageSize;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h2>Naloge</h2>
          </div>
          <div className="col-2">
            <button onClick={() => this.props.addTask(this.props.defaultContact)} className="btn btn-success float-right">+</button>
          </div>
        </div>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Opravilo</th>
            <th scope="col">Opis</th>
            <th scope="col">Čas izvajanja</th>
            {owner}
          </tr>
          </thead>
          <tbody>
          {this.props.tasks.filter((val, index) => index >= from && index < to).map(task => {
            return (<TasksTableItem task={task} showContacts={this.props.showContacts} key={task.id} contacts={this.props.contacts} />);
          })}
          </tbody>
        </table>
        <Pagination length={this.props.tasks.length} pageSizeOptions={[10, 25, 50, 100]} pageSize={this.state.pageSize}
                    page={(obj) => this.pageChange(obj)}/>
      </div>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addTask: addTask}, dispatch);
}

function mapStateToProps(state){
  return{
    contacts: [...state.contacts].sort((a, b) => a.isFavorite === b.isFavorite ? 0 : (a.isFavorite ? -1 : 1))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksTable);
