export const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                name="searchPhrase"
                id="phrase"
                value={props.searchPhrase}
                onChange={props.onChange}
            />
            <br />
            <input
                type="checkbox"
                name="hideEmpty"
                id="hideEmpty"
                value={props.hideEmpty}
                onChange={props.onChange}
            />
            <label htmlFor="hideEmpty">Only show products in stock.</label>
        </div>
    );
}