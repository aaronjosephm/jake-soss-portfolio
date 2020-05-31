import React, { Component } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import {
	FormGroup,
	Label,
	Input,
	Message,
	HomeTitle,
	ContactTitle,
	TextArea,
	NameAndEmail,
	MessageBox,
	FormGroupMessage,
	ContactContent,
	ContactContent2,
} from './commonStyleComponents/commonDivs';
import { SendButton, SendButtonWrapper } from './commonStyleComponents/commonButtons';

const dataJs = {
    "access_token": "ascr3zhe35gpx88jvptujf42"
};

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

  js_onSuccess() {
    // remove this to avoid redirect
    // window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    alert('Sent successfully!');
	}

  js_onError(error) {
    // remove this to avoid redirect
    alert('There was an issue with your request!');
	}

   sendForm(event) {
    event.preventDefault();
    const request = new XMLHttpRequest();
    const { name, email, message } = this.state;
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200) {
        this.js_onSuccess();
        this.setState({
          name: '',
          email: '',
          message: '',
        });
      } else if (request.readyState == 4) {
        this.js_onError(request.response);
      }
    };

    const subject = "Faviola, You have a new client interested!";

	    if (this.state.errors.length > 0) {
	      console.log("invalid info");
	      return false;
	    } else {
	      const messageToSend = `This is my information below. \n Name: ${name} \n Email: ${email} \n Message: ${message}`;
	      dataJs['subject'] = subject;
	      dataJs['text'] = messageToSend;
	      const params = this.toParams(dataJs);
	      request.open("POST", "https://postmail.invotes.com/send", true);
	      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	      request.send(params);
	    }
	  }

		toParams(dataJs) {
	    const form_data = [];
	    for (const key in dataJs) {
	      form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(dataJs[key]));
	    }

	    return form_data.join("&");
		}

	renderNameAndEmailFields() {
		const { errorMessages, email, name } = this.state;
		return (
			<div>
				<FormGroup> 
			    {errorMessages.name ?
		      <Input
		        placeholder="Name field cannot be blank!"
		        error={errorMessages.name}
		        value={name} 
		        onChange={({ target: { value } }) => {
			        	this.setState({ name: value})
			        	this.validateField('name')
		          }
		        }
		        id={'name'}
		        /> : 
		        <Input
		        placeholder="Please provide your name"
		        error={errorMessages.name}
		        value={name} 
		        onChange={({ target: { value } }) => {
			        	this.setState({ name: value})
			        	this.validateField('name')
		          }
		        }
		        id={'name'}
		        />}
	      </FormGroup>
		    <FormGroup>
		      {errorMessages.email ?
		      <Input
		        placeholder="Please enter a valid email!"
		        error={errorMessages.email}
		        value={email}
		        onChange={({ target: { value } }) => {
			        	this.setState({ email: value})
			        	this.validateField('email')
		          }
		        }
		        id={'email'}
		        /> :
		        <Input
		        placeholder="Please provide your email"
		        error={errorMessages.email}
		        value={email}
		        onChange={({ target: { value } }) => {
			        	this.setState({ email: value})
			        	this.validateField('email')
		          }
		        }
		        id={'email'}
		        /> }
	      </FormGroup>
      </div>
		);
	}


	render () {
		const { name, email, message, errorMessages } = this.state;

		const isMobile = window.innerWidth <= 600 ? true : false;

		const msg1 = 'Please feel free to reach out at any time! You can call me directly at XXX-XXX-XXXX, or you can send me an email through my nifty contact form. '
		const msg2 = 'Be sure to leave your name and email so I can get back to you!';
		return (
			<div>
			  <ContactTitle>
			    Contact Me Today!
			  </ContactTitle>
			  <ContactContent>
			    <p>
			      &nbsp;&nbsp;&nbsp;&nbsp;{msg1}
			    </p>
			  </ContactContent>
        <ContactContent2>
			    <p>
			      &nbsp;&nbsp;&nbsp;&nbsp;{msg2}
			    </p>
			  </ContactContent2>
			  {isMobile ?
			  	this.renderNameAndEmailFields() :
	        (<NameAndEmail>
					  <FormGroup> 
					    {errorMessages.name ?
				      <Input
				        placeholder="Name field cannot be blank!"
				        error={errorMessages.name}
				        value={name} 
				        onChange={({ target: { value } }) => {
					        	this.setState({ name: value})
					        	this.validateField('name')
				          }
				        }
				        id={'name'}
				        /> : 
				        <Input
				        placeholder="Please provide your name"
				        error={errorMessages.name}
				        value={name} 
				        onChange={({ target: { value } }) => {
					        	this.setState({ name: value})
					        	this.validateField('name')
				          }
				        }
				        id={'name'}
				        />}
			      </FormGroup>
				    <FormGroup>
				      {errorMessages.email ?
				      <Input
				        placeholder="Please enter a valid email!"
				        error={errorMessages.email}
				        value={email}
				        onChange={({ target: { value } }) => {
					        	this.setState({ email: value})
					        	this.validateField('email')
				          }
				        }
				        id={'email'}
				        /> :
				        <Input
				        placeholder="Please provide your email"
				        error={errorMessages.email}
				        value={email}
				        onChange={({ target: { value } }) => {
					        	this.setState({ email: value})
					        	this.validateField('email')
				          }
				        }
				        id={'email'}
				        /> }
			      </FormGroup>
	        </NameAndEmail>)
			  }
        <MessageBox>
	        <FormGroupMessage>
			      <TextArea 
			        placeholder="Please leave a message"
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
			      <SendButtonWrapper>
				      <SendButton
				        onClick={(e) => this.sendForm(e)}
				        >
				       Send
				      </SendButton>
			      </SendButtonWrapper>
	        </FormGroupMessage>
        </MessageBox>
			</div>
		);
	}
}

export default ContactComponent;