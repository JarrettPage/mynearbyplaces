import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import businesses from '../data';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

function Review(){
    const [business, setBusiness] = useState('');
    const [location, setLoc] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [reviewAdded, setReviewAdded] = useState(false);

    let searchSubmit = () => {
        let x = businesses;
        if(business.length > 0){
            x = businesses.filter(b => b.name.includes(business));
        }
        if(location.length > 0){
            x = x.filter(b => b.location.includes(location));
        }
        setSearchResult(x);
    }

    let onBusinessChange = (event) => {
        setBusiness(event.target.value);
    }

    let onLocationChange = (event) => {
        setLoc(event.target.value);
    }

    let addReview = (event, businessName) => {
        let x = businesses.find(b => b.name === businessName);
        if(x){
            x.reviews.push(event.target.review.value);
        }
        setReviewAdded(true);
        event.preventDefault();
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
                        <Form.Control placeholder="Add a Review" name="review" />
                        <Button variant="primary" type="submit">
                            Add Review
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    {result.reviews.map(r => 
                        <Card.Text>{r}</Card.Text>)}
                </Card.Footer>
        </Card>)}
        </div>
    )
}

export default Review;