import React from 'react';

const SearchBox = ({ search }) => {
	return (
		<div className="pa2">
			<label htmlFor="searchbox" className="tracked-mega db mb2 f6 light-green georgia ttu">
				Search Robots
			</label>
			<input id="searchbox" className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search Robots" onChange={search} />
		</div>
	);
};

export default SearchBox;
