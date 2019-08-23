import React, { Component } from "react";
import axios from 'axios';

import { APIKEY, APILINK } from './../../config';

import HeroImage from './../HeroImage/HeroImage';
import Search from './../Search/Search';
import Movies from './../Movies/Movies';
import Loader from './../Loader/Loader';

import "./Home.css";

class Home extends Component {

    state = {
        movies: null,
        currentPage: 1,
        heroImage: null
    };

    getPopularMovies = () => {
        axios.get(`${APILINK}movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
            .then(response => {
                this.setState({
                    movies: response.data.results,
                    currentPage: response.data.page,
                    heroImage: response.data.results[0]
                })
            });
    }

    componentDidMount() {
        this.getPopularMovies();
    }

    render() {
        return (
            <div className="rmdb-home">
                <HeroImage hero={this.state.heroImage} />

                <Search />

                { !this.state.movies ? <Loader /> : <Movies movies={this.state.movies} /> }
            </div>
        );
    }
}

export default Home;