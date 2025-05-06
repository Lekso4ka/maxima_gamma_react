import React, {useState, useEffect} from "react";
import {getRandom} from "../../utils/functions"


export const Card2 = ({cardSt}) => {
    const [color, setColor] = useState("rgb(80,80,80)")
    
    const colorHandler = () => {
        const red = getRandom(256)
        const green = getRandom(256)
        const blue = getRandom(256)
        const clr = `rgb(${red},${green},${blue})`
        console.log(clr)
        setColor(clr)
    }


    useEffect(() => {
        colorHandler()
    }, [])

    
    return <div 
        style={{
            ...cardSt,
            userSelect: "none",
            backgroundColor: color
        }}
        onClick={colorHandler}
    >
        {color}
    </div>
}