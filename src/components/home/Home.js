import React, {Fragment} from 'react';
import { Row, Col, Container } from 'reactstrap';
import products from '../../shared/products';
import Card from '../productCard/ProductCard';

const Home = () => {

    let getFeaturedProducts = () => {
        let bestSellers = products.filter( product => product.bestSeller === true );
        let bestSellersCards = bestSellers.map( (product) => {
            return(
                <Card price={product.price} description={product.description} title={product.title} imgSrc={product.imgSrc} imgAlt={product.imgAlt}/>
            );
        });
        return bestSellersCards;
    };

    return(
        <Fragment>
            <Container>
                <h2 class="text-center my-5 py-5">Best Sellers</h2>
                <Row>
                    
                            {getFeaturedProducts()}
                    
                </Row>
            </Container>
        </Fragment>
    );

};

export default Home;