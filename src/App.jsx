import React from "react";
import News from "./components/News/News";
import ColorCard from "./components/ColorCard";
import {Pets} from "./components/Pets"

import {Header} from "./components/Header"
import { Modal } from "./components/Modal";

const App = () => {
    return <div className="wrapper">
        <Header/>
        <section>
            <Pets/>
            <News/>
            <ColorCard/>
        </section>
        <footer/>
        <Modal>
            <h2>Это модалка</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora iusto repellendus nostrum cumque iste, deleniti magnam consequatur ab culpa similique?</p>
        </Modal>
    </div>
}


export default App;