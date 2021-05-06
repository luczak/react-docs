import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FilterableProductTable } from "./filterable-product-table/filterable-product-table.js";
import { productsMock } from "./data/products-mock.js";

function renderApp() {
    const app = (
        <StrictMode>
            <FilterableProductTable products={productsMock}/>
        </StrictMode>
    );
    const root = document.getElementById('root');
    ReactDOM.render(app, root);
}

renderApp();
reportWebVitals();
