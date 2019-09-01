import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Ben", age: 27 },
      { name: "Max", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: " some text is here!"
  });

  const [otherState, setOtherState] = useState({
    otherState: " some text is here!"
  });

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log("hello wolrd");
    // this.state.persons[0].name = "Benjamin";

    setPersonsState({
      persons: [
        { name: "Benjamin", age: 27 },
        { name: "Max", age: 2 },
        { name: "Stephanie", age: 70 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
