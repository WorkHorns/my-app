import React from "react";

import './search-panel.css';

//Панель поиска
const SearchPanel = () => {
    return (
        <input 
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
        />
    )
}

export default SearchPanel;