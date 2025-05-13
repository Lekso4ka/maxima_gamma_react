import React, {useState, useEffect, useContext} from "react";
import Ctx from "../../context"

import "./index.scss";

export const UserForm = () => {
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPwd, setCPwd] = useState("")
    const [isAuth, setIsAuth] = useState(true);
    const [confirm, setConfirm] = useState(false);


    const [alert, setAlert] = useState(false)


    const clearForm = () => {
        setLogin("")
        setPassword("")
        setEmail("")
        setCPwd("")
    }

    const {setActiveModal, setUser, setToken, api} = useContext(Ctx)

    const sendForm = (e) => {
        e.preventDefault();
        const body = { 
            password
        }
        if (!isAuth) {
            body.email = email
            body.login = login
        } else {
            body.user = login
        }

        api.auth(body, isAuth)
            .then(data => {
                if (data.err) {
                    window.alert(data.msg)
                } else {
                    clearForm()
                    localStorage.setItem("user", JSON.stringify(data.user))
                    localStorage.setItem("token", data.token)
                    setActiveModal(false)
                    setUser(data.user.login)
                    setToken(data.token)
                }
                
            })

        
    }


    useEffect(() => {
        if (!isAuth && password !== cPwd) {
            setAlert(true)
        } else {
            setAlert(false)
        }
    }, [password, cPwd])


    useEffect(() => {
        if (isAuth) {
            setConfirm(!!login && !!password)
        } else {
            setConfirm(!!login && !!password && !!email)
        }
    }, [login, email, password])


    return <div className="form-wrapper">
        <form 
            className="form"
            onSubmit={sendForm}
        >
            {isAuth 
                ? <h2>Авторизация</h2>
                : <h2>Регистрация</h2>
            }
            <div className="form__row">
                <label htmlFor="login">Введите ваш логин</label>
                <input 
                    type="text" 
                    id="login" 
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
            </div>
            {!isAuth && <div className="form__row">
                <label htmlFor="email">Введите адрес электронной почты</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>}
            <div className="form__row">
                <label htmlFor="password">Введите пароль</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    style={{
                        borderColor: alert ? "red" : "silver"
                    }}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            {!isAuth && <div className="form__row">
                <label htmlFor="confirm_password">Повторите пароль</label>
                <input 
                    type="password" 
                    id="confirm_password" 
                    value={cPwd}
                    style={{
                        borderColor: alert ? "red" : "silver"
                    }}
                    onChange={e => setCPwd(e.target.value)}
                />
            </div>}
            <div className="btn-set">
                <button 
                    type="reset"
                    onClick={clearForm}
                >Очистить</button>
                <button 
                    type="submit"
                    disabled={alert || !confirm}
                >{isAuth ? "Войти" : "Зарегистрироваться"}</button>
            </div>
        </form>
        <button className="btn" onClick={() => setIsAuth(!isAuth)}>
            {isAuth ? "Зарегистрироваться" : "Войти"}
        </button>
    </div>
}