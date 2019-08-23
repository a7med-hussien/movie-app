import React from "react";

import SingleActor from "./../SingleActor/SingleActor";

function Actors(props) {

    let actors = props.actors ? props.actors.map((actor, index) => {
        return <SingleActor info={actor} key={index} />
    }) : null;


    return (
        <div className="rmdb-movie-grid">
                <div className="rmdb-grid">
                    <h1>Actors</h1>
                    <div className="rmdb-grid-content">
                        {actors}
                    </div>
                </div>
            </div>
    );
}

export default Actors;