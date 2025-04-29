import React from "react";
import {
    getRandom
} from "./utils/functions"

const Card = (props) => {
    const n = "000"//getRandom(1000, 100)
    return <div className="card">{props.num || n}</div>
}

const App = () => {
    return <div className="card-block">
        <Card/>
        <Card/>
        <Card num="345"/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card num={1}/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
}


export default App;