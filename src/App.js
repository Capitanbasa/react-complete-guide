import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personState, setPersonState ] = useState ({
      persons : [
        { name : 'Max', age : 28 },
        { name : 'Hercival', age : 30 },
        { name : 'Manu', age : 26 }
      ],
      otherState : 'some text'
    });
    const switchNameHandler = () => {
      setPersonState({
        persons : [
          { name : 'Maxxxxx', age : 29 },
          { name : 'Hercival Aragon', age : 32 },
          { name : 'Manuuuuu', age : 27 }
        ]
      });
    }
    return (
      <div className="App">
        <h1>Hercival Aragon</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age} />
        <Person name={personState.persons[2].name} age={personState.persons[2].age} />
        <p>This is really working</p>
      </div>
    );
}

export default app;
