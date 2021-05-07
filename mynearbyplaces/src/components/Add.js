//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
//import businesses from '../data';
import api from '../api';

function Add(props) {

    const [name, setName] = useState('');
    const [loc, setLoc] = useState('');
    const [message, setMessage] = useState('');

    let addBusiness = () => {
        //let business = {name: name, location: loc, reviews: []};
        //businesses.push(business);
        let place = {name: name, location: loc};
        api.addPlace(place)
        .then(() => {
            setMessage(`The place ${name} was added.`);
            setName('');
            setLoc('');
        })
        .catch(e => setMessage(`There was a problem adding the place ${name}.`));
    }

    let nameChanged = (event) => {
        setName(event.target.value);
    }

    let locationChanged = (event) => {
        setLoc(event.target.value);
    }

    return (
        <div>
            {message.length !== 0 ? message : ''}
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
        </div>
    )
}

export default Add;