// Жизненный путь компонента
// https://vk.com/@frontend_practice-zhiznennyi-cikl-komponenta-react

import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, HashRouter } from "react-router";

import "./index.scss"
import App from "./App";
import {Provider} from "./context"
import { Provider as ReduxProvider } from 'react-redux'
import store from "./store";
/*
    "Мои питомцы"
    1) Научиться создавать компоненты с карточками
        - новостей из шаблона
        - питомцами из шаблона
    2) Научиться получать информацию при помощи API (fetch)
    3) Регистрация и авторизация
    4) Создать страницу для добавления своего питомца и его фото
*/

const root = createRoot(document.getElementById("root"));
root.render(<ReduxProvider store={store}>
    <BrowserRouter>
        <Provider>
            <App/>
        </Provider>
    </BrowserRouter>
</ReduxProvider>)
