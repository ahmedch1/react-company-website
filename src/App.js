import React from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home'
import About from './components/Pages/About';
import Contact from "./components/Pages/Contact";
import Team from "./components/Common/Team";
import Portfolio from "./components/Common/Portfolio";
import Services from "./components/Common/Services";

function App() {
    return (
        <Router>
            <PageWrapper>

                <Route
                    exact={true}
                    path="/"
                    component={Home}/>
                <Route
                    path="/services"
                    component={Services}
                />
                    <Route
                    path="/portfolio"
                    component={Portfolio}
                />
                    <Route
                path="/about"
                component={About}
                />

                <Route
                path="/team"
                component={Team}>

                </Route>
                <Route
                path="/contact"
                component={Contact}>

                </Route>

            </PageWrapper>
        </Router>
    );
}

export default App;
