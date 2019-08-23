import React from "react";
import { Link } from "react-router-dom";

import "./MovieMasterInfo.css";
import Loader from "../Loader/Loader";

function MovieMasterInfo(props) {
    return (
        props.info
        ?
            <div>
                <div className="rmdb-navigation">
                    <div className="rmdb-navigation-content">
                        <Link to="/">
                            <p>Home</p>
                        </Link>
                        <p>/</p>
                        <p>{props.info.title}</p>
                    </div>
                </div>
                <div className="rmdb-movieinfo"
                    style={{
                        background: `url(http://image.tmdb.org/t/p/w1280/${props.info.backdrop_path})`}}>
                    <div className="rmdb-movieinfo-content">
                        <div className="rmdb-movieinfo-thumb">
                            <div className="rmdb-moviethumb">
                                <img
                                    src={`http://image.tmdb.org/t/p/w500/${props.info.poster_path}`}
                                    alt="moviethumb"/>
                            </div>
                        </div>
                        <div className="rmdb-movieinfo-text">
                            <h1>{props.info.title}</h1>
                            <h3>PLOT</h3>
                            <p>{props.info.overview}</p>
                            <h3>IMDB RATING</h3>
                            <div className="rmdb-rating"><meter min="0" max="100" optimum="100" low="40" high="70"
                                    value="64"></meter>
                                <p className="rmdb-score">6.4</p>
                            </div>
                            <h3>DIRECTOR</h3>
                            <p className="rmdb-director">David Lowery</p>
                        </div><span aria-hidden="true" className="fa fa-film fa-5x fa-film"></span>
                    </div>
                </div>
                <div className="rmdb-movieinfobar">
                    <div className="rmdb-movieinfobar-content">
                        <div className="rmdb-movieinfobar-content-col"><span aria-hidden="true"
                                className="fa fa-clock-o fa-2x fa-time"></span><span className="rmdb-movieinfobar-info">Running
                                time: 1h 33m</span></div>
                        <div className="rmdb-movieinfobar-content-col"><span aria-hidden="true"
                                className="fa fa-money fa-2x fa-budget"></span><span className="rmdb-movieinfobar-info">Budget:
                                $0</span></div>
                        <div className="rmdb-movieinfobar-content-col"><span aria-hidden="true"
                                className="fa fa-ticket fa-2x fa-revenue"></span><span
                                className="rmdb-movieinfobar-info">Revenue: $11,277,120</span></div>
                    </div>
                </div>
            </div>
        :
        <Loader />
    )
}

export default MovieMasterInfo;