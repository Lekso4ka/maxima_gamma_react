import React, {useContext, useState, useEffect} from "react";
import {PersonVideo, BoxArrowLeft} from "react-bootstrap-icons";
import {Link, NavLink} from "react-router"

import Ctx from "../../context";
import "./index.scss";

export const Header = () => {
    const [isLogin, setIsLogin] = useState(false)
    const { setActiveModal, user, setUser, setToken, token } = useContext(Ctx)
    

    useEffect(() => {
        if (user && token) {
            setIsLogin(true)
        }
    }, [user, token])

    const logout = () => {
        setIsLogin(false)
        setUser(null)
        setToken(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }
    
    return <header>
        <div className="logo">MyPrettyPets</div>
        <nav>
            <NavLink to="/">Главная</NavLink>
            {user && <NavLink to="/add">Добавить питомца</NavLink>}
        </nav>
        {isLogin
            ? <div className="user">
                <BoxArrowLeft onClick={logout}/>
                {user}
            </div>
            : <PersonVideo onClick={() => setActiveModal(true)}/>
        }
    </header>
}