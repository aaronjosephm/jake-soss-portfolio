import React, { Component } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import {
	FormGroup,
	Label,
	Input,
	Message,
	HomeTitle,
	TextArea,
} from './commonStyleComponents/commonDivs';
import { SendButton } from './commonStyleComponents/commonButtons';

class ContactComponent extends Component {
	state = {
		name: '',
		email: '',
		message: '',
		errorMessages: {
			name: undefined,
			email: undefined,
			message: undefined,
		},
		errors: [],
	}

	async validateField(fieldName) {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve()
			}, 500)
		});
  	let errors = Object.assign([], this.state.errors);
  	let errorMessages = Object.assign({}, this.state.errorMessages);

  	const { name, email, message } = this.state;

  	switch(fieldName) {
      case 'name':
      	if (name === '') {
      		errorMessages.name = 'Name field cannot be blank.';
      		errors.push('Name field cannot be blank.');
      	} else {
      		errorMessages.name = undefined;
      	}
      	break;
      case 'email':
        if (!validator.isEmail(email)) {
        	errorMessages.email = 'Not a valid email.';
        	errors.push('Not a valid email.');
        } else {
      		errorMessages.email = undefined;
      	}
        break;
      case 'message':
        if (message === '') {
      		errorMessages.message = 'Message field cannot be blank.';
      		errors.push('Message field cannot be blank.');
      	} else {
      		errorMessages.message = undefined;
      	}
      	break;
  		default:
        errors = [];
  			break;
  	}

    this.setState({ errorMessages, errors });
  }

  submit() {
  	if (this.state.errors.length > 0) {
  		alert('You cannot submit that yet!');
  	} else {
  		alert('Sent successfully!');
  	}
  }

	render () {
		const { name, email, message, errorMessages } = this.state;
		return (
			<div>
			  <HomeTitle>
			    <h1>Feel free to reach out!</h1>
			    <hr/>
			    <h3>If you have any questions feel free to send Aaron a message here!</h3>
			    <br/>
			    <br/>
			  </HomeTitle>
			  <FormGroup>
		      <Label>Name:</Label>
		      <Input
		        error={errorMessages.name}
		        value={name} 
		        onChange={({ target: { value } }) => {
			        	this.setState({ name: value})
			        	this.validateField('name')
		          }
		        }
		        id={'name'}
		        />
		      {errorMessages.name &&
		        <Message>{errorMessages.name}</Message>
		      }
		    </FormGroup>
		    <FormGroup>
		      <Label>email:</Label>
		      <Input
		        error={errorMessages.email}
		        value={email}
		        onChange={({ target: { value } }) => {
			        	this.setState({ email: value})
			        	this.validateField('email')
		          }
		        }
		        id={'email'}
		        />
		      {errorMessages.email &&
		        <Message>{errorMessages.email}</Message>
		      }
        </FormGroup>
        <FormGroup>
		      <Label>Leave a message:</Label>
		      <TextArea 
		        error={errorMessages.message}
		        value={message}
		        onChange={({ target: { value } }) => {
			        	this.setState({ message: value})
			        	this.validateField('message')
		          }
		        }
		        id={'message'}
		       />
		      {errorMessages.message &&
		        <Message>{errorMessages.message}</Message>
		      }
		      <SendButton
		        onClick={() => this.submit()}
		        >
		       Send
		      </SendButton>
        </FormGroup>
			</div>
		);
	}
}

export default ContactComponent;