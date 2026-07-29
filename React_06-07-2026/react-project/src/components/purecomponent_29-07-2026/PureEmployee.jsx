import React, { Component } from "react";
import EmployeeCard from "./EmployeeCard";

class PureEmployee extends Component {
  state = {
    company: "ABC Technologies",
    employees: [
      { id: 1, name: "Mounika", department: "IT", salary: 50000 },
      { id: 2, name: "Rahul", department: "HR", salary: 45000 },
    ],
  };

  changeCompany = () => {
    this.setState({
      company: "XYZ Technologies",
      
    });
  };

  render() {
    console.log("App Rendered");

    return (
      <div>
        <h1>{this.state.company}</h1>

        <button onClick={this.changeCompany}>
          Change Company Name
        </button>

        {this.state.employees.map((emp) => (
          <EmployeeCard key={emp.id} employee={emp} />
        ))}
      </div>
    );
  }
}

export default PureEmployee;