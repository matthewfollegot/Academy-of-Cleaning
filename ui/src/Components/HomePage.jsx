import React from 'react';
import { Button, Jumbotron, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <React.Fragment>
            <Jumbotron fluid>
                <Container fluid>
                    <h1>Academy of Cleaning</h1>
                    <p>The academy of cleaning is a platform that advocates for and empowers cleaners to find new business through leveraging the power of social proof!</p>
                </Container>
            </Jumbotron>
            <div className = "buttons">
                <Link to="/createProfile">  <Button color="primary onClick{() => }">Sign-Up</Button> </Link>
                <Button color="secondary">Login</Button>
            </div>
        </React.Fragment>
    );
}


export default HomePage; 
