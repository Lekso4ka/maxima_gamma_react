import React, {createContext, useState} from "react";

const Ctx = createContext({})


export const Provider = ({children}) => {
    const [activeModal, setActiveModal] = useState(false)
    return <Ctx.Provider
        value={{
            activeModal,
            setActiveModal
        }}
    >
        {children}
    </Ctx.Provider>
}

export default Ctx;