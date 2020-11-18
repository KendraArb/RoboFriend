import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { rootReducers } from './reducers';
import { createLogger } from 'redux-logger';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';

import 'tachyons';
import './assets/css/index.css';

import App from './containers/App';

const logger = createLogger();
const store = createStore(rootReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
