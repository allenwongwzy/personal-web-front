import React, {Component} from 'react';
import {Button, Container} from "react-bootstrap";
import './contact.css'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // 在这里处理表单提交逻辑
        console.log('Form submitted', this.state);
    };
    render() {
        return (
            <div>
                <Container className={'background-container-contact custom-font-contact'}>
                    <div className={'contact-head'} style={{

                    }}>
                        <div className={'blue-square'}></div>
                        <h2 style={{fontSize:'2.5vh'}}>Contact me</h2>
                    </div>
                    <div className={'background-form'}>
                        <form className="contact-from" onSubmit={this.handleSubmit}>
                            <div className={'first-line'}>
                                <div className="form-group margin-1" style={{flexGrow: '1'}}>
                                    <label htmlFor="firstName">First Name <span>*</span></label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group" style={{flexGrow: '1'}}>
                                    <label htmlFor="lastName">Last Name <span>*</span></label>
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
                                <label htmlFor="email">Email <span>*</span></label>
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
                                    style={{resize: 'none'}}
                                />
                            </div>
                            <Button type="submit" style={{fontSize:'1.5vh'}} size={'sm'}>Send Form</Button>
                        </form>
                    </div>

                </Container>
            </div>
        );
    }
}

export default Contact;