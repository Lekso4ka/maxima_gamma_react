import React, {useState} from "react";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";

/*
    Сделать в карточке кликер с кнопками + и -

    state (состояние) - динамически изменяемые данные при которых необходимо будет перерисовать компонент
*/

const ColorCard = () => {
    const st = {
        wrapper: {
            display: "flex",
            gap: "1rem"
        },
        card: {
            padding: 20,
            border: "1px solid silver",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            gap: 10
        }
    }

    return <div style={st.wrapper}>
        <Card1 cardSt={st.card}/>
        <Card2 cardSt={st.card}/>
    </div>

}

export default ColorCard;

// export default () => {}
// export const ColorCard = () => {}
