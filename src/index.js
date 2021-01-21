import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * Render React App
 */
render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
