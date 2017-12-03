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
  phoneNumberNextButtonOnClick(event){
    this.props.phoneNumberNextButtonOnClick(event.target.value);
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

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import CustomerPhoneNumberQuestion from './CustomerPhoneNumberQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'customer_phone' : '',



/* Move these statements to the constructor of the parent class */

this.phoneNumberTextboxOnChange = this.phoneNumberTextboxOnChange.bind(this);
this.phoneNumberNextButtonOnClick = this.phoneNumberNextButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

phoneNumberTextboxOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
phoneNumberNextButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}


return (
  <div>
    <CustomerPhoneNumberQuestion
    
      customer_phone={this.state.customer_phone}
    
      phoneNumberTextboxOnChange={this.phoneNumberTextboxOnChange}
      phoneNumberNextButtonOnClick={this.phoneNumberNextButtonOnClick}
    />
  </div>
);