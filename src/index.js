import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import store from './Redux/state';

// export const store = createStore(appReducerFunction);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root')
);
registerServiceWorker();

// 1. Expose the family to the service provider
// Here we will expose the redux STORE, to the react application