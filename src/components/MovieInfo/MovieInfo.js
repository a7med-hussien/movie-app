import React, { Component } from "react";

// import axios from "axios";
// import { APIKEY, APILINK } from "./../../config";

import MovieMasterInfo from "./../MovieMasterInfo/MovieMasterInfo";
import Actors from "./../Actors/Actors";

import "./MovieInfo.css";

class MovieInfo extends Component {

    state = {
        movieInfo: null,
        actors: null
    }

    getMovieInfo = () => {
        const movieId = this.props.match.params.movieId;
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bf625fc6cd2fdd129acfcec39e2c3fa0&language=en-US`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    movieInfo: response
                });
            });

        // axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=bf625fc6cd2fdd129acfcec39e2c3fa0&language=en-US`)
        //     .then(response => {
        //         this.setState({
        //             movieInfo: response.data
        //         });
        //     });
    }


    getMovieActors = () => {
        const movieId = this.props.match.params.movieId;

        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=bf625fc6cd2fdd129acfcec39e2c3fa0`)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    actors: response.cast
                });
            });

        // axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=bf625fc6cd2fdd129acfcec39e2c3fa0`)
        //     .then(response => {
        //         this.setState({
        //             actors: response.data.cast
        //         });
        //     });
    }

    componentDidMount() {
        this.getMovieInfo();

        this.getMovieActors();
    }

    render() {
        return (
            <div className="rmdb-movie">
                <MovieMasterInfo info={this.state.movieInfo} />

                <Actors actors={this.state.actors} />
            </div>
        );
    }
}

export default MovieInfo;