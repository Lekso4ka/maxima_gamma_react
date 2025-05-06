import React, {useState, useEffect} from "react";
import "./style.scss";

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
    const [pets, setPets] = useState(null)

    

    useEffect(() => {
        fetch("https://apijs.ru/api/v2/pets")
        .then(res => res.json())
        .then(({data})=> {
            console.log(data)
            setPets(data);
        })
    }, [])

    const addHandler = () => {
        // let pets = arr
        // pets.push(name)
        // setArr(pets)
        setArr((prev) => {
            prev.push(name)
            // localStorage.setItem("pets", JSON.stringify(prev))
            return prev;
        })

        setName("")
    }

    const delHandler = (index) => {
        setPets((prev) => {
            const newArr = prev.filter((el, i) => i !== index)
            localStorage.setItem("pets", JSON.stringify(newArr))
            return newArr;
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