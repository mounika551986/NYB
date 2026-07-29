import React ,{ PureComponent } from "react";

class Student extends PureComponent {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
      </div>
    );
  }
}

export default Student;