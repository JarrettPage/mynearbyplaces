import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavigationBar(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Yelp Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/reviews">Reviews</Link></Nav.Link>
                    <Nav.Link>{props.username !== "" ? (<Link to="/logout">{props.username}, Logout</Link>) : <Link to="/login">Login</Link>}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;