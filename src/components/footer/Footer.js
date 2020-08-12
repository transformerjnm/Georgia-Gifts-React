import React from 'react';
import styles from './footer.module.scss';
import { Row, Col } from 'reactstrap';
import {
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return(
        <footer class="container-fluid ">
            <Row>
                <Col sm="4" className=" align-self-center my-3 text-center">
                    <a href="mailto:#"><span>GAGifts@gmail.com</span></a>
                    <br></br><br></br>
                    <a href="tel:#"><span>770-777-7777</span></a>
                    <br></br><br></br>
                    <a href="#"><address>17 Peachy ave, Atlanta GA 30589</address></a>
                    <br></br><br></br>
                </Col>
                <Col sm="4" className="align-self-center my-3 text-center ">
                    <FontAwesomeIcon icon={faFacebook} className={styles.social + " text-primary" } />
                    <br></br><br></br>
                    <FontAwesomeIcon icon={faInstagram} className={styles.social + " text-primary" } />
                    <br></br><br></br>
                    <FontAwesomeIcon icon={faTwitter} className={styles.social + " text-primary" } />
                    <br></br><br></br>                 
                </Col>
                <Col sm="4" className="align-self-center my-3">
                        <Nav className="text-center" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact</NavLink>
                            </NavItem>
                        </Nav>          
                </Col>               
            </Row>
            <div class="text-center mt-3">
                <span>&copy; Copyright 2020 Georgia Gifts</span>
            </div>
        </footer>
    );

};

export default Footer;