import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Table from 'react-bootstrap/Table';
//import Figure from 'react-bootstrap/Figure';
//import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import businesses from '../data';
import api from '../api';

function Home(){
    //const history = useHistory();
    const [business, setBusiness] = useState('');
    const [location, setLoc] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [places, setPlaces] = useState([]);

    let searchSubmit = () => {
        api.searchPlaces(business, location)
        .then(x => setSearchResult(x))
        .catch(e => console.log(e));
    }

    let onBusinessChange = (event) => {
        setBusiness(event.target.value);
    }

    let onLocationChange = (event) => {
        setLoc(event.target.value);
    }

    function deleteBusiness(event, index){
        businesses.splice(index, 1);
        setDeleted(true);
        event.preventDefault();
    }

    function updateInfo(event, businessName){
        let x = businesses.find(b => b.name === businessName);
        if(x){
            x.name = event.target.newName.value;
            x.location = event.target.newLoc.value;
        }
        setUpdated(true);
        event.preventDefault();
    }

    let formatReview = (review) => {
        let s = review.comment;
        if(review.rating != null){
            s = s + ' ' + review.rating + ' ';
        }
        if(review.customer != null){
            s = s + ' ' + review.customer;
        }
        return s;
    }
    /*
    useEffect(() => {
        if(places.length === 0) {
            api.getPlaces()
            .then(x => setPlaces(x))
            .catch(e => console.log(e));
        }
    })
    */
    return (
        <div>
        <Form onSubmit={searchSubmit}>
            <h2>Search for a business near you!</h2>
            <Form.Row>
                <Col>
                    <Form.Control placeholder="Business" onChange={onBusinessChange}/>
                </Col>
                <Col>
                    <Form.Control placeholder="Location" onChange={onLocationChange} />
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Col>
            </Form.Row>
            <h3>Know of a business we don't? <Link to="/add">Click here.</Link></h3>
        </Form>
        {searchResult.map((result, index) => 
            <Card style={{ width: '18rem' }}>
                <Card.Header>{result.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{result.location}</Card.Title>
                    {result.reviews.filter(x => x.comment != null).map(r => 
                        <Card.Text>{formatReview(r)}</Card.Text>)}
                    <Form onSubmit={(event) => updateInfo(event, result.name)}>
                        <h4>If there is something wrong with the information, please fix it.</h4>
                        <Form.Control placeholder="New Name" name="newName" />
                        <Form.Control placeholder="New Location" name="newLoc" />
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                    <h4>If this doesn't exist anymore, then delete it.</h4>
                    <Button variant="primary" onClick={(event) => deleteBusiness(event, index)}>
                        Delete
                    </Button>
                </Card.Body>
            </Card>)}
        </div>
    );
}

export default Home;