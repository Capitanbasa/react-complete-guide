import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
      persons : [
        { name : 'Max', age : 28 },
        { name : 'Hercival', age : 30 },
        { name : 'Manu', age : 26 }
      ],
      otherState : 'some text'
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
    nameChangeHandler = (event) => {
      this.setState({
        persons : [
          { name : 'Max', age : 29 },
          { name : event.target.value, age : 32 },
          { name : 'Manuuuuu', age : 27 }
        ]
    })

    }

  render(){
    const style ={
      backgroundColor : 'white',
      font : 'inherit',
      border: '1px solid #blue',
      padding: '8px 15px',
      borderRadius : '5px',
      cursor : 'pointer'
    }
    return (
      <div className="App">
        <h1>Hercival Aragon</h1>
        <button style={style} onClick={() => {this.switchNameHandler('Maaaaxxx')}} >Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          clickEvent={this.switchNameHandler.bind(this,'Maximillian')}
          changed={this.nameChangeHandler}>My Hobbies : Racing</Person>
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
        <p>This is really working</p>
      </div>
    );
  }
}

export default App;
