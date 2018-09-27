import React from 'react';
import ReactDOM from 'react-dom';
import player from './state/player';

import './index.css';

import Root from './Root';

// const store = new Store();
ReactDOM.render(<Root store={player}/>, document.getElementById('root'));
