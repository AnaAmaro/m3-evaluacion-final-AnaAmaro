import React from 'react';
import './App.css';
import getData from './api/Api';
import logo from './images/Rickandmortylogo.png';
import CharaterList from './components/CharacterList';
import CharacterFilter from './components/CharacterFilter';

let charactersFilter = [];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      rickandmorty: [],
      filter: ''
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    getData().then(rickandmorty => {
      this.setState({
        rickandmorty: rickandmorty
      });
    });
  }

  handleFilter(event) {
    const characterFilter = event.target.value;
    this.setState({ filter: characterFilter });
  }

  render() {
    charactersFilter = this.state.rickandmorty.filter(characters => {
      return characters.name.includes(this.state.filter);
    });
    return (
      <div className='app'>
        <h1 className='title'>
          <img src={logo} alt='rickandmorty' />
        </h1>
        <CharacterFilter
          filter={this.state.filter}
          handleFilter={this.handleFilter}
        />
        <CharaterList characters={charactersFilter} />
      </div>
    );
  }
}

export default App;
