import React, {useState, useEffect } from "react";
import {useParams} from "react-router";

import { useSelector } from "react-redux";
import {
    Container,
    Row,
    Col, 
    Image,
    Badge,
    Alert
} from "react-bootstrap"

export const Pet = () => {
    const [pet, setPet] = useState(null)
    const {id} = useParams()
    const {pets} = useSelector(state => state.pets)

    useEffect(() => {
        if (pets.length) {
            setPet(pets.filter(p => p.id === id)[0])
            console.log(pets.filter(p => p.id === id)[0])
        }
    }, [pets])

    return <Container>
        {pet ? <Row className="g-5">
            <Col xs={12} md={6}>
                <Image src={pet.image} style={{width: "100%"}}/>
            </Col>
            <Col xs={12} md={6}>
                <Row>
                    <Col xs={12}>{pet.name} <Badge bg={pet.gender === "Самка" ? "danger" : "info"}>{pet.type}</Badge></Col>
                    <Col xs={12}>{pet.breed || <Alert>Нет породы</Alert>}</Col>
                    <Col xs={12}>{pet.description}</Col>
                </Row>
            </Col>
            
        </Row> 
        : <Alert>Тут нет питомца</Alert>}
    </Container>
}