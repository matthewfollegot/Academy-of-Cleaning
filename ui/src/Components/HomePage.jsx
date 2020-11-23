import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import AuthNav from './auth/AuthNav';
import './App.css';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <React.Fragment>
            <Container>
                <p class="row-buffer">The Academy of Cleaning empowers cleaners like you to find new business.
                <br />Start your application and get your industry standard cleaning certification today!</p>
            </Container>

            <Container>
                <h4 class="row-buffer">Certifications Offered</h4>
                <div class="row">
                    <div class="column">
                        <CardImg  class="image" src="https://media.istockphoto.com/photos/window-cleaning-picture-id162353089?k=6&m=162353089&s=612x612&w=0&h=OcI9R5ilQk_UmgM_kPHg4dCftVIzRsmTIbxJefGPSfM="alt="Windows 101" />
                        <div class="overlay">
                          <div class="text">Windows 101 </div>
                        </div>
                    </div>
                    <div class="column">
                        <CardImg class="image" src="https://media.istockphoto.com/photos/one-man-in-protective-suit-spraying-the-house-and-disinfecting-the-picture-id1212734713?k=6&m=1212734713&s=612x612&w=0&h=q80feozY2WtresZvCMgRlk7OfYbcb1KMYrGHbbgvnMo="alt="Sanitization 101" />
                        <div class="overlay">
                          <div class="text">Sanitation 101 </div>
                        </div>
                    </div>
                    <div class="column">
                        <CardImg class="image" src="https://media.istockphoto.com/photos/woman-mopping-corridor-picture-id591406230?k=6&m=591406230&s=612x612&w=0&h=0ZLygrIeHJFwj9d95GJZImj5SaFT6fuetMlKp-m_lTo=" alt="Mopping 101" />
                        <div class="overlay">
                          <div class="text">Mopping 101 </div>
                        </div>
                    </div>
                    
                </div>
                <div class="row">
                    <div class="column">
                        <CardImg class="image" src="https://media.istockphoto.com/photos/cleaning-the-floor-picture-id578562734?k=6&m=578562734&s=612x612&w=0&h=UvjjCgBaiqHWQfr-a7Zrl43AAhi6Fy3_ZnkGUlP8tGM=" alt="Floor Polishing 101" />
                        <div class="overlay">
                          <div class="text">Floor Polishing 101 </div>
                        </div>
                    </div>
                    <div class="column">
                        <CardImg class="image" src="https://media.istockphoto.com/photos/woman-cleaning-a-corporate-kitchen-picture-id175443686?k=6&m=175443686&s=612x612&w=0&h=dniEs4frt3aZo71BCGe94GmJ_r-9NZUW2fJOFXkuo4Q=" alt="Dusting 101" />
                        <div class="overlay">
                          <div class="text">Dusting 101 </div>
                        </div>
                    </div>
                    <div class="column">
                        <CardImg class="image" src="https://media.istockphoto.com/photos/steam-cleaning-the-office-carpet-picture-id518333126?k=6&m=518333126&s=612x612&w=0&h=d4zb40OCItBcugylWPs4KneFI_tpJUKwTXWnffeQtvg=" alt="Carpet Cleaning 101" />
                        <div class="overlay">
                          <div class="text">Carpet Steaming 101 </div>
                        </div>
                    </div>                    
                </div>
            </Container>
            <div class="row-buffer">
            <p>Start the Journey Today</p>
                <Link to= {`/createProfile`}className="btn btn-outline-success">Get Started</Link>
                <button class="btn"> <AuthNav /></button>
            </div>



        </React.Fragment>
    );
}

export default HomePage; 
