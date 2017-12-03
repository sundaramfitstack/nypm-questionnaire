import React from 'react';

class HomeMoveDestinationQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.homeMovingDestinationAddressTextboxOnChange = this.homeMovingDestinationAddressTextboxOnChange.bind(this);
    this.homeMovingDestinationAddressNextButtonOnClick = this.homeMovingDestinationAddressNextButtonOnClick.bind(this);
  }
  

  
  homeMovingDestinationAddressTextboxOnChange(event){
    this.props.homeMovingDestinationAddressTextboxOnChange(event.target.value);
  }
  homeMovingDestinationAddressNextButtonOnClick(event){
    this.props.homeMovingDestinationAddressNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Where would you like us to drop off your things?</span>
        <br/>
        
        <input type="text" className="" onChange={this.homeMovingDestinationAddressTextboxOnChange} placeholder=""Moving to" address" />
        <br />

        

        
        <button className="" onClick={this.homeMovingDestinationAddressNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveDestinationQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import HomeMoveDestinationQuestion from './HomeMoveDestinationQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'destination_address' : '',



/* Move these statements to the constructor of the parent class */

this.homeMovingDestinationAddressTextboxOnChange = this.homeMovingDestinationAddressTextboxOnChange.bind(this);
this.homeMovingDestinationAddressNextButtonOnClick = this.homeMovingDestinationAddressNextButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

homeMovingDestinationAddressTextboxOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
homeMovingDestinationAddressNextButtonOnClick(text){
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
    <HomeMoveDestinationQuestion
    
      destination_address={this.state.destination_address}
    
      homeMovingDestinationAddressTextboxOnChange={this.homeMovingDestinationAddressTextboxOnChange}
      homeMovingDestinationAddressNextButtonOnClick={this.homeMovingDestinationAddressNextButtonOnClick}
    />
  </div>
);