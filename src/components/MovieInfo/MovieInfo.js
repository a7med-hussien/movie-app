import React, { Component } from "react";

import axios from "axios";

import { APIKEY, APILINK } from "./../../config";

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
        axios.get(`${APILINK}movie/${movieId}?api_key=${APIKEY}&language=en-US`)
            .then(response => {
                this.setState({
                    movieInfo: response.data
                });
            })
    }


    getMovieActors = () => {
        const movieId = this.props.match.params.movieId;
        axios.get(`${APILINK}movie/${movieId}/credits?api_key=${APIKEY}`)
            .then(response => {
                this.setState({
                    actors: response.data.cast
                });
            });
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