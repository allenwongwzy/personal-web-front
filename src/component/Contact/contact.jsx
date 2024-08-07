import React, { Component } from 'react';
import { Button, Col, Container } from 'react-bootstrap';
import './contact.css';
import axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
            show: 'none'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
    }

    handleDisplay = () => {
        this.setState({ show: '' }, () => {
            console.log(this.state.show);
        });
        setTimeout(() => {
            this.setState({ show: 'none' });
        }, 3000);
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };
        const backendUrl = process.env.REACT_APP_BASEURL;
        const { data: result } = await axios.post(`${backendUrl}/mail`, formData);
        if (result.code === 200) {
            console.log('Send successful');
            this.setState(
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: '',
                    message: ''
                },
                () => {
                    console.log('========', this.state);
                }
            );
            this.handleDisplay();
        }
    };

    render() {
        return (
            <div>
                <Container className="background-container-contact custom-font-contact">
                    <div className="contact-head">
                        <div className="blue-square"></div>
                        <h2 className="contact-title">Contact me</h2>
                    </div>
                    <div className="background-form">
                        <form className="contact-from" onSubmit={this.handleSubmit}>
                            <div className="first-line">
                                <div className="form-group margin-1">
                                    <label htmlFor="firstName">
                                        First Name <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">
                                        Last Name <span>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    Email <span>*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={this.state.subject}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={this.state.message}
                                    onChange={this.handleChange}
                                    className="no-resize"
                                />
                            </div>

                            <div className="form-footer">
                                <Col>
                                    <Button type="submit" className="send-button" size="sm">
                                        Send Form
                                    </Button>
                                </Col>
                                <Col>
                                    <p className="end-title" style={{ display: this.state.show }}>
                                        Thanks for submitting
                                    </p>
                                </Col>
                            </div>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Contact;
