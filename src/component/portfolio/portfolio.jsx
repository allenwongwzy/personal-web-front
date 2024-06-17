import React, {Component} from 'react';
import {Button, Card, Container} from "react-bootstrap";
import './portfolio.css';
import {Link} from "react-router-dom";

class Portfolio extends Component {
    render() {
        return (
            <div className="custom-font-portfolio ">
                <Container className="background-container ">
                    <div className="background background-1"></div>
                    <div className="background background-4"></div>
                    <div className="content">
                        <div className="box-2">
                            <Card className="profile-card">

                                <Card.Body className="text-center" style={{display: "flex",flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <div style={{height:'60%',alignContent:'center'}}>
                                        <Card.Img variant="top"
                                                  src="../photo/personalphoto.png"/>


                                        <Card.Title className="font-weight-bold"
                                                    style={{fontSize: '3vh'}}>Allen</Card.Title>
                                        <Card.Title className="font-weight-bold"
                                                    style={{fontSize: '3vh'}}>Wong</Card.Title>
                                    </div>
                                    <div style={{height:'40%',alignContent:'center'}}>
                                        <hr className="divider"/>
                                        <br/>
                                        <Card.Subtitle className="mb-2 text-muted" style={{fontSize: '2vh'}}>Software
                                            Engineer</Card.Subtitle>
                                        <p style={{fontSize: '1vh'}}>visit number: {this.props.visitNumbers}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Container className="card-background">
                                <div className="social-icons">
                                    <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#twitter"><i className="fab fa-twitter"></i></a>
                                    <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#instagram"><i className="fab fa-instagram"></i></a>
                                </div>
                            </Container>
                        </div>
                        <div className="box-3">
                            <div>
                                <Container className="mt-3">
                                    <p className={'text-center'} style={{fontSize: '3vh'}}><strong>Hello</strong></p>
                                    <br/>
                                    <p className={'text-center'} style={{fontSize: '2.5vh'}}><strong>I'm Allen
                                        Wong</strong></p>
                                    <br/>
                                    <div className="text-center ">
                                        <Button variant="primary" as={Link} to="/resume" onClick={() => {
                                            this.props.handleClick('resume')
                                        }} style={{fontSize: '1.5vh'}} className="me-3">Resume</Button>
                                        <Button variant="outline-dark" style={{fontSize: '1.5vh'}} as={Link}
                                                to="/projects" onClick={() => {
                                            this.props.handleClick('projects')
                                        }}>Projects</Button>
                                    </div>
                                    <br/>
                                    <div className="text-center-container">
                                        <div>
                                            <p>
                                                I am a software engineer with over five years of experience, having
                                                worked for
                                                multiple Fortune 500 companies, including Alibaba and Shopee.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                In the past five years I mainly focus on backend development and have
                                                extensive experience. I'm also familiar
                                                with frontend development.
                                            </p>
                                        </div>
                                        <div>
                                            <p>
                                                If you need an experienced software engineer, feel free to contact me.
                                            </p>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                    </div>
                </Container>

            </div>
        );

    }
}

export default Portfolio;
