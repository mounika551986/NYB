import React, { PureComponent } from "react";

class EmployeeCard extends PureComponent {
  render() {
    console.log("Employee Card Rendered:", this.props.employee.name);

    return (
      <div
        style={{
          border: "1px solid gray",
          margin: "10px",
          padding: "10px",
          width: "250px",
        }}
      >
        <h3>{this.props.employee.name}</h3>
        <p>Department: {this.props.employee.department}</p>
        <p>Salary: ₹{this.props.employee.salary}</p>
      </div>
    );
  }
}

export default EmployeeCard;
