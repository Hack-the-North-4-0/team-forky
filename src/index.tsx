import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// @ts-ignore
import { initAll } from '../node_modules/govuk-frontend'

initAll();
ReactDOM.render(<App />, document.getElementById('root'));
