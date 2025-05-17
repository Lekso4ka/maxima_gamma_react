/*
    Single
    Page
    Application


    https://reactrouter.com/start/modes
*/

import React from "react";
import {Routes, Route} from "react-router";

import {Header} from "./components/Header"
import { Modal } from "./components/Modal";
import { UserForm } from "./components/UserForm";

/*
import { Home } from "./pages/Home";
import { Pet } from "./pages/Pet";
import { Form } from "./pages/Form";
*/

import { Home, Pet, Form } from "./pages";
import "bootstrap/dist/css/bootstrap.css"
const App = () => {
    return <div className="wrapper">
        <Header/>
        <section>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add" element={<Form/>}/>
                {/* 
                    :id - параметр (переменная, которую можно получить из адресной строки браузера)
                    id - любое слово как переменная
                */}
                <Route path="/pet/:id" element={<Pet/>}/>
            </Routes>
        </section>
        <footer/>
        <Modal>
            <UserForm/>
        </Modal>
    </div>
}

export default App;