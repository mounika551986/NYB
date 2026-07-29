import React, { } from "react";


class PureComp extends React.PureComponent {
  render() {
    console.log("Pure Component Rendered");
    return <h2>Hello</h2>;
  }
}
export default PureComp;
