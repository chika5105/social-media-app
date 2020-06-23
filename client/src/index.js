import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/App';
import './style.scss';

hydrate(<App />, document.getElementById('root'));
