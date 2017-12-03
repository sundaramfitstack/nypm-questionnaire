import React from 'react';

class HomeMoveAdditionalInfoQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.homeMovingAdditionalInfoTextareaOnChange = this.homeMovingAdditionalInfoTextareaOnChange.bind(this);
    this.homeMovingAdditionalInfoNextButtonOnClick = this.homeMovingAdditionalInfoNextButtonOnClick.bind(this);
    this.homeMovingAdditionalInfoSkipButtonOnClick = this.homeMovingAdditionalInfoSkipButtonOnClick.bind(this);
  }
  

  
  homeMovingAdditionalInfoTextareaOnChange(event){
    this.props.homeMovingAdditionalInfoTextareaOnChange(event.target.value);
  }
  homeMovingAdditionalInfoNextButtonOnClick(event){
    this.props.homeMovingAdditionalInfoNextButtonOnClick(event.target.value);
  }
  homeMovingAdditionalInfoSkipButtonOnClick(event){
    this.props.homeMovingAdditionalInfoSkipButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Finally, is there anything else you’d like us to know about the move?</span>
        <br/>
        

        
        <textarea className="" onChange={this.homeMovingAdditionalInfoTextareaOnChange}>Budget</textarea>
        <br />

        
        <button className="" onClick={this.homeMovingAdditionalInfoNextButtonOnClick}>Next</button>
        <br />
        <button className="" onClick={this.homeMovingAdditionalInfoSkipButtonOnClick}>Skip</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveAdditionalInfoQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import HomeMoveAdditionalInfoQuestion from './HomeMoveAdditionalInfoQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'home_moving_additional_info' : '',



/* Move these statements to the constructor of the parent class */

this.homeMovingAdditionalInfoTextareaOnChange = this.homeMovingAdditionalInfoTextareaOnChange.bind(this);
this.homeMovingAdditionalInfoNextButtonOnClick = this.homeMovingAdditionalInfoNextButtonOnClick.bind(this);
this.homeMovingAdditionalInfoSkipButtonOnClick = this.homeMovingAdditionalInfoSkipButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

homeMovingAdditionalInfoTextareaOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
homeMovingAdditionalInfoNextButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
homeMovingAdditionalInfoSkipButtonOnClick(text){
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
    <HomeMoveAdditionalInfoQuestion
    
      home_moving_additional_info={this.state.home_moving_additional_info}
    
      homeMovingAdditionalInfoTextareaOnChange={this.homeMovingAdditionalInfoTextareaOnChange}
      homeMovingAdditionalInfoNextButtonOnClick={this.homeMovingAdditionalInfoNextButtonOnClick}
      homeMovingAdditionalInfoSkipButtonOnClick={this.homeMovingAdditionalInfoSkipButtonOnClick}
    />
  </div>
);