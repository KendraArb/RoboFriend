import React, { useState, useEffect } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import '../assets/css/App.css';

function App() {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobots(users))
			.catch(error => console.error(error));
	}, []); 

	const onSearchChange = e => {
		setSearchfield(e.target.value);
	};

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});

	return !robots.length ? (
		<h1>Loading</h1>
	) : (
		<div className="tc">
			<h1 className="f1">RoboFriends</h1>
			<SearchBox search={onSearchChange} />
			<Scroll>
				<ErrorBoundary>
					<CardList robots={filteredRobots} />;
				</ErrorBoundary>
			</Scroll>
		</div>
	);
}

export default App;
