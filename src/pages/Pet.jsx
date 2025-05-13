import React, {useState, useEffect, useContext} from "react";
import {useParams} from "react-router";

import Ctx from "../context";

export const Pet = () => {
    const {id} = useParams()

    return <>
        <h1>Страница питомца <span 
            style={{color: "brown"}}
        >{id}</span></h1>
    </>
}