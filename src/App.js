import React, { Component, Fragment } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons : [
        { id : 1 ,name : 'Max', age : 28 },
        { id : 2, name : 'Hercival', age : 30 },
        { id : 3, name : 'Manu', age : 26 }
      ],
      otherState : 'some text',
      showPerson : true
    }
    switchNameHandler = (newName) => {
      this.setState({
        persons : [
          { name : newName, age : 29 },
          { name : 'Hercival Aragon', age : 32 },
          { name : 'Manuuuuu', age : 27 }
        ]
      })
    }
    nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {return p.id === id});
      const person = {
        ...this.state.persons[personIndex]
      };
      person.name = event.target.value;
      const persons = [...this.state.persons ];
      persons[personIndex] = person;
      this.setState({persons : persons});
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.persons;
        //const persons = this.state.persons.slice();
        const persons = [...this.state.persons]
        persons.splice(personIndex, 1);
        this.setState({persons : persons});
    }

    togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({ showPerson : !doesShow});
    }

  render(){
    let persons = null;

    if(this.state.showPerson){
      persons = (
            <Fragment>
              { this.state.persons.map(
                  (person, index) => { 
                    return <Person 
                      name={person.name} 
                      age={person.age} 
                      delete={()=>this.deletePersonHandler(index)} 
                      key={person.id}
                      changed={(event)=>this.nameChangeHandler(event, person.id)}/> 
                  }
                )
              }
            </Fragment>
      );
    }
    return (
      <div className="ui center aligned container">
        <h1>Hercival Aragon</h1>
        <button onClick={this.togglePersonHandler} className="ui primary button">Toggle Persons</button>
        <div className="ui divider"></div>
        <div className="ui cards">{persons}</div>
      </div>
    );
  }
}

export default App;
