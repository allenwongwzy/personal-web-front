import React, {Component} from 'react';
import { Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './navigator.css'

class Navigator extends Component {
    render() {
        return (
            <Navbar bg="white" expand="lg" className="pt-2 nav-bar-custom">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand  as={Link} to="/home" onClick={() => {
                            this.props.handleClick('home')
                        }} className="navbar-brand">
                            <img src="../photo/img.png" alt="logo" className="mr-2"/>
                            Allen Wong / Software Engineer
                        </Navbar.Brand>
                        <div className="flex-grow-1"></div>
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/home" onClick={() => {
                                this.props.handleClick('home')
                            }} style={{
                                color: this.props.navigatorStates.home ? 'blue' : 'black'}}>ABOUT ME</Nav.Link>
                            <Nav.Link as={Link} to="/resume" onClick={() => {
                                this.props.handleClick('resume')
                            }} style={{color: this.props.navigatorStates.resume ? 'blue' : 'black'}}>RESUME</Nav.Link>
                            <Nav.Link as={Link} to="/projects" onClick={() => {
                                this.props.handleClick('projects')
                            }} style={{color: this.props.navigatorStates.projects ? 'blue' : 'black'}}>PROJECTS</Nav.Link>
                            <Nav.Link as={Link} to="/contact" onClick={() => {
                                this.props.handleClick('contact')
                            }} style={{color: this.props.navigatorStates.contact ? 'blue' : 'black'}}>CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        );


    }
}

export default Navigator;