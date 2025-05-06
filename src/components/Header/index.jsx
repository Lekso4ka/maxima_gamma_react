import React, {useContext} from "react";
import {PersonVideo} from "react-bootstrap-icons";

import Ctx from "../../context";
import "./index.scss";

export const Header = () => {
    const { setActiveModal } = useContext(Ctx)
    return <header>
        <div className="logo">MyPrettyPets</div>
        <nav>
            <a href="">link</a>
            <a href="">link</a>
            <a href="">link</a>
            <a href="">link</a>
        </nav>
        <PersonVideo onClick={() => setActiveModal(true)}/>
    </header>
}