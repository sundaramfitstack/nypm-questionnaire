import React from 'react';

class BusinessMoveReviewQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.businessMoveReviewTextOnChanage = this.businessMoveReviewTextOnChanage.bind(this);
    this.businessMoveSubmitButtonOnClick = this.businessMoveSubmitButtonOnClick.bind(this);
  }
  

  
  businessMoveReviewTextOnChanage(event){
    this.props.businessMoveReviewTextOnChanage(event.target.value);
  }
  businessMoveSubmitButtonOnClick(event){
    this.props.businessMoveSubmitButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Let’s quickly review the information for your business move free quote:</span>
        <br/>
        
        <input type="text" className="" onChange={this.businessMoveReviewTextOnChanage} placeholder="" />
        <br />

        

        
        <button className="" onClick={this.businessMoveSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveReviewQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import BusinessMoveReviewQuestion from './BusinessMoveReviewQuestion.js';






/* Move these statements to the constructor of the parent class */

this.businessMoveReviewTextOnChanage = this.businessMoveReviewTextOnChanage.bind(this);
this.businessMoveSubmitButtonOnClick = this.businessMoveSubmitButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

businessMoveReviewTextOnChanage(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
businessMoveSubmitButtonOnClick(text){
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
    <BusinessMoveReviewQuestion
    
    
      businessMoveReviewTextOnChanage={this.businessMoveReviewTextOnChanage}
      businessMoveSubmitButtonOnClick={this.businessMoveSubmitButtonOnClick}
    />
  </div>
);