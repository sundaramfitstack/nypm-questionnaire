import React from 'react';

class CustomerPhoneNumberQuestion extends React.Component {

  constructor(props) {
    
    super(props);    
    this.phoneNumberTextboxOnChange = this.phoneNumberTextboxOnChange.bind(this);
    this.phoneNumberNextButtonOnClick = this.phoneNumberNextButtonOnClick.bind(this);
  } 
  
  phoneNumberTextboxOnChange(event){
    this.props.phoneNumberTextboxOnChange(event.target.value);
  }

  phoneNumberNextButtonOnClick(){
    this.props.phoneNumberNextButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">And what’s the best phone number to reach you?</span>
        <br/>        
        <input type="text" className="" onChange={this.phoneNumberTextboxOnChange} placeholder="Phone number" />
        <br />
        <button className="" onClick={this.phoneNumberNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default CustomerPhoneNumberQuestion;