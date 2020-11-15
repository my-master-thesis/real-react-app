import React, {Component} from "react";
import {connect} from "react-redux";
import TasksTable from "./tasksTableComponent";

class Tasks extends Component {

  render() {
    return (
      <div className="container-fluid">
        <h1 className="mt-4">O strani</h1>
        <p>Ta stran vsebuje seznam vseh nalog skupaj z njihovimi nosilci. Naloge je mogoče v živo posodabljati in
          dodeliti drugi osebi. Peav tako je mogoče pognati štoparic, ki beleži čas izvajanja naloge.</p>
        <p>Naloge lahko dodajamo, urejamo ter brišemo. Na dnu je tudi paginacija, ki služi tudi nadzoru nad tem koliko
          podatkov želimo prikazovati na enkrat.</p>
        <TasksTable tasks={this.props.tasks} showContacts={true} />
</div>
    );
  }
}
function mapStateToProps(state){
  return{
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(Tasks);
