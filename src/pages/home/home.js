import React, {Component} from 'react';
import {HashRouter} from "react-router-dom";
import logo from "../../logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import {faCoffee} from "@fortawesome/free-solid-svg-icons/index";

class Home extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <FontAwesomeIcon icon={faCoffee}/>
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                        </div>
                    </div>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </div>
            </HashRouter>
        )
    }
}

export default Home;