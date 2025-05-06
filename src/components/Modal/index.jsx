import React from "react";
import {X} from "react-bootstrap-icons";

import "./index.scss";

export const Modal = ({
    isActive, 
    openModal,
    children
}) => {
    return <div class="modal" style={{
        display: isActive ? "flex" : "none"
    }}>
        <div className="modal__container">
            <button 
                className="modal__close"
                onClick={() => openModal(false)}
            >
                <X/>
            </button> 
            { children }
        </div>
    </div>

}