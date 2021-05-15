import React, { Component } from 'react';
import './App.css';
import './component/card-list/card-list.component'
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters : users }));
  }

  handleChange = e => {
    this.setState({searchField: e.target.value})
  };

  render(){
    const { monsters, searchField } = this.state
    const filterMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      
      <div className="App">
        <h1>MONSTER ROLODEX</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={ this.handleChange }
        />

        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}


export default App;
