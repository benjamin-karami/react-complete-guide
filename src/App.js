import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Ben", age: 27 },
      { name: "Max", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: " some text is here!"
  };

  switchNameHandler = newName => {
    // console.log("hello wolrd");
    // this.state.persons[0].name = "Benjamin";

    this.setState({
      persons: [
        { name: newName, age: 27 },
        { name: "Max", age: 2 },
        { name: "Stephanie", age: 70 }
      ]
    });
  };

  nameChangedHandler = e => {
    this.setState({
      persons: [
        { name: "Benjamin", age: 27 },
        { name: e.target.value, age: 2 },
        { name: "Stephanie", age: 70 }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "Pointer"
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Benjamin")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, "Benji")}
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
