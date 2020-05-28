import React, {Component} from "react";
import {HashRouter as Router} from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import router from "./router";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Nav/>
                    {router}
                    <h1 style={{padding: "200px 35%"}}>
                        This is where your pages will appear
                    </h1>
                </div>
            </Router>
        );
    }
}

export default App;
