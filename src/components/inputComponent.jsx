import React, {Component} from "react";

export class Input extends Component {

  render() {
    let label;
    if (this.props.label) {
      label = (<label>{this.props.label}:</label>);
    }
    return (

      <div className="form-group">
        {label}
        <input
          value={this.props.value}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={(event) => this.props.onChange(event)   }
          type="text"
          className="form-control"
        />
      </div>

    );
  }
}
