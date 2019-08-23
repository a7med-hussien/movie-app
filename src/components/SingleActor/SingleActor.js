import React from "react";

import "./SingleActor.css";

function SingleActor(props) {

    let image = props.info.profile_path ? <img
                    src={`http://image.tmdb.org/t/p/w154/${props.info.profile_path}`}
                    alt="actorthumb"/>
                : <img src="https://image.shutterstock.com/image-vector/no-image-available-sign-internet-600w-261719003.jpg" alt="noImage" />;
    return (
        <div className="rmdb-grid-element">
            <div className="rmdb-actor">
                {image}
                <span className="rmdb-actor-name">{props.info.name}</span>
                <span className="rmdb-actor-character">{props.info.character}</span>
            </div>
        </div>
    )
}

export default SingleActor;