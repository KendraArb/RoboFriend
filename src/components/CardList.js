import { Component } from 'react';
import Card from './Card';

class CardList extends Component {
	render() {
		return (
			<div>
				{this.props.robots.map(robot => {
					return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />;
				})}
			</div>
		);
	}
}

export default CardList;
