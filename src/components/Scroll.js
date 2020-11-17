import { Component } from 'react';
import '../assets/css/Scroll.css'

class Scroll extends Component {
	render() {
		return (
			<div style={{ overflowY: 'scroll', height: '100vh' }} className="scroll">
				{this.props.children}
			</div>
		);
	}
}

export default Scroll;
