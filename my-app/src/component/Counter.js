import React from "react";

// const ErrorComponent = props => {
//   if (props.error) {
//     throw new Error("I made it");
//   } else {
//     return <h1>No error</h1>;
//   }
// };

class Counter extends React.Component {
  // With ES6, we can define state without a constructor
  constructor(props) {
    console.log("Constructor");
    console.log("----------------------------");

    super(props);

    this.state = {
      counter: 0
    };

    this.plusOne = () => {
      this.setState({
        counter: this.state.counter + 1
      });
    };

    this.minusOne = () => {
      this.setState({
        counter: this.state.counter - 1
      });
    };
  }

  //   state = {
  //     counter: 0
  //   };

  // getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates.
  // It should return an object to update the state, or null to update nothing
  static getDerivedStateFromProps(props, state) {
    if (props.startNumber && props.startNumber !== state.startNumber) {
      console.log("Get Derived State From Props");
      console.log("Props: ", props);
      console.log("State: ", state);
      console.log("----------------------------");
      return {
        startNumber: props.startNumber,
        counter: props.startNumber
      };
    }
  }

  //getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to the DOM
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log("get Snapshot Before Update");
  //   console.log("Previous props: ", prevProps);
  //   console.log("Previous state: ", prevState);
  //   console.log("----------------------------");
  //   return null;
  // }

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.plusOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <div>
          <h1>Counter: {this.state.counter}</h1>
        </div>
        {/* <ErrorComponent error={true} /> */}
      </div>
    );
  }

  //componentDidMount() is invoked immediately after a component is mounted
  componentDidMount() {
    console.log("Component Did Mount");
    console.log("-------------------");
  }

  //componentDidUpdate() is invoked immediately after updating occurs,
  //can be used to compare the current props to previous props
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("previous props: ", prevProps);
    console.log("previous state: ", prevState);
    console.log("the snapshot: ", snapshot);
    console.log("-------------------");
  }

  //componentWillUnmount() is invoked immediately before a component is unmounted and destroyed
  componentWillUnmount() {
    console.log("Component Will Unmount");
    console.log("-------------------");
  }

  //shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props
  //shouldComponentUpdate() is invoked before rendering when new props or state are being received
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Should component update");
  //   console.log("Next props: ", nextProps);
  //   console.log("Next state", nextState);
  //   console.log("-------------------");
  //   // Condition to tell React when it is good NOT re-render
  //   // If the next prop has property notImportantNumber, and its value is changed.
  //   // Since its not important, no need to re-render
  //   if (
  //     nextProps.notImportantNumber &&
  //     nextProps.notImportantNumber !== this.props.notImportantNumber
  //   ) {
  //     console.log("Should component update - NO NEED TO RENDER");
  //     console.log("-------------------------------------------");
  //     return false;
  //   }
  //   console.log("Should component update - RENDER");
  //   console.log("-------------------------------------------");
  //   return true;
  // }

  // componentDidCatch(error, info) {
  //   console.log("Component Did Catch");
  //   console.log("Error: ", error);
  //   console.log("Info: ", info);
  //   console.log("-------------------");

  //   this.setState({ error, info });
  // }
}

export default Counter;
