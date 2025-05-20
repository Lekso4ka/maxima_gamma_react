import React, {useState, useEffect, useContext} from "react";
import "./style.scss";
import Ctx from "../../context";
import { useSelector, useDispatch } from "react-redux";

import {initPets, delPet} from "../../store/Pets";

let store = localStorage.getItem("pets");
if (!store) {
    store = []
} else {
    store = JSON.parse(store)
}

// store = "[]"

export const Pets = () => {
    const [name, setName] = useState("");
    // const [arr, setArr] = useState(store);
    const {pets} = useSelector(state => state.pets)
    const {api, setUser, setToken} = useContext(Ctx)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(pets)
    }, [pets])
    

    useEffect(() => {
        if (api && !pets.length) {
            api.getPets()
                .then(({data, msg})=> {
                    if (msg === "Необходима повторная авторизация") {
                        setUser(null);
                        setToken(null);
                        localStorage.clear()
                    } else {
                        if (data) {
                            dispatch(initPets(data))
                        }
                    }
                })
        }
    }, [api, pets])


    const delHandler = (id) => {
        api.delPet(id)
            .then((d) => {
                if (!d.err) {
                dispatch(delPet(id))
                }
            })
    }

    return <div className="pets-wrapper">
        {/* <label>
            <span>Введите имя питомца</span>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={addHandler}>Добавить питомца</button>
        </label> */}
        <div className="pets-block">
            {pets?.map((el) => <div 
                className="pets-block__card"
                key={el.id}
            >
                <div className="pic" style={{backgroundImage: `url(${el.image})`}}/>
                <h3>{el.name}</h3>
                <p>{el.description}</p>
                <span>{el.type}</span>
                <div 
                    className="close"
                    onClick={() => delHandler(el.id)}
                />
            </div>)}
        </div>
    </div>
}