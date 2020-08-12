import React from 'react';
import styles from './mainContent.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../components/home/Home';
import About from '../../components/about/About';
const MainContent = () => {

    return(
        <Switch>
            <Route exact path='/' >
                <Home />
            </Route>
            <Route path='/about' >
                <About />
            </Route>                  
            <Redirect to='/' />
        </Switch>              
    );

};

export default MainContent;