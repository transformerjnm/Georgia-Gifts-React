import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './container/header/Header';
import MainContent from './container/maincontent/MainContent';
import Footer from './components/footer/Footer';
import './App.module.scss';


function App() {

  return (
    
    <Fragment>

      <Header />
      <MainContent />
      <Footer />

    </Fragment>
    
  );

};

export default App;
