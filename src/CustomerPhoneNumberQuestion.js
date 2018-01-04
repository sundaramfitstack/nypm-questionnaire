import React from 'react';

class CustomerPhoneNumberQuestion extends React.Component {

  constructor(props) {
    
    super(props);    
    this.phoneNumberTextboxOnChange = this.phoneNumberTextboxOnChange.bind(this);
    this.phoneNumberNextButtonOnClick = this.phoneNumberNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);

    this.phone = '';
  } 
  
  phoneNumberTextboxOnChange(event){
    this.phone = event.target.value.trim();
    this.props.phoneNumberTextboxOnChange(this.phone);
  }

  validatePhonenumber(inputtxt) {
    
    inputtxt = inputtxt.trim();

    if (inputtxt.length > 1){
      
      const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      
      if(inputtxt.match(phoneno)) {
        return true;
      }
    }

    return false;
  }

  phoneNumberNextButtonOnClick(){
    if (this.validatePhonenumber(this.phone)){
      this.props.phoneNumberNextButtonOnClick();
    }
    else {
      alert("Please provide a valid phone number");  
      document.getElementById("customer-phone").focus();
    }
  }

  componentDidMount(){
     this.nameInput.focus(); 
  }

  closeButtonOnClick(){
    this.props.closeButtonOnClick();
  }

  backButtonOnClick(){
    this.props.backButtonOnClick();
  }

  render(){
    return (
      <div>
        <div className="nav-container">
          <div className="back-button">
            <span className="back-button" onClick={this.backButtonOnClick}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
          </div>
          <div className="close-button">
            <span className="close-button" onClick={this.closeButtonOnClick}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">And what’s the best phone number to reach you?</span>
        <br/>
        <br/>        
        <input id="customer-phone" type="input" onChange={this.phoneNumberTextboxOnChange} placeholder="Phone number" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.phoneNumberNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default CustomerPhoneNumberQuestion;