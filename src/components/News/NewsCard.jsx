import React from "react";

import images from "../../assets/images"

export const Card = ({
    name,
    description,
    pic
}) => {
    return <div className="news-block__card">
        <h3>{name}</h3>
        <img src={images[pic]} alt={name}/>
        <p>{description}</p>
    </div>
}