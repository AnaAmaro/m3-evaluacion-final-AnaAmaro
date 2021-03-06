import React from 'react';
import './App.css';
import getData from './api/Api';
import logo from './images/Rickandmortylogo.png';
import Home from './components/Home';
import CharacterDetail from './components/CharacterDetail';
import { Switch, Route } from 'react-router-dom';

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
		this.setState({
			filter: characterFilter
		});
	}

	render() {
		charactersFilter = this.state.rickandmorty.filter(characters => {
			return characters.name
				.toUpperCase()
				.includes(this.state.filter.toUpperCase());
		});

		return (
			<div className='app'>
				<h1 className='title'>
					<img className='title__img' src={logo} alt='rickandmorty' />
				</h1>

				<Switch>
					<Route
						exact
						path='/'
						render={() => {
							return (
								<Home
									filter={this.state.filter}
									handleFilter={this.handleFilter}
									characters={charactersFilter}
								/>
							);
						}}
					/>
					<Route
						path='/character__detail/:characterId'
						render={routerProps => {
							return (
								<CharacterDetail
									routerProps={routerProps}
									characters={charactersFilter}
								/>
							);
						}}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
