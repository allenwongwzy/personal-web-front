import Portfolio from "./component/portfolio/portfolio";
import {Route, Routes} from "react-router-dom";
import Resume from "./component/Resume/resume";
import Navigator from "./component/navigator/navigator";
import './app.css'
import Footerpage from "./component/FooterPage/footerpage";
import Project from "./component/Project/project";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            navigatorStates: {
                home: false,
                resume: false,
                projects: false,
                contact: false
            }
        };
    }
    componentDidMount() {
        const path = window.location.pathname;
        let key = path.split('/').pop();
        if (key === '') {
            key = 'home'
        }
        this.setState(prevState => ({
            navigatorStates: {
                ...prevState.navigatorStates,
                [key]: true
            }
        }), () => {

            console.log(this.state.navigatorStates);
        });
    }
    handleClick = (key) => {
        const list = ['home', 'resume', 'projects', 'contact']
        const newState = {};
        list.forEach(item => {
            item === key ? newState[item] = true : newState[item] = false;
        })
        this.setState({navigatorStates:newState}, () => {
            // 在回调中获取更新后的状态
            console.log('Updated state:', this.state);
        });
    }

    render() {
        return (
            <div className="app-container">
                <div style={{overflow: 'hidden'}}>
                    <Navigator handleClick={this.handleClick} navigatorStates={this.state.navigatorStates}/>
                </div>
                <div className='mt-custom content-container'>
                    <Routes>
                        <Route path="*" element={<Portfolio handleClick={this.handleClick} className="mt-custom"/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                        <Route path="/projects" element={<Project/>}/>
                    </Routes>
                </div>
                <Footerpage/>
            </div>
        );
    }
}

export default App;
