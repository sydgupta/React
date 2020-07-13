import React, { Component } from 'react';
import TextBox from './Input/InputBox';
import validate from './validate';
import './Forms.scss';

class Forms extends Component {
  
  constructor() {
    super();
  
    this.state = {
      formIsValid: false,
      formControls: {
          fieldName: {
            value: '',
            placeholder: 'Field Name',
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

          farmName: {
            value: '',
            placeholder: 'Farm Name',
            valid: false,
            touched: false,
            validationRules: {
                minLength: 3,
                isRequired: true
            },
            errorMsgs: {
              minLength: 'Farm name must be of atleast 3 letters.',
              isRequired: 'Farm name is required.'
            }
          },

          crop: {
            value: '',
            placeholder: 'Crop Name',
            valid: false,
            touched: false,
            validationRules: {
                minLength: 3,
                isRequired: true
            },
            errorMsgs: {
              minLength: 'Crop name must be of atleast 3 letters.',
              isRequired: 'Crop name is required.'
            }
          },

          plantingDate: {
            value: '',
            placeholder: 'Planting DOB',
            valid: false,
            touched: false,
            validationRules: {
                isRequired: true
            },
            errorMsgs: {
              isRequired: 'Planting date is required.'
            }
          },

          brand: {
            value: '',
            placeholder: 'Brand',
            valid: false,
            touched: false,
            validationRules: {
                minLength: 3
            },
            errorMsgs: {
              minLength: 'Brand must be of atleast 3 letters.'
            }
          },

          product: {
            value: '',
            placeholder: 'Product',
            valid: false,
            touched: false,
            validationRules: {
                minLength: 3
            },
            errorMsgs: {
              minLength: 'Product name must be of atleast 3 letters.'
            }
          },

          avgPopulation: {
            value: '',
            placeholder: 'Average Population',
            valid: false,
            touched: false,
            validationRules: {
                minValue: 0
            },
            errorMsgs: {
              minValue: 'Min value must not be less than 0'
            }
          }
      }
    } 
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
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
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
                <label>Field Name</label>
                <TextBox name="fieldName" 
                          placeholder={this.state.formControls.fieldName.placeholder}
                          value={this.state.formControls.fieldName.value}
                          onChange={this.changeHandler}
                          touched={this.state.formControls.fieldName.touched}
                          valid={this.state.formControls.fieldName.valid}
                          type="text" />
                </div>

                <div className="input-div">
                  <label>Farm Name</label>
                  <TextBox name="farmName" 
                            placeholder={this.state.formControls.farmName.placeholder}
                            value={this.state.formControls.farmName.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.farmName.touched}
                            valid={this.state.formControls.farmName.valid}
                            type="text" />
                </div>

                <div className="input-div">
                  <label>Crop</label>
                  <TextBox name="crop" 
                            placeholder={this.state.formControls.crop.placeholder}
                            value={this.state.formControls.crop.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.crop.touched}
                            valid={this.state.formControls.crop.valid}
                            type="text" />
                </div>

                <div className="input-div">
                  <label>Planting Date</label>
                  <TextBox name="plantingDate" 
                            placeholder={this.state.formControls.plantingDate.placeholder}
                            value={this.state.formControls.plantingDate.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.plantingDate.touched}
                            valid={this.state.formControls.plantingDate.valid}
                            type="date" />
                </div>

                <div className="input-div">
                  <label>Brand</label>
                  <TextBox name="brand" 
                            placeholder={this.state.formControls.brand.placeholder}
                            value={this.state.formControls.brand.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.brand.touched}
                            valid={this.state.formControls.brand.valid}
                            type="text" />
                </div>

                <div className="input-div">
                  <label>Product</label>
                  <TextBox name="product" 
                            placeholder={this.state.formControls.product.placeholder}
                            value={this.state.formControls.product.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.product.touched}
                            valid={this.state.formControls.product.valid}
                            type="text" />
                </div>

                <div className="input-div">
                  <label>Average Population</label>
                  <TextBox name="avgPopulation" 
                            placeholder={this.state.formControls.avgPopulation.placeholder}
                            value={this.state.formControls.avgPopulation.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.avgPopulation.touched}
                            valid={this.state.formControls.avgPopulation.valid}
                            type="text" />
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