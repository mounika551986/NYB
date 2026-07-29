import React, { Component } from "react";
import Student from "./Student";

class PureComponent extends Component {
  state = {
    name: "Mounika",
    
  };

  render() {
    return (
      <div>
        <Student name={this.state.name} />
      </div>
    );
  }
}

export default PureComponent;