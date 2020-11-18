import { connect } from 'react-redux';
import React, { Component } from 'react';
import { setSearchfield, requestRobots } from '../actions';

import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';

import '../assets/css/App.css';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSearchChange: event => dispatch(setSearchfield(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
	};
};

class App extends Component {
	componentDidMount() {
		this.props.onRequestRobots();
	}
	render() {
		const { robots, searchField, onSearchChange, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField);
		});
		return (
			<div className="tc">
				<h1 className="f1">RoboFriends</h1>
				<SearchBox search={onSearchChange} />
				<Scroll>
					{isPending ? (
						<h1>Loading</h1>
					) : (
						<ErrorBoundary>
							<CardList robots={filteredRobots} />;
						</ErrorBoundary>
					)}
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
