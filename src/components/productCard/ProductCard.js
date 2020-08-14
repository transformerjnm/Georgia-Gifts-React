
import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button, Col
  } from 'reactstrap';
import styles from './productCard.module.scss';

let ProductCard = (props) => {
    return(
        <Col md="6" lg="4" className="my-5">
            <Card className={styles.card}>
                <CardTitle className="text-center"><h3>{props.price}</h3></CardTitle>
                <CardImg className={styles.cardImg} top src={props.imgSrc} alt={props.imgAlt}/>
                <CardBody>
                    <p>{props.description}</p>
                    <Button >Add to Cart</Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default ProductCard;