import React from 'react';

class HomeMoveSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.homeMovingSourceAddressTextboxOnChange = this.homeMovingSourceAddressTextboxOnChange.bind(this);
    this.homeMovingSourceAddressNextButtonOnClick = this.homeMovingSourceAddressNextButtonOnClick.bind(this);
  }
  

  
  homeMovingSourceAddressTextboxOnChange(event){
    this.props.homeMovingSourceAddressTextboxOnChange(event.target.value);
  }
  homeMovingSourceAddressNextButtonOnClick(event){
    this.props.homeMovingSourceAddressNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Where would you like us to pick up your things?</span>
        <br/>
        
        <input type="text" className="" onChange={this.homeMovingSourceAddressTextboxOnChange} placeholder=""Moving from" address" />
        <br />

        

        
        <button className="" onClick={this.homeMovingSourceAddressNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveSourceAddressQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import HomeMoveSourceAddressQuestion from './HomeMoveSourceAddressQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'source_address' : '',



/* Move these statements to the constructor of the parent class */

this.homeMovingSourceAddressTextboxOnChange = this.homeMovingSourceAddressTextboxOnChange.bind(this);
this.homeMovingSourceAddressNextButtonOnClick = this.homeMovingSourceAddressNextButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

homeMovingSourceAddressTextboxOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
homeMovingSourceAddressNextButtonOnClick(text){
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
    <HomeMoveSourceAddressQuestion
    
      source_address={this.state.source_address}
    
      homeMovingSourceAddressTextboxOnChange={this.homeMovingSourceAddressTextboxOnChange}
      homeMovingSourceAddressNextButtonOnClick={this.homeMovingSourceAddressNextButtonOnClick}
    />
  </div>
);