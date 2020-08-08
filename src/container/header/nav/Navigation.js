import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
  import styles from './nav.module.scss';


const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

    return(
      
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className={styles.navLink} href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className={styles.navLink} href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  className={styles.navLink} href="#">Contact</NavLink>
            </NavItem>
          </Nav>
          <a href="cart.html"> <i className="fa fa-shopping-cart" aria-hidden="true" aria-label="shopping cart image to open shopping cart"></i> </a>
        </Collapse>
      </Navbar>   
    
    );

};

export default Navigation;