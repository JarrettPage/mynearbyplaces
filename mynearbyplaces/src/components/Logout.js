import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

function Logout(props) {
    const history = useHistory();

    let logOff = () => {
        localStorage.removeItem('username');
        props.onLoggedOut();
        history.push('/');
    }

    let cancel = () => {
        history.push('/');
    }

    return(
        <Form>
            <Form.Label>Are you sure you want to log out?</Form.Label>
            <Button onClick={logOff}>
                Yes
            </Button>
            <Button onClick={cancel}>
                Cancel
            </Button>
        </Form>
    );
}

export default Logout;