import React, {Component} from 'react';
import {Button, Container} from "react-bootstrap";
import './resume.css'
import axios from "axios";

class Resume extends Component {
    constructor(props) {
        super(props);
    this.handleOnClick=this.handleOnClick.bind(this);
    }
    handleOnClick =async () => {
        const backendUrl = process.env.REACT_APP_BASEURL;
        try {
            const response = await axios.get(`${backendUrl}/resume`, {
                responseType: 'blob'
            });
            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'resume.pdf');
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error downloading the file', error);
        }
    }
    render() {
        return (
            <div>
                <Container className="background-container-resume custom-font-resume" style={{overflow: 'hidden'}}>

                    <div  style={{
                        display: "flex",
                        height: "auto",
                        justifyContent: "center",
                        marginTop: '65px',
                        overflow: 'hidden',
                        alignItems: 'baseline',
                    }}>
                        <div className={'blue-square'}></div>
                        <h2 style={{fontSize:'2.5vh'}}>Resume</h2>
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
                        <h3 style={{fontSize:'2.5vh'}}>Experience</h3>
                        <Button style={{fontSize:'1.5vh'}} variant="primary" onClick={this.handleOnClick}>Download CV</Button>

                    </div>

                    <div className="resume-card">
                        <div className="job-title">
                            <br/>
                            <h4 style={{fontSize: '3vh',color:'blue'}}>2022 - 2023</h4>
                            <h5 style={{fontSize:'2vh'}}><strong>Senior Software Engineer</strong></h5>
                            <h7 style={{fontSize:'2vh'}}>Shopee</h7>
                            <br/>
                            <h7 style={{fontSize:'2vh'}}>Search Team</h7>
                        </div>
                        <div className='job-description'>
                            <p>
                                Responsibilities are design, development, testing and continuous optimization of the search engine system, and develop new functions according to the needs of the business team.
                            </p>
                            <p> Participate in the software requirements analysis of the performance reporting system,produce corresponding software development requirements documents, and complete the development of the systems.</p>

                        </div>
                    </div>

                    <div className="resume-card">
                        <div className={'job-title'}>
                            <br/>
                            <h4 style={{fontSize: '3vh', color: 'blue'}}>2020 - 2022</h4>
                            <h5 style={{fontSize: '2vh'}}><strong>Senior Software Engineer</strong></h5>
                            <h7 style={{fontSize: '2vh'}}>Alibaba Group</h7>
                            <br/>
                            <h7 style={{fontSize: '2vh'}}>Technical Department</h7>
                        </div>
                        <div className={'job-description'}>
                            <p>
                                At Alibaba Group, as a senior software engineer, I am mainly responsible for the development of the tracking system and the supply chain system. The tracking system includes management, monitoring, and analysis of point data reported by clients, while the supply chain system covers the entire process from order receiving to outbound delivery.
                            </p>
                            <p> Responsible for ensuring the security of major promotions, including end-to-end stress testing before major promotions, conducting drills for abnormal situations, and emergency service maintenance during major promotions.</p>

                        </div>
                    </div>

                    <div className="resume-card">
                        <div className={'job-title'}>
                            <br/>
                            <h4 style={{fontSize: '3vh', color: 'blue'}}>2019 - 2020</h4>
                            <h5 style={{fontSize: '2vh'}}><strong>Software Engineer</strong></h5>
                            <h7 style={{fontSize: '2vh'}}>Fiberhome Starrysky Co., Ltd.</h7>
                            <br/>
                            <h7 style={{fontSize: '2vh'}}>Technical Department</h7>
                        </div>
                        <div className={'job-description'}>
                            <p style={{textAlign: 'left'}}>
                                At Fiberhome Starrysky Co., Ltd., as a software engineer, I am mainly responsible for developing a service monitoring system. The system I developed is deployed and used in more than 20 subsidiaries of the group.
                            </p>
                            <p> Participate in service performance tuning to improve service performance to meet customer needs.</p>

                        </div>
                    </div>

                </Container>

            </div>
        );
    }
}

export default Resume;