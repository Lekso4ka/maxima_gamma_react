import React, {createContext, useEffect, useState} from "react";

const Ctx = createContext({})
import Api from "../Api";
let u = localStorage.getItem("user");
if (u !== null) {
    u = JSON.parse(u)
}

export const Provider = ({children}) => {
    const [activeModal, setActiveModal] = useState(false)
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [api, setApi] = useState(null)

    useEffect(() => {
        if (u?.login) {
            setUser(u.login)
        }
        if (token) {
            setApi(new Api(token))
        } else {
            setApi(new Api())
        }
    }, [])

    useEffect(() => {
        if (token) {
            setApi(new Api(token))
        } else {
            setApi(new Api())
        }
    }, [token])

    return <Ctx.Provider
        value={{
            activeModal,
            setActiveModal,
            user,
            setUser,
            api,
            setToken, token
        }}
    >
        {children}
    </Ctx.Provider>
}

export default Ctx;