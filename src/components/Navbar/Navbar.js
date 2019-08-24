import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar() {
    return (
        <div className="rmdb-header">
            <div className="rmdb-header-content">
                <Link to="/">
                    <img className="rmdb-logo" src="https://i.imgur.com/0GdlwCQ.png" alt="rmdb-logo" />
                </Link>
                <img className="rmdb-tmdb-logo" src="https://i.imgur.com/lYZGBVp.png" alt="tmdb-logo"/>
            </div>
        </div>
    );
}

export default Navbar;