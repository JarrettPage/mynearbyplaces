import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Login(props) {
    const history = useHistory();
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');

    let loginSubmit = () => {
        if(user.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0){
            return;
        }
        props.onLoggedIn(user);
        history.push('/');
    }

    let onNameChange = (event) => {
        setUser(event.target.value);
    }

    let onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    let onPasswordChange = (event) => {
        setPass(event.target.value);
    }

    return (
        <Form onSubmit={loginSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Username</Form.Label>
                <Form.Control type="user" placeholder="Enter username" onChange={onNameChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={onPasswordChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    );
}

export default Login;