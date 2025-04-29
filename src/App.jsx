import React from "react";

const arr = [0,1,2,undefined,4,2]
import Card from "./components/Card"

const App = () => {
    return <div className="card-block">
        {arr.map((n, i) => <Card num={n} key={i}/>)}
    </div>
}


export default App;