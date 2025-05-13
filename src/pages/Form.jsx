import React, {useState, useEffect, useContext} from "react";

import Ctx from "../context";

/*
      "type": "собака / кошка / хомяк / попугай / лошадь / змея",
      "gender": "Самка / Самец (female/male)"

*/

export const Form = () => {
    const [body, setBody] = useState({
        name: "",
        type: "dog",
        breed: "",
        gender: "male",
        age: 0,
        image: "",
        description: ""
    })
    const {api} = useContext(Ctx)


    const updVal = (key, val) => {
        setBody(prev => ({...prev, [key]: val}))
    }

    const formHandler = (e) => {
        e.preventDefault()
        console.log(body)
    }

    return <>
        <h1>Добавить питомца</h1>
        <form onSubmit={formHandler} style={{
            display: "grid",
            gap: 20,
            width: 300
        }}>
            <input 
                type="text"
                placeholder="Имя"
                value={body.name}
                onChange={(e) => updVal("name", e.target.value)}
            />
            <input 
                type="text"
                placeholder="Порода"
                value={body.breed}
                onChange={(e) => updVal("breed", e.target.value)}
            />
            <input 
                type="number"
                placeholder="Возраст"
                min={0}
                max={99}
                value={body.age}
                onChange={(e) => updVal("age", e.target.value)}
            />
            <input 
                type="url"
                placeholder="Изображение"
                value={body.image}
                onChange={(e) => updVal("image", e.target.value)}
            />
            <textarea 
                value={body.description}
                onChange={(e) => updVal("description", e.target.value)}
            />
            <button>Добавить</button>
        </form>
    </>
}