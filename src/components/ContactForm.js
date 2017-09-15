import React, {Component} from 'react';
import '../stylesheets/components/form.css';

const reactFormContainer = document.querySelector('.react-form-container');

class ReactFormLabel extends Component {
  constructor() {
    super();
  }
  
  render() {
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
}

class ReactForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
  
  handleChange = (e) => {
    let newState = {};

    newState[e.target.name] = e.target.value;

    this.setState(newState);
  };
  
  handleSubmit = (e, message) => {
    let formData = {
      formSender: this.state.name,
      formEmail: this.state.email,
      formSubject: this.state.subject,
      formMessage: this.state.message
    }
    console.log(formData);
    if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
      return false;
    }
 
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  render() {
    return(
      <form action="https://getform.org/f/c908e10c-60c2-4f94-a24e-8bf9b117a1e6" className='react-form' onSubmit={this.handleSubmit} method="POST">
        <h1>Contact Us!</h1>
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formName' title='Name:' />

          <input id='formName' className='form-input' name='name' type='text' ref='formName' required onChange={this.handleChange} value={this.state.name} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formEmail' title='Email:' />

          <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formSubject' title='Subject:'/>

          <input id='formSubject' className='form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
        </fieldset>
        
        <fieldset className='form-group'>
          <ReactFormLabel htmlFor='formMessage' title='Message:' />

          <textarea id='formMessage' className='form-textarea' name='message' required onChange={this.handleChange}></textarea>
        </fieldset>
        
        <div className='form-group'>
          <input id='formButton' className='btn' type='submit' placeholder='Send message' />
        </div>
      </form>
    )
  }
};

export default ReactForm ;
