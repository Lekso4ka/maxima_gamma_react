import React, {useContext} from "react";
import {X} from "react-bootstrap-icons";
import Ctx from "../../context"

import "./index.scss";

export const Modal = ({
    children
}) => {
    const {
        activeModal,
        setActiveModal
    } = useContext(Ctx)

    return <div className="modal" style={{
        display: activeModal ? "flex" : "none"
    }}>
        <div className="modal__container">
            <button 
                className="modal__close"
                onClick={() => setActiveModal(false)}
            >
                <X/>
            </button> 
            { children }
        </div>
    </div>

}