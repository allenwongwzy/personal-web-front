import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import './project.css'

class Project extends Component {
    render() {
        return (
            <div>
                <Container className="background-container-project custom-font-project" style={{overflow: 'hidden'}}>
                    <div className={'project-head'} style={{
                        display: "flex",
                        height: "auto",
                        justifyContent: "center",
                        marginTop: '65px',
                        overflow: 'hidden',
                        alignItems: 'baseline',
                    }}>
                        <div className={'blue-square'}></div>
                        <h2 style={{fontSize: '2.5vh'}}>Projects</h2>
                    </div>
                    <div className={'project-description'}
                         style={{width: '50%', textAlign: 'start', marginTop: '50px', marginBottom: '70px'}}>
                        <p>I am a software engineer with over five years of experience, having
                            worked for multiple Fortune 500 companies, including Alibaba and Shopee. In past work, I was
                            primarily responsible for backend development and have extensive experience in this area.
                            Additionally, I am familiar with frontend development and have used frontend technologies to
                            develop some internal platforms for previous company. This page introduces
                            some of the main projects I have worked on.
                        </p>
                    </div>
                    <div className={'project-card'}>
                        <div className={'project-title'}>
                            <div style={{display: 'flex', justifyContent: 'start'}}>
                                <div className={'blue-square-project'}></div>
                                <div style={{marginLeft: '20px'}}>
                                    <h5 style={{fontSize: '2.5vh'}}>Safety Management</h5>
                                    <h6 style={{fontSize: '2vh'}}>Primary responsible person </h6>
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
                            <img src="../photo/double11.png" alt="logo"/>
                        </div>
                    </div>

                    <div className={'project-card'}>
                        <div className={'project-title'}>
                            <div style={{display: 'flex', justifyContent: 'start'}}>
                                <div className={'blue-square-project'}></div>
                                <div style={{marginLeft: '20px'}}>
                                    <h5 style={{fontSize: '2.5vh'}}>Big Data Retrieval System</h5>
                                    <h6 style={{fontSize: '2vh'}}>Architect and Developer</h6>
                                </div>
                            </div>
                            <div className={'project-title-info'} style={{marginLeft: '40px', marginTop: '40px'}}>
                                <p>
                                    This is a refactoring project aimed at meeting the performance requirements of the
                                    client. This system mainly improves service query performance through microservices
                                    refactoring. In the design, we focus on decoupling services, rationalizing
                                    sub-service functionalities, and optimizing underlying query SQL. Technically, we
                                    use a message bus to implement message routing and messaging-driven development,
                                    ensuring rapid service scaling. As the project leader, my work includes system
                                    architecture design, partial module development, and capacity evaluations during
                                    customer deployment to determine sub-service ratios. After development and
                                    successful deployment, the system's query performance improved by 6 times, achieving
                                    the refactoring goal.
                                </p>
                            </div>
                        </div>
                        <div className={'project-graph-description'}>
                            <img src="../photo/bigdata.png" alt="logo"/>
                        </div>
                    </div>


                    <div className={'project-card'}>
                        <div className={'project-title'}>
                            <div style={{display: 'flex', justifyContent: 'start'}}>
                                <div className={'blue-square-project'}></div>
                                <div style={{marginLeft: '20px'}}>
                                    <h5 style={{fontSize: '2.5vh'}}>Item Card</h5>
                                    <h6 style={{fontSize: '2vh'}}>Developer</h6>
                                </div>
                            </div>
                            <div className={'project-title-info'} style={{marginLeft: '40px', marginTop: '40px'}}>
                                <p>
                                    Responsible for the backend development of private domain product cards, including
                                    product details, price components, banner components, shipping fee components, and
                                    aggregation sorting. Logically, by interacting with the membership service, it
                                    achieved different visibility of products for members and non-members, as well as
                                    displaying different prices for customers of different membership levels.
                                    Technically, it utilized Function as a Service (FaaS) to achieve fast data assembly,
                                    lightweight development, and deployment.
                                </p>
                            </div>
                        </div>
                        <div className={'project-graph-description'}>
                            <img src="../photo/itemcard.png" alt="logo"/>
                        </div>
                    </div>


                    <div className={'project-card'}>
                        <div className={'project-title'}>
                            <div style={{display: 'flex', justifyContent: 'start'}}>
                                <div className={'blue-square-project'}></div>
                                <div style={{marginLeft: '20px'}}>
                                    <h5 style={{fontSize: '2.5vh'}}>Tracking System</h5>
                                    <h6 style={{fontSize: '2vh'}}>Owner and Developer</h6>
                                </div>
                            </div>
                            <div className={'project-title-info'} style={{marginLeft: '40px', marginTop: '40px'}}>
                                <p>
                                    Responsible for the development and design of the tracking system. The tracking
                                    system is primarily used for managing, monitoring, and maintaining online tracking
                                    points, which are used to monitor and analyze online traffic. For an app with
                                    millions of daily active users, tracking data is extremely important. This system
                                    automates the management of tracking points, providing a user-friendly tracking
                                    management platform that can accurately sample online tracking point data in
                                    real-time, and monitor and analyze the data. The platform implements standardized
                                    tracking solutions to achieve unified management of tracking points, solving issues
                                    of tracking point loss and abnormalities, significantly reducing financial losses
                                    caused by online traffic anomalies.
                                </p>
                            </div>
                        </div>
                        <div className={'project-graph-description'}>
                            <img src="../photo/tracking.png" alt="logo"/>
                        </div>
                    </div>

                    <div className={'project-card'}>
                        <div className={'project-title'}>
                            <div style={{display: 'flex', justifyContent: 'start'}}>
                                <div className={'blue-square-project'}></div>
                                <div style={{marginLeft: '20px'}}>
                                    <h5 style={{fontSize: '2.5vh'}}>Search Engine Scheduling</h5>
                                    <h6 style={{fontSize: '2vh'}}>Developer</h6>
                                </div>
                            </div>
                            <div className={'project-title-info'} style={{marginLeft: '40px', marginTop: '40px'}}>
                                <p>
                                    Responsible for the development of the search engine scheduling system, which
                                    manages the overall search engine workflow by scheduling AC (access control/entry
                                    service), basic search servers, real-time processing servers, index servers, and
                                    download servers. Traffic distribution is handled through service registration and
                                    gateways, ensuring the consistency of multi-row and multi-column indexing while also
                                    maintaining service availability.
                                </p>
                            </div>
                        </div>
                        <div className={'project-graph-description'}>
                            <img src="../photo/search.png" alt="logo"/>
                        </div>
                    </div>


                </Container>
            </div>
        );
    }
}

export default Project;