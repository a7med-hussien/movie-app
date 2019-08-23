import React from "react";

import "./Search.css";

function Search() {
    return (
        <div className="rmdb-searchbar">
            <div className="rmdb-searchbar-content">
                <span aria-hidden="true" className="fa fa-search fa-2x rmdb-fa-search"></span>
                <input type="text" className="rmdb-searchbar-input" placeholder="Search" />
            </div>
        </div>
    );
}

export default Search;