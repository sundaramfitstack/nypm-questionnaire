import React from 'react';

class CustomerEmailQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.emailTextboxOnChange = this.emailTextboxOnChange.bind(this);
    this.customerEmailNextButtonOnClick = this.customerEmailNextButtonOnClick.bind(this);
  }
  

  
  emailTextboxOnChange(event){
    this.props.emailTextboxOnChange(event.target.value);
  }
  customerEmailNextButtonOnClick(event){
    this.props.customerEmailNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Hi [customer_name], great to meet you! What email should we use to send your free quote?</span>
        <br/>
        
        <input type="text" className="" onChange={this.emailTextboxOnChange} placeholder="Email address" />
        <br />

        

        
        <button className="" onClick={this.customerEmailNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default CustomerEmailQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import CustomerEmailQuestion from './CustomerEmailQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'customer_email' : '',



/* Move these statements to the constructor of the parent class */

this.emailTextboxOnChange = this.emailTextboxOnChange.bind(this);
this.customerEmailNextButtonOnClick = this.customerEmailNextButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

emailTextboxOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
customerEmailNextButtonOnClick(text){
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
    <CustomerEmailQuestion
    
      customer_email={this.state.customer_email}
    
      emailTextboxOnChange={this.emailTextboxOnChange}
      customerEmailNextButtonOnClick={this.customerEmailNextButtonOnClick}
    />
  </div>
);