import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Ben", age: 27 },
      { id: 2, name: "Max", age: 29 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    otherState: " some text is here!",
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.find(p => {
      return p.id === id;
    });

    console.log(personIndex);

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.red;
    }

    const assignedClasses = [];

    // this.state.persons.length <= 2
    //   ? classes.push("red")
    //   : this.state.persons.length <= 1
    //   ? classes.push("bold")
    //   : null;

    if (this.state.persons.length <= 2) {
      assignedClasses.push("red");
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push("bold");
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
