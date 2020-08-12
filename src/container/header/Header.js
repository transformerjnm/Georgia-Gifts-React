import React, { Fragment } from 'react';
import styles from './header.module.scss';
import Nav from '../../components/nav/Navigation';
import HeroContent from '../../components/herocontent/HeroContent';

const Header = () => {

    return(
        <Fragment>
            <Nav />
            <HeroContent />
        </Fragment>    
    );

};

export default Header;