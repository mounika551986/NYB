import React, { PureComponent } from "react";

class ClassEmployee extends PureComponent {
  render() {
    console.log("PureComponent Rendered");

    return (
      <div>
        <h3>Class Employee : {this.props.name}</h3>
      </div>
    );
  }
}

export default ClassEmployee;