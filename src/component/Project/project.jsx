import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import './project.css'

class Project extends Component {
    render() {
        return (
            <div>
                <Container className="background-container-project custom-font" style={{overflow: 'hidden'}}>
                    <div className={'project-head'} style={{
                        display: "flex",
                        height: "auto",
                        justifyContent: "center",
                        marginTop: '65px',
                        overflow: 'hidden',
                        alignItems: 'baseline',
                    }}>
                        <div className={'blue-square'}></div>
                        <h2>Projects</h2>
                    </div>
                    <div className={'project-description'} style={{width: '50%', textAlign: 'start', marginTop: '50px', marginBottom: '70px'}}>
                        <p>I am a software engineer with over five years of experience, having
                            worked for multiple Fortune 500 companies, including Alibaba and Microsoft.I have extensive
                            experience in backend development and am also familiar with frontend
                            development. Feel free to contact me!</p>
                    </div>
                    <div className={'project-card'}>
                        <div className={'project-title'}>
                            <div style={{display: 'flex', justifyContent: 'start'}}>
                                <div className={'blue-square-project'}></div>
                                <div style={{marginLeft: '20px'}}>
                                    <h5>Project name 01</h5>
                                    <h6>Role Title</h6>
                                </div>
                            </div>
                            <div className={'project-title-info'} style={{marginLeft: '40px', marginTop: '40px'}}>
                                <p>
                                    Responsible for the Double 11 shopping festival, ensuring service performance and
                                    stability. Mainly in charge of pre-event stress testing, evaluating service
                                    performance under different traffic loads, and testing the service's ability to
                                    handle sudden failures. This includes automatic scaling, rate limiting, and more.
                                    Additionally, tested the service performance in high-traffic e-commerce scenarios,
                                    such as flash sale events, to ensure service availability under peak traffic
                                    conditions.
                                </p>
                            </div>
                        </div>
                        <div className={'project-graph-description'}>
                            <img src="../photo/back.png" alt="logo"/>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Project;