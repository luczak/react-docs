import React, { Component } from 'react';
import "./filterable-product-table.css";
import { SearchBar } from "./search-bar.js";
import { ProductTable } from "./product-table/product-table.js";

export class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPhrase: '',
            hideEmpty: false,
            filtered: props.products,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        const value = target.name === 'hideEmpty' ? target.checked : target.value;
        this.setState({ [target.name]: value }, () => {
            const phrase = this.state.searchPhrase.toLowerCase().trim();
            const filteredByName = this.props.products.filter(p => p.name.toLowerCase().includes(phrase));
            const filtered = this.state.hideEmpty ? filteredByName.filter(p => p.stocked) : filteredByName;
            this.setState({ filtered });
        })
    }

    render() {
        return (
            <div className="filterable-product-table">
                <SearchBar
                    searchPhrase={this.state.searchPhrase}
                    hideEmpty={this.state.hideEmpty}
                    onChange={this.handleChange}
                />
                <ProductTable products={this.state.filtered}/>
            </div>
        );
    }
}