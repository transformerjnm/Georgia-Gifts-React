import React, { Component } from 'react';
import styles from './mainContent.module.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../components/home/Home';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Cart from '../../components/cart/Cart';

class MainContent extends Component {
    state = {
        cartItemsIds: [],
    };
    render(){
        let getCartItemsId = () => this.state.cartItemsIds;

        let addCartItem = ( newItemId) =>{
            let newCart = [...this.state.cartItemsIds];
            newCart.push(newItemId);
            this.setState( {cartItemsIds: newCart } ) ;     
        };

        let removeCartItem = (cartItemId) => {
            let index = this.state.cartItemsIds.indexOf(cartItemId);
            this.setState({ cartItemsIds: this.state.cartItemsIds.splice(index, 1) });
        };
        return(
            <Switch>
                <Route exact path='/' >
                    <Home addCartItem={addCartItem}/>
                </Route>
                <Route path='/about' >
                    <About />
                </Route>
                <Route path='/contact' >
                    <Contact />
                </Route>
                <Route path='/cart' >
                    <Cart getCartItemsId={getCartItemsId} removeCartItem={removeCartItem}/>
                </Route>                     
                <Redirect to='/' />
            </Switch>              
        );
    };
};

export default MainContent;