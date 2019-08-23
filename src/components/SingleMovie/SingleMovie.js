import React from 'react';
import { Link } from "react-router-dom";

import "./SingleMovie.css";

function SingleMovie(props) {
    return (
        <div className="rmdb-grid-element">
            <div className="rmdb-moviethumb">
                <Link to={`/${props.movie.id}`}>
                    <img src={`http://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
                            alt="moviethumb"/>
                </Link>
            </div>
        </div>
    );
}

export default SingleMovie;