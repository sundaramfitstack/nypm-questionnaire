import React from 'react';

class CustomerNameQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.customerNameTextboxOnChange = this.customerNameTextboxOnChange.bind(this);
    this.customerNameNextButtonOnClick = this.customerNameNextButtonOnClick.bind(this);
  }
  

  
  customerNameTextboxOnChange(event){
    this.props.customerNameTextboxOnChange(event.target.value);
  }
  customerNameNextButtonOnClick(event){
    this.props.customerNameNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Let’s get started. We’re Name Your Price Movers, what’s your name?</span>
        <br/>
        
        <input type="text" className="" onChange={this.customerNameTextboxOnChange} placeholder="Enter your first and last name" />
        <br />

        

        
        <button className="" onClick={this.customerNameNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default CustomerNameQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import CustomerNameQuestion from './CustomerNameQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'customer_name' : '',



/* Move these statements to the constructor of the parent class */

this.customerNameTextboxOnChange = this.customerNameTextboxOnChange.bind(this);
this.customerNameNextButtonOnClick = this.customerNameNextButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

customerNameTextboxOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
customerNameNextButtonOnClick(text){
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
    <CustomerNameQuestion
    
      customer_name={this.state.customer_name}
    
      customerNameTextboxOnChange={this.customerNameTextboxOnChange}
      customerNameNextButtonOnClick={this.customerNameNextButtonOnClick}
    />
  </div>
);