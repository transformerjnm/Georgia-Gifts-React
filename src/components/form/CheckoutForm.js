import React, {Fragment, Component} from 'react';
import styles from './contactForm.module.scss';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { validateLocaleAndSetLanguage } from 'typescript';

class ContactForm extends Component {
    state = {
        name: null,
        email: null,
        sAddress: null,
        bAddress: null,
        cardName: null,
        cardNum: null,
        cardDate: null,
        cardCvv: null,
        errors: {
            name: null,
            email: null,
            sAddress: null,
            bAddress: null,
            cardName: null,
            cardNum: null,
            cardDate: null,
            cardCvv: null,
        },
    };

    //if info is required check and makes sure it is not empty
    validateInput = (target) => {
        console.log(target.value);
        if(target.required){
            if(target.value === null || target.value === "") {
                this.setState({ errors: { ...this.state.errors, ...{[target.name]: "This field is required and must not be Blank."}} });
                return false;
            }
            if(target.name === "email" && !target.value.includes('@') ){
                this.setState({ errors: { ...this.state.errors, ...{[target.name]: "Please Enter a valid email address"}} });
                return false;
            }
        }
        this.setState({errors: { ...this.state.errors, ...{ [target.name]: null}} });
        return true;
    };

    onBlur = (event) => {
        let target = event.target;
        if ( this.validateInput(target) ){
            this.setState({  [target.name]: target.value });
        }
    };

    onSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you ${this.state.name}. Your Order will be shipped soon. Email confirmation will be sent to ${this.state.email}.`);
    }

    render(){
        let errors = this.state.errors;
        return(
            <Fragment>
                <h2 className="text-center my-5 py-5">Checkout Order Below!</h2>
                <Form className="p-5 my-5 mx-auto" onSubmit={this.onSubmit}>
                    <FormGroup className="mb-5">
                        <h4>Who are you?</h4>
                        <Label className="mt-4"  for="name" > Your Name *</Label>
                        <Input className="form-control mb-4" type="text" name="name" id="name" maxLength="60" required invalid={errors.name} onBlur={this.onBlur}/>
                        <FormFeedback className={styles.feedback}>{errors.name}</FormFeedback>
                        <Label className="mt-4" for="email">Your Email *</Label>
                        <Input className="form-control mb-4" type="email" name="email" id="email" required invalid={errors.email} onBlur={this.onBlur}/>
                        <FormFeedback className={styles.feedback}>{errors.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup className="mt-5">
                        <h4 className="mt-5">Where can we ship your goods?</h4>
                        <Label className="mt-4"  for="sAddress">Shipping Address * </Label>
                        <Input className="form-control mb-4" type="text" name="sAddress" id="sAddress" onBlur={this.onBlur} spellCheck="true" required/>
                        <Label className="mt-4"  for="bAddress">Billing Address * </Label>
                        <Input className="form-control mb-4" type="text" name="bAddress" id="bAddress" onBlur={this.onBlur} spellCheck="true" required/>
                    </FormGroup>
                    <FormGroup>
                        <h4 className="mt-5">How are you paying today?</h4>
                        <Label className="mt-4"  for="cardName">Name on Card * </Label>
                        <Input className="form-control mb-4" type="text" name="cardName" id="cardName" onBlur={this.onBlur} spellCheck="true" required/>
                        <Label className="mt-4"  for="cardNum">Card Number * </Label>
                        <Input className="form-control mb-4" type="text" name="cardNum" id="cardNum" onBlur={this.onBlur} spellCheck="true" required/>
                        <Label className="mt-4"  for="cardDate">Card Expression Date * </Label>
                        <Input className="form-control mb-4" type="text" name="cardDate" id="cardDate" onBlur={this.onBlur} spellCheck="true" required/>
                        <Label className="mt-4"  for="cardCvv">Card CVV * </Label>
                        <Input className="form-control mb-4" type="text" name="cardCvv" id="cardCvv" onBlur={this.onBlur} spellCheck="true" required/>
                    </FormGroup>
                    <Button type="submit" className="btn">Submit</Button>
                </Form>
            </Fragment>
        );
    };
};

export default ContactForm;