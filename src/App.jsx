import React from "react";
import News from "./components/News/News";
import ColorCard from "./components/ColorCard";


const App = () => {
    return <div className="wrapper">
        <header/>
        <section>
            <News/>
            <ColorCard/>
        </section>
        <footer/>
    </div>
}


export default App;