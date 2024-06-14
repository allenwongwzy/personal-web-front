import React, {Component} from 'react';
import './footerpage.css'

class FooterPage extends Component {
    render() {
        return (
            <div>
                <footer className="text-center custom-font-footer foot-container">
                    <div className={'foot-info'} style={{display:"flex",height:"auto",justifyContent:"space-around"}}>
                        <div className={'flex-grow-1'}>
                                <p>© 2024 by Allen Wong Created using React Bootstrap</p>
                        </div>
                        <div className={'flex-grow-1'}>
                                <p>Call: 0433-852-236</p>
                        </div>
                        <div className={'flex-grow-1'}>
                                <p>Write: allenwong.wzy@gmail.com</p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterPage;