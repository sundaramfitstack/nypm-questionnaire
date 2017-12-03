import React from 'react';

class BusinessMoveAdditionalInfoQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.businessMoveAdditionalInfoTextareaOnChange = this.businessMoveAdditionalInfoTextareaOnChange.bind(this);
    this.businessMoveAdditionalInfoNextButtonOnClick = this.businessMoveAdditionalInfoNextButtonOnClick.bind(this);
    this.businessMoveAdditionalInfoSkipButtonOnClick = this.businessMoveAdditionalInfoSkipButtonOnClick.bind(this);
  }
  

  
  businessMoveAdditionalInfoTextareaOnChange(event){
    this.props.businessMoveAdditionalInfoTextareaOnChange(event.target.value);
  }
  businessMoveAdditionalInfoNextButtonOnClick(event){
    this.props.businessMoveAdditionalInfoNextButtonOnClick(event.target.value);
  }
  businessMoveAdditionalInfoSkipButtonOnClick(event){
    this.props.businessMoveAdditionalInfoSkipButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Finally, is there anything else you’d like us to know about the move?</span>
        <br/>
        

        
        <textarea className="" onChange={this.businessMoveAdditionalInfoTextareaOnChange}>Additional stops, special place to park, etc.</textarea>
        <br />

        
        <button className="" onClick={this.businessMoveAdditionalInfoNextButtonOnClick}>Next</button>
        <br />
        <button className="" onClick={this.businessMoveAdditionalInfoSkipButtonOnClick}>Skip</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveAdditionalInfoQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import BusinessMoveAdditionalInfoQuestion from './BusinessMoveAdditionalInfoQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'business_additional_info' : '',



/* Move these statements to the constructor of the parent class */

this.businessMoveAdditionalInfoTextareaOnChange = this.businessMoveAdditionalInfoTextareaOnChange.bind(this);
this.businessMoveAdditionalInfoNextButtonOnClick = this.businessMoveAdditionalInfoNextButtonOnClick.bind(this);
this.businessMoveAdditionalInfoSkipButtonOnClick = this.businessMoveAdditionalInfoSkipButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

businessMoveAdditionalInfoTextareaOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
businessMoveAdditionalInfoNextButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
businessMoveAdditionalInfoSkipButtonOnClick(text){
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
    <BusinessMoveAdditionalInfoQuestion
    
      business_additional_info={this.state.business_additional_info}
    
      businessMoveAdditionalInfoTextareaOnChange={this.businessMoveAdditionalInfoTextareaOnChange}
      businessMoveAdditionalInfoNextButtonOnClick={this.businessMoveAdditionalInfoNextButtonOnClick}
      businessMoveAdditionalInfoSkipButtonOnClick={this.businessMoveAdditionalInfoSkipButtonOnClick}
    />
  </div>
);