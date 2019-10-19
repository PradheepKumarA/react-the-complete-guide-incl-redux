import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium,{StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      { id:'1', name: "pk1", age: 23 },
      { id:'2', name: "pk2", age: 23 },
      { id:'3', name: "pk3", age: 23 }
    ],
    otherState : "other state",
    showPersons: false
  };

  toogleDisplayHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  removePersonHandler = (index) => {
    let persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  changeNameHandler = (event, id) => {
    let persons = this.state.persons.slice();
    let index = persons.findIndex(person => { return person.id === id});
    persons[index].name = event.target.value;
    this.setState({ persons: persons })
  }

  render() {
    const style = {
      backgroundColor : 'white',
      padding: '8px 16px'
    }
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <StyleRoot>
          <div>
            {
              this.state.persons.map((person,index) => {
                return <Person name={person.name} age={person.age} key={person.id} click={() => this.removePersonHandler(index)} change={(event) => this.changeNameHandler(event, person.id)} > </Person>
              })
            }
          </div>
        </StyleRoot>
        )
      }

    return (
      <div className="App">
          <h1> Hello</h1>
          <button style={style} onClick={this.toogleDisplayHandler} >Toogle Persons</button>
          { persons }
      </div>
    );
  }
}

export default Radium(App);
