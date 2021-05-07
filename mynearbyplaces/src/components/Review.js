import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import businesses from '../data';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import api from '../api';

function Review(props){
    //let apiHost = 'https://jarrettpage-nearbyplaces-api.herokuapp.com'

    const [business, setBusiness] = useState('');
    const [location, setLoc] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    //const [review, setReview] = useState('');
    //const [reviewAdded, setReviewAdded] = useState(false);

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

    let addReview = (event, businessName) => {
        let username = localStorage.getItem('username');
        api.addReview(businessName, event.target.review.value, event.target.rating.value, username)
        .then(() => {console.log('The review was added.'); searchSubmit()})
        .catch(e => console.log(e));
        //console.log(event.target.rating.value);
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
    

    return (
        <div>
        <Form onSubmit={searchSubmit}>
            <h2>What business do you wish to review?</h2>
            <Form.Row>
                <Col>
                    <Form.Control value={business} placeholder="Business" onChange={onBusinessChange}/>
                </Col>
                <Col>
                    <Form.Control value={location} placeholder="Location" onChange={onLocationChange} />
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Col>
            </Form.Row>
        </Form>
        {searchResult.map(result => 
            <Card>
                <Card.Header>{result.name}</Card.Header>
                <Card.Body>
                    <Card.Text>{result.location}</Card.Text>
                    <Form onSubmit={(event) => addReview(event, result.name)}>
                        <Form.Row>
                            <Col>
                                <Form.Control placeholder="Add a Review" name="review" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Add a Rating" name="rating" />  
                            </Col>
                            <Col>
                                <Button variant="primary" type="submit">
                                    Add Review
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    {result.reviews.filter(x => x.comment != null).map(r => 
                        <Card.Text>{formatReview(r)}</Card.Text>)}
                </Card.Footer>
        </Card>)}
        </div>
    )
}

export default Review;