//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import businesses from '../data';

function Add() {

    const [name, setName] = useState('');
    const [loc, setLoc] = useState('');

    let addBusiness = () => {
        let business = {name: name, location: loc, reviews: []};
        businesses.push(business);
    }

    let nameChanged = (event) => {
        setName(event.target.value);
    }

    let locationChanged = (event) => {
        setLoc(event.target.value);
    }

    return (
        <Form onSubmit={addBusiness}>
            <h2>What business do you wish to add?</h2>
            <Form.Row>
                <Col>
                    <Form.Control value={name} placeholder="Business Name" onChange={nameChanged} />
                </Col>
                <Col>
                    <Form.Control value={loc} placeholder="Location" onChange={locationChanged} />
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
}

export default Add;