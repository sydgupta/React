import React, { Component } from 'react';
import TextBox from './Input/InputBox';
import Textarea from './Textarea/Textarea';
import SelectBox from './Select/SelectBox';
import validate from './validate';
import './Forms.scss';

class Forms extends Component {
  
  constructor() {
    super();
  
    this.state = {
      formIsValid: false,
      formControls: {
          name: {
            value: '',
            placeholder: 'Name',
            valid: false,
            touched: false,
            validationRules: {
                minLength: 3,
                isRequired: true
            },
            errorMsgs: {
              minLength: 'Field name must be of atleast 3 letters.',
              isRequired: 'Field name is required.'
            }
          },

          email: {
            value: '',
            placeholder: 'Email',
            valid: false,
            touched: false,
            validationRules: {
                minLength: 3,
                isRequired: true,
                isEmail: true
            },
            errorMsgs: {
              isRequired: 'Email is required.',
              isEmail: 'Email must be of proper format (abcd@xyz.com)'
            }
          },

          phone: {
            value: '',
            placeholder: 'Mobile Number',
            valid: false,
            touched: false,
            validationRules: {
                minLength: 10,
                isRequired: true,
                minValue: 0
            },
            errorMsgs: {
              minLength: 'Mobile number must be of atleast 3 letters.',
              isRequired: 'Mobile number is required.',
              minValue: 'Min value must not be less than 0'
            }
          },

          gender: {
            value: '',
            placeholder: 'What is your gender',
            valid: false,
            touched: false,
            validationRules: {
              isRequired: true,
            },
            errorMsgs: {
              isRequired: 'Gender is required.'
            },
            options: [
              { value: 'male', displayValue: 'Male' },
              { value: 'female', displayValue: 'Female'}
            ]
          },

          message: {
            value: '',
            placeholder: 'Message',
            valid: false,
            touched: false,
            validationRules: {
                minLength: 3,
                maxLength: 250
            },
            errorMsgs: {
              minLength: 'Message must be of atleast 3 letters.',
              maxLength: 'Message should not be more than 250 letters.'
            }
          },
      }
    }
    
    this.changeHandler = this.changeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }


  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;
    for (let control in updatedControls) {
      formIsValid = updatedControls[control].valid && formIsValid;
    }
  
    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
  }
  
  formSubmitHandler = () => {
    console.dir(this.state.formControls);
  }

  
  render() {
      return (  
          <div className="form-wrapper">
            <h3>Add Field</h3>
            <div className="form-container">
              <div className="input-div">
                <label>Name</label>
                <TextBox name="name" 
                          placeholder={this.state.formControls.name.placeholder}
                          value={this.state.formControls.name.value}
                          onChange={this.changeHandler}
                          touched={this.state.formControls.name.touched}
                          valid={this.state.formControls.name.valid}
                          type="text" />
                </div>

                <div className="input-div">
                  <label>Email</label>
                  <TextBox name="email" 
                            placeholder={this.state.formControls.email.placeholder}
                            value={this.state.formControls.email.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.email.touched}
                            valid={this.state.formControls.email.valid}
                            type="email" />
                </div>

                <div className="input-div">
                  <label>Phone</label>
                  <TextBox name="phone" 
                            placeholder={this.state.formControls.phone.placeholder}
                            value={this.state.formControls.phone.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.phone.touched}
                            valid={this.state.formControls.phone.valid}
                            type="number" />
                </div>

                <div className="input-div">
                  <label>Gender</label>
                  <SelectBox name="gender"
                    value={this.state.formControls.gender.value}
                    onChange={this.changeHandler}
                    options={this.state.formControls.gender.options}
                    touched={this.state.formControls.gender.touched}
                    valid={this.state.formControls.gender.valid}
                  />
                </div>

                <div className="input-div">
                  <label>Message</label>
                  <Textarea name="message"
                    placeholder={this.state.formControls.message.placeholder}
                    value={this.state.formControls.message.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.message.touched}
                    valid={this.state.formControls.message.valid}
                  />
                </div>
                <div className="btn-container">
                  <button onClick={this.formSubmitHandler} disabled={!this.state.formIsValid}>Submit</button>
                </div>
            </div>
          </div>
      );
  }

}

export default Forms;