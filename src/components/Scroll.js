import React from 'react';
import '../assets/css/Scroll.css';

const Scroll = props => {
	return (
		<div style={{ overflowY: 'scroll', height: '80vh' }} className="scroll">
			{props.children}
		</div>
	);
};

export default Scroll;
