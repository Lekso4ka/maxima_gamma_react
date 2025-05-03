import React, {useState} from "react";
import "./style.scss";

export const Pets = () => {
    const [name, setName] = useState("");
    const [arr, setArr] = useState(["Мурзик", "Василий"])

    const addHandler = () => {
        // let pets = arr
        // pets.push(name)
        // setArr(pets)
        setArr((prev) => {
            prev.push(name)
            return prev;
        })

        setName("")
    }

    const delHandler = (index) => {
        setArr((prev) => {
            const newArr = prev.filter((el, i) => i !== index)
            return newArr;
        })
    }

    return <div className="pets-wrapper">
        <label>
            <span>Введите имя питомца</span>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={addHandler}>Добавить питомца</button>
        </label>
        <div className="pets-block">
            {arr.map((el,i) => <div 
                className="pets-block__card"
                key={i}
            >
                {el}
                <div 
                    className="close"
                    onClick={() => delHandler(i)}
                />
            </div>)}
        </div>
    </div>
}