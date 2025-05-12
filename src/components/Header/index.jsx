import React, {useContext} from "react";
import {PersonVideo, BoxArrowLeft} from "react-bootstrap-icons";

import Ctx from "../../context";
import "./index.scss";

export const Header = () => {
    const { setActiveModal, user, setUser } = useContext(Ctx)
    
    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }
    
    return <header>
        <div className="logo">MyPrettyPets</div>
        <nav>
            <a href="">link</a>
            <a href="">link</a>
            <a href="">link</a>
            <a href="">link</a>
        </nav>
        {user
            ? <div className="user">
                <BoxArrowLeft onClick={logout}/>
                {user}
            </div>
            : <PersonVideo onClick={() => setActiveModal(true)}/>
        }
    </header>
}