import React, {Fragment, Component} from 'react';
import styles from './contactForm.module.scss';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { validateLocaleAndSetLanguage } from 'typescript';

class ContactForm extends Component {
    state = {
        name: null,
        email: null,
        helpMsg: null,
        productType: null,
        requestMsg: null,
        errors: {
            name: null,
            email: null,
            helpMsg: null,
            productType: null,
            requestMsg: null,
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

    handleInput = (target) => {
        this.setState({  [target.name]: target.value });
    };

    onBlur = (event) => {
        let target = event.target;
        if ( this.validateInput(target) ){
            this.handleInput(target);
        }
    };

    onSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you ${this.state.name}. We will get in touch with you at ${this.state.email}.`);
    }

    render(){
        let errors = this.state.errors;
        return(
            <Fragment>
                <h2 className="text-center my-5 py-5">Let's Become Friends!</h2>
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
                        <h4 className="mt-5">What do you need today?</h4>
                        <Label className="mt-4"  for="helpMsg">How may we help you? </Label>
                        <Input className="form-control mb-4" type="textarea" name="helpMsg" id="helpMsg" rows="10" onBlur={this.onBlur} spellCheck="true"/>
                        <Label className="mt-4"  for="productType">Product Type </Label>
                        <Input type="select" className="form-control custom-select mb-4" name="productType" id="productType" onBlur={this.onBlur}>
                            <option value="">Please Select One</option>
                            <option value="Shirt">Shirt</option>
                            <option value="Mason Jar">Mason Jar</option>
                            <option value="Soap">Soap</option>
                        </Input>
                        <Label className="mt-4"  for="requestMsg">Custom Product Request </Label>
                        <Input className="form-control mb-4" type="textarea" name="requestMsg" id="requestMsg" rows="10" onBlur={this.onBlur} spellCheck="true"/>
                    </FormGroup>
                    <Button type="submit" className="btn">Submit</Button>
                </Form>
            </Fragment>
        );
    };
};

export default ContactForm;