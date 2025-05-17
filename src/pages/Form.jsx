import React, {useState, useEffect, useContext} from "react";
import {
    useNavigate
} from "react-router"


import {
    Container, Row, Col,
    FormControl, FormSelect, FormCheck, Button
} from "react-bootstrap"
import Ctx from "../context";

/*
      "type": "собака / кошка / хомяк / попугай / лошадь / змея",
      "gender": "Самка / Самец (female/male)"

*/

export const Form = () => {
    const [body, setBody] = useState({
        name: "",
        type: "parrot",
        breed: "",
        gender: "male",
        age: 0,
        image: "",
        description: ""
    })
    const {api} = useContext(Ctx)
    const navigate = useNavigate()


    const updVal = (key, val) => {
        setBody(prev => ({...prev, [key]: val}))
    }

    const formHandler = (e) => {
        e.preventDefault()
        console.log(body)
        api.addPet(body)
            .then(data => {
                if (data.msg) {
                    alert(data.msg)
                } else {
                    navigate("/")
                }
            })
    }

    return <Container fluid={true}>
        <Row>
            <Col xs={12}>
                <h1>Добавить питомца</h1>
            </Col>
            <Col xs={12}>
                <form onSubmit={formHandler}>
                    <Row className="g-3">
                        <Col xs={12} md={6}>
                            <FormControl 
                                type="text"
                                placeholder="Имя"
                                value={body.name}
                                onChange={(e) => updVal("name", e.target.value)}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <FormSelect
                                defaultValue={body.type}
                                onChange={(e) => updVal("type", e.target.value)}
                            >
                                <option value="dog">Собака</option>
                                <option value="cat">Кошка</option>
                                <option value="parrot">Попугай</option>
                                <option value="hamster">Хомяк</option>
                                <option value="snake">Змея</option>
                                <option value="horse">Лошадь</option>
                            </FormSelect>
                        </Col>
                        <Col xs={12} md={6}>
                            <FormControl 
                                type="text"
                                placeholder="Порода"
                                value={body.breed}
                                onChange={(e) => updVal("breed", e.target.value)}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <FormControl 
                                type="url"
                                placeholder="Изображение"
                                value={body.image}
                                onChange={(e) => updVal("image", e.target.value)}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <FormControl 
                                type="number"
                                placeholder="Возраст"
                                min={0}
                                max={99}
                                value={body.age}
                                onChange={(e) => updVal("age", e.target.value)}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <FormCheck 
                                inline
                                label="м"
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                                checked={body.gender === "male"}
                                onChange={e => updVal("gender", e.target.value)}
                            />
                            <FormCheck 
                                inline
                                label="ж"
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                checked={body.gender === "female"}
                                onChange={(e) => updVal("gender", e.target.value)}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <FormControl 
                                as={"textarea"}
                                value={body.description}
                                onChange={(e) => updVal("description", e.target.value)}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <Button variant="secondary" type="submit">Добавить</Button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    </Container>
}