
class Api {
    constructor(t) {
        this.path = "https://apijs.ru/api/v2";
        this.token = t
    }
    auth(body, flag) {
        return fetch(`${this.path}/${flag ? "auth" : "register"}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
    }
    getPets() {
        console.log("hello")
        if (this.token) {
            return fetch(`${this.path}/pets`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${this.token}`
                }
            })
            .then(res => res.json())
        } else {
            return fetch(`${this.path}/pets`)
                .then(res => res.json())
        }
    }
    addPet(body) {

    }
    showPet(id) {

    }
}

export default Api;