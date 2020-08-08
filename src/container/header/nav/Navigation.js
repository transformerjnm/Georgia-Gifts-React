import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
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
          <FontAwesomeIcon icon={faShoppingCart} className={styles.cart}/>
        </Collapse>
      </Navbar>   
    
    );

};

export default Navigation;