import { combineReducers } from 'redux';
import { CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from './constants';

const initialState = {
	search: { searchField: '' },
	robots: { robots: [], isPending: true, error: '' },
};

const reducers = {
	searchRobots: (state = initialState.search, action = {}) => {
		switch (action.type) {
			case CHANGE_SEARCH_FIELD:
				return { ...state, searchField: action.payload };
			default:
				return state;
		}
	},
	requestRobots: (state = initialState.robots, action = {}) => {
		switch (action.type) {
			case REQUEST_ROBOTS_PENDING:
				return { ...state, isPending: true };
			case REQUEST_ROBOTS_SUCCESS:
				return { ...state, robots: action.payload, isPending: false };
			case REQUEST_ROBOTS_FAILED:
				return { ...state, error: action.payload, isPending: false };
			default:
				return state;
		}
	},
};

export const rootReducers = combineReducers(reducers);
