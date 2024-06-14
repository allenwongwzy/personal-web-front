import React, {Component} from 'react';
import {Button, Container} from "react-bootstrap";
import './resume.css'

class Resume extends Component {
    render() {
        return (
            <div>
                <Container className="background-container-resume custom-font" style={{overflow: 'hidden'}}>

                    <div  style={{
                        display: "flex",
                        height: "auto",
                        justifyContent: "center",
                        marginTop: '65px',
                        overflow: 'hidden',
                        alignItems: 'baseline',
                    }}>
                        <div className={'blue-square'}></div>
                        <h2>Resume</h2>
                    </div>

                    <div className={'resume-title'} style={{
                        display: "flex",
                        height: "auto",
                        justifyContent: "space-around",
                        marginTop: '70px',
                        marginBottom: '70px',
                        overflow: 'hidden',
                        width: '80%'

                    }}>
                        <h3>Experience</h3>
                        <Button variant="primary">Download CV</Button>

                    </div>

                    <div className="resume-card">
                        <div className="job-title">
                            <br/>
                            <h4 style={{fontSize: '3vh',color:'blue'}}>2035 - Present</h4>
                            <h5 style={{fontSize:'2vh'}}><strong>Software Engineer</strong></h5>
                            <h7 style={{fontSize:'2vh'}}>Alibaba Group</h7>
                            <br/>
                            <h7 style={{fontSize:'2vh'}}>Technical Department</h7>
                        </div>
                        <div className='job-description'>
                            <p>
                                I am a software engineer with over five years of experience, having
                                worked for multiple Fortune 500 companies, including Alibaba and Microsoft.
                            </p>
                            <p> I have extensive experience in backend development and am also familiar with frontend
                                development. Feel free to contact me!</p>

                        </div>
                    </div>

                    <div className="resume-card">
                        <div className={'job-title'}>
                            <br/>
                            <h4 style={{fontSize: '3vh', color: 'blue'}}>2035 - Present</h4>
                            <h5 style={{fontSize: '2vh'}}><strong>Software Engineer</strong></h5>
                            <h7 style={{fontSize: '2vh'}}>Alibaba Group</h7>
                            <br/>
                            <h7 style={{fontSize: '2vh'}}>Technical Department</h7>
                        </div>
                        <div className={'job-description'}>
                            <p>
                                I am a software engineer with over five years of experience, having
                                worked for multiple Fortune 500 companies, including Alibaba and Microsoft.
                            </p>
                            <p> I have extensive experience in backend development and am also familiar with frontend
                                development. Feel free to contact me!</p>

                        </div>
                    </div>

                    <div className="resume-card">
                        <div className={'job-title'}>
                            <br/>
                            <h4 style={{fontSize: '3vh', color: 'blue'}}>2035 - Present</h4>
                            <h5 style={{fontSize: '2vh'}}><strong>Software Engineer</strong></h5>
                            <h7 style={{fontSize: '2vh'}}>Alibaba Group</h7>
                            <br/>
                            <h7 style={{fontSize: '2vh'}}>Technical Department</h7>
                        </div>
                        <div className={'job-description'}>
                            <p style={{textAlign: 'left'}}>
                                I am a software engineer with over five years of experience, having
                                worked for multiple Fortune 500 companies, including Alibaba and Microsoft.
                            </p>
                            <p> I have extensive experience in backend development and am also familiar with frontend
                                development. Feel free to contact me!</p>

                        </div>
                    </div>

                </Container>

            </div>
        );
    }
}

export default Resume;