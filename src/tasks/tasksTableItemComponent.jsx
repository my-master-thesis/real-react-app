import React, {Component} from "react";
import {Input} from "../components/inputComponent";
import {Select} from "../components/selectComponent";
import {bindActionCreators} from "redux";
import {editTask, editTaskDuration} from "../actions";
import {connect} from "react-redux";
import {interval} from 'rxjs';

class TasksTableItem extends Component {

  startTimer() {
    const task = this.props.task;
    this.props.editTaskDuration(task.id, (new Date(Date.now() - (task.duration ? task.duration : 0))), task.duration);
    this.startInterval();
  }

  stopTimer(skipStop = false) {
    if (this.timerSubscription && !this.timerSubscription.closed) {
      this.timerSubscription.unsubscribe();
      if (!skipStop) {
        const task = this.props.task;
        this.props.editTaskDuration(task.id, null, task.duration);
      }
    }
  }

  startInterval() {
    this.stopTimer();
    this.timerSubscription = interval(1000).subscribe(() => {
      const task = this.props.task;
      if (task.startDate) {
        this.props.editTaskDuration(task.id, task.startDate, Date.now() - task.startDate.getTime());
      }
    });
  }

  printDuration(ms) {
    if (!ms) {
      return '';
    }
    const hours = Math.floor(ms / (60 * 60 * 1000));
    const minutes = Math.floor(ms / (60 * 1000)) % 60;
    const seconds = Math.floor(ms / (1000)) % 60;
    return hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  componentDidMount() {
    if (this.props.task.startDate) {
      this.startInterval();
    }
  }

  componentWillUnmount() {
    this.stopTimer(true);
  }

  render() {
    const task = this.props.task;
    let taskButton;
    let showContacts;
    if (this.props.showContacts) {
      showContacts = (<td><Select value={task.contactId} items={this.props.contacts} onChange={(event) => this.props.editTask(task.id, task.title, task.description, event.target.value)} bindLabel="firstName" bindLabelSecond="lastName" bindValue="id" /></td>);
    }
    if (task.startDate) {
      taskButton = (<button onClick={() => this.stopTimer()} className="btn btn-danger">Stop</button>);
    } else {
      taskButton = (<button onClick={() => this.startTimer()} className="btn btn-success">Start</button>);
    }
    return (
      <tr>
        <td>{task.id}</td>
        <td><Input value={task.title} name="opravilo" onChange={(event) => this.props.editTask(task.id, event.target.value, task.description, task.contactId)} /></td>
        <td><Input value={task.description} name="opis" onChange={(event) => this.props.editTask(task.id, task.title, event.target.value, task.contactId)} /></td>
        <td>{this.printDuration(task.duration)} {taskButton}</td>
        {showContacts}
      </tr>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({editTask: editTask, editTaskDuration: editTaskDuration}, dispatch);
}

export default connect(null, mapDispatchToProps)(TasksTableItem);

