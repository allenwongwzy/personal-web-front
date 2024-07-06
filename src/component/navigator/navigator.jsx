import React, {Component} from 'react';
import { Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import './navigator.css'

class Navigator extends Component {
    constructor(props) {
        super(props);
        this.state = {expanded:false}
        this.handleLinkClick=this.handleLinkClick.bind(this);
        this.handleBarClick = this.handleBarClick.bind(this);
    }

    handleLinkClick = () => {
        this.setState({ expanded: false },()=>{
            console.log(this.state.expanded);
        });
    }

    handleBarClick = () => {
        if (this.state.expanded) {
            this.setState({ expanded: false },()=>{
                console.log(this.state.expanded);
            });
        }else {
            this.setState({expanded: true},()=>{
                console.log(this.state.expanded);
            });
        }

    }
    render() {
        return (
            <Navbar expanded={this.state.expanded} bg="white" expand="lg" className="pt-2 nav-bar-custom custom-font-navbar" >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.handleBarClick}/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Navbar.Brand  as={Link} to="/home" onClick={() => {
                            this.props.handleClick('home')
                        }} className="navbar-brand">
                            <img src="../photo/img.png" alt="logo" className="mr-2"/>
                            Allen Wong / Software Engineer
                        </Navbar.Brand>
                        <div className="flex-grow-1"></div>
                        <Nav className="ml-auto">
                            <Nav.Link  as={Link} to="/personal-resume/home" onClick={() => {
                                this.props.handleClick('home');
                                this.handleLinkClick();
                            }} style={{
                                color: this.props.navigatorStates.home ? 'blue' : 'black'}}>ABOUT ME</Nav.Link>
                            <Nav.Link as={Link} to="/personal-resume/resume" onClick={() => {
                                this.props.handleClick('resume');
                                this.handleLinkClick();
                            }} style={{color: this.props.navigatorStates.resume ? 'blue' : 'black'}}>RESUME</Nav.Link>
                            <Nav.Link as={Link} to="/personal-resume/projects" onClick={() => {
                                this.props.handleClick('projects');
                                this.handleLinkClick();
                            }} style={{color: this.props.navigatorStates.projects ? 'blue' : 'black'}}>PROJECTS</Nav.Link>
                            <Nav.Link as={Link} to="/personal-resume/contact" onClick={() => {
                                this.props.handleClick('contact');
                                this.handleLinkClick();
                            }} style={{color: this.props.navigatorStates.contact ? 'blue' : 'black'}}>CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        );


    }
}

export default Navigator;