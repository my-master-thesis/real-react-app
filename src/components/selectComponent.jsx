import React, {Component} from "react";

export class Select extends Component {

  render() {
    let label;
    if (this.props.label) {
      label = (<label>{this.props.label}:</label>);
    }
    let options = this.props.items.map(item => {
      return (<option key={this.props.bindValue ? item[this.props.bindValue] : item} value={this.props.bindValue ? item[this.props.bindValue] : item}>
        {this.props.bindLabel ? (item[this.props.bindLabel] + (this.props.bindLabelSecond ? (' ' + item[this.props.bindLabelSecond]) : '')) : item}
      </option>);
    });
    return (

      <div className="form-group">
        {label}
        <select
          value={this.props.value}
          onChange={(event) => this.props.onChange(event)}
          className="form-control"
        >{options}</select>
      </div>

    );
  }
}
