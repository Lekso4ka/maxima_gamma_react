import React, {useState, useEffect, useContext} from "react";
import News from "../components/News/News"
import Ctx from "../context";
import {Pets} from "../components/Pets"

export const Home = () => {
    return <>
        <News/>
        <Pets/>
    </>
}