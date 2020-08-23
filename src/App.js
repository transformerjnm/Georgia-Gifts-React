import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './container/header/Header';
import MainContent from './container/maincontent/MainContent';
import Footer from './components/footer/Footer';
import "./App.scss";
import { HashRouter } from 'react-router-dom';

function App() {
  return ( 
    <Fragment>
		<HashRouter>
    		<Header /> 	
        	<MainContent />    	
      		<Footer />
		</HashRouter>
    </Fragment>  
  );
};

export default App;
