// Жизненный путь компонента
// https://vk.com/@frontend_practice-zhiznennyi-cikl-komponenta-react

import React from "react";
import { createRoot } from "react-dom/client";

import "./index.scss"
import App from "./App";

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
root.render(<App/>)
