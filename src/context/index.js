import React, {createContext, useState} from "react";

const Ctx = createContext({})


export const Provider = ({children}) => {
    const [activeModal, setActiveModal] = useState(false)
    const [user, setUser] = useState("Leksa")

    return <Ctx.Provider
        value={{
            activeModal,
            setActiveModal,
            user,
            setUser
        }}
    >
        {children}
    </Ctx.Provider>
}

export default Ctx;