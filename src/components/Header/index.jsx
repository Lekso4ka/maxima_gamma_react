import React from "react";
import {PersonVideo} from "react-bootstrap-icons";

import "./index.scss"

export const Header = ({
    openModal
}) => {
    return <header>
        <div className="logo">MyPrettyPets</div>
        <nav>
            <a href="">link</a>
            <a href="">link</a>
            <a href="">link</a>
            <a href="">link</a>
        </nav>
        <PersonVideo onClick={() => openModal(true)}/>
    </header>
}