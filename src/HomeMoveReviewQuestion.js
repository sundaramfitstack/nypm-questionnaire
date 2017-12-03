import React from 'react';

class HomeMoveReviewQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.homeMovingReviewTextOnChange = this.homeMovingReviewTextOnChange.bind(this);
    this.homeMovingSubmitButtonOnClick = this.homeMovingSubmitButtonOnClick.bind(this);
  }
  

  
  homeMovingReviewTextOnChange(event){
    this.props.homeMovingReviewTextOnChange(event.target.value);
  }
  homeMovingSubmitButtonOnClick(event){
    this.props.homeMovingSubmitButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Let’s quickly review the information for your free quote:</span>
        <br/>
        
        <input type="text" className="" onChange={this.homeMovingReviewTextOnChange} placeholder="Initial" />
        <br />

        

        
        <button className="" onClick={this.homeMovingSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveReviewQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import HomeMoveReviewQuestion from './HomeMoveReviewQuestion.js';






/* Move these statements to the constructor of the parent class */

this.homeMovingReviewTextOnChange = this.homeMovingReviewTextOnChange.bind(this);
this.homeMovingSubmitButtonOnClick = this.homeMovingSubmitButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

homeMovingReviewTextOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
homeMovingSubmitButtonOnClick(text){
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
    <HomeMoveReviewQuestion
    
    
      homeMovingReviewTextOnChange={this.homeMovingReviewTextOnChange}
      homeMovingSubmitButtonOnClick={this.homeMovingSubmitButtonOnClick}
    />
  </div>
);