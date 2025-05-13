import React, {useState, useEffect, useContext} from "react";
import News from "../components/News/News"
import Ctx from "../context";

export const Home = () => {
    return <>
        <h1>Главная страница</h1>
        <News/>
    </>
}