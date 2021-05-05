import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BoilingCalculator } from "./boiling-calculator/calclulator.js";

function renderApp() {
    const app = (
        <StrictMode>
            <BoilingCalculator />
        </StrictMode>
    );
    const root = document.getElementById('root');
    ReactDOM.render(app, root);
}

renderApp();
reportWebVitals();
