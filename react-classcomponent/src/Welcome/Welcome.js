import React from "react";
// import React from "react";

// class Welcome extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }
// export default Welcome;

// class Welcome extends React.Component {
//   constructor() {
//     super();
//     this.state = { color: "red" };
//   }
//   render() {
//     return <h2>I am a {this.state.color} Car!</h2>;
//   }
// }
// export default Welcome;

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}
export default Welcome;
