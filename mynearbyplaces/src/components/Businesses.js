//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
//import { useHistory } from 'react-router-dom';
//import { useState } from 'react';

function Businesses() {
    return (
        <Card>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/330px-Good_Food_Display_-_NCI_Visuals_Online.jpg" />
            <Card.Body>
                <Card.Title>Name of Business</Card.Title>
                <Card.Text>Description of the place or a review will go here.</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="address">Address will go here.</small>
            </Card.Footer>
        </Card>
    )
}

export default Businesses;