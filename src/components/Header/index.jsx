import React, {useContext} from "react";
import {PersonVideo, BoxArrowLeft} from "react-bootstrap-icons";
import {Link, NavLink} from "react-router"

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
            <NavLink to="/">Главная</NavLink>
            <NavLink to="/add">Добавить питомца</NavLink>
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