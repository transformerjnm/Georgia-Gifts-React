import React, { Fragment } from 'react';
import products from '../../shared/products';
import {
    Row,
    Col,
    Button,
    Container,
} from 'reactstrap';
import styles from './cart.module.scss';

const Cart = (props) => {
    /*
        array returned by props.getCartItemsID is all the id of the products that the user has added to cart.
        This function gets and returns the product data for all the item ids as an array of objects.
    */
    let getProductsInfoById = () => {
        let customerProductsInfo = [];  
        let cartItemsId = props.getCartItemsId();
        cartItemsId.map( (singleId) => {
            let item = products.filter( product => product.id === singleId)
            customerProductsInfo[customerProductsInfo.length] = item[0];
        });
        return customerProductsInfo;
    };

    //creates and returns JSX that shows all the items in the cart
    let showCartProducts = () => {
        let cartProducts = getProductsInfoById();
        let total = 0.00;
        //calculate total and make each product jsx display
        let cartProductsDisplay = cartProducts.map( product => {
            total += product.price;
            return(
                <Row>
                    <Col md="8"><i class="fa fa-times mr-3" aria-hidden="true"></i>{product.name}</Col>
                    <Col md="4" className={styles.price + "text-right"}> Price: ${product.price}</Col>
                </Row>
            );
        });
        return (
            <Fragment>
                <Button className="btn col-3 offset-9 mb-5" >Clear Cart</Button>
                {cartProductsDisplay}
                <Row className="mt-5" ><Col className="text-right"> Total: ${total.toFixed(2)} </Col></Row>
                <Row className="mt-5" ><Col className="text-right"> Total After Tax(7%): ${( total * 1.07 ).toFixed( 2 )}</Col></Row>  
            </Fragment>
        ); 
    };
    
    return(
        <Container>{showCartProducts()}</Container>
    );
};

export default Cart;