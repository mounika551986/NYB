import React, { Component } from "react";

class ClassBinding extends Component {

  handleClick = () => {
    alert("Clicked");
  };

  render() {

    return (
      <button onClick={this.handleClick}>
        Click
      </button>
    );
  }
}

export default ClassBinding;