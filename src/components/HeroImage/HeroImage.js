import React from "react";

import './HeroImage.css';

function HeroImage(props) {
    return (

        props.hero
        ?
        <div className="rmdb-heroimage" style={{
                background: `linear-gradient(rgba(0, 0, 0, 0) 39%, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%), url('http://image.tmdb.org/t/p/w1280/${props.hero.backdrop_path}'), rgb(28, 28, 28)`
            }}>
            <div className="rmdb-heroimage-content">
                <div className="rmdb-heroimage-text">
                    <h1>{props.hero.title}</h1>
                    <p>{props.hero.overview}</p>
                </div>
            </div>
        </div>
        :
        null
    )
}


export default HeroImage;