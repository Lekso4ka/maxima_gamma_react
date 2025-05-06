import React, {useEffect, useState} from "react";

import {getColor} from "../../utils/functions"

export const Card1 = ({cardSt}) => {
    // const [переменная, функция, которая будет обновлять переменную] = useState(изначальное значение переменной);
    const [num, updNum] = useState(10);
    // const [num, setNum] = useState(10);
    const [border, setBorder] = useState("inherit")

    useEffect(() => {
        setBorder(getColor())
    }, [num])


    return <div style={{
            ...cardSt,
            borderWidth: 5,
            borderColor: border
        }}>
        <button 
            onClick={(e) => updNum(num-1)}
            disabled={num === 0}
            >-</button>
        {num}
        {/* <button onClick={(e) => {
            console.log(num)
            num = num+1
        }}>+</button> */}
        <button 
            onClick={(e) => updNum(num+1)}
            disabled={num === 20}
        >+</button>
    </div>

}