import React from "react";
import News from "./components/News/News";
import ColorCard from "./components/ColorCard";
import {Pets} from "./components/Pets"


const App = () => {
    return <div className="wrapper">
        <header/>
        <section>
            <Pets/>
            <News/>
            <ColorCard/>
        </section>
        <footer/>
    </div>
}


export default App;