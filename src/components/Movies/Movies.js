import React from "react";

import "./Movies.css";

import SingleMovie from "./../SingleMovie/SingleMovie";
import LoadMore from "./../LoadMore/LoadMore";

function Movies(props) {

    let movies = props.movies.map((movie, index) => {
        return <SingleMovie key={index} movie={movie} />
    });

    return (
        <div className="rmdb-home-grid">
            <div className="rmdb-grid">
                <h1>Popular Movies</h1>
                <div className="rmdb-grid-content">
                    { movies.length > 0 ? movies : '' }
                </div>
            </div>

            <LoadMore />
        </div>
    );
}

export default Movies;