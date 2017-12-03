import React from 'react';

class BusinessMoveSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.businessMoveSourceAddressTextboxOnChange = this.businessMoveSourceAddressTextboxOnChange.bind(this);
    this.businessMoveSourceAddressNextButtonOnClick = this.businessMoveSourceAddressNextButtonOnClick.bind(this);
  }
  

  
  businessMoveSourceAddressTextboxOnChange(event){
    this.props.businessMoveSourceAddressTextboxOnChange(event.target.value);
  }
  businessMoveSourceAddressNextButtonOnClick(event){
    this.props.businessMoveSourceAddressNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Where will your business move start?</span>
        <br/>
        
        <input type="text" className="" onChange={this.businessMoveSourceAddressTextboxOnChange} placeholder=""Moving from" address" />
        <br />

        

        
        <button className="" onClick={this.businessMoveSourceAddressNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveSourceAddressQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import BusinessMoveSourceAddressQuestion from './BusinessMoveSourceAddressQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'business_source_address' : '',



/* Move these statements to the constructor of the parent class */

this.businessMoveSourceAddressTextboxOnChange = this.businessMoveSourceAddressTextboxOnChange.bind(this);
this.businessMoveSourceAddressNextButtonOnClick = this.businessMoveSourceAddressNextButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

businessMoveSourceAddressTextboxOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
businessMoveSourceAddressNextButtonOnClick(text){
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
    <BusinessMoveSourceAddressQuestion
    
      business_source_address={this.state.business_source_address}
    
      businessMoveSourceAddressTextboxOnChange={this.businessMoveSourceAddressTextboxOnChange}
      businessMoveSourceAddressNextButtonOnClick={this.businessMoveSourceAddressNextButtonOnClick}
    />
  </div>
);