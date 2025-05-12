import React from "react";
import News from "./components/News/News";
import ColorCard from "./components/ColorCard";
import {Pets} from "./components/Pets"

import {Header} from "./components/Header"
import { Modal } from "./components/Modal";
import { UserForm } from "./components/UserForm";

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
            <UserForm/>
        </Modal>
    </div>
}


export default App;