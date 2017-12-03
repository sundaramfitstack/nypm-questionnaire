import React from 'react';

class JunkRemovalReviewQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.junkRemovalReviewTextOnChange = this.junkRemovalReviewTextOnChange.bind(this);
    this.specialtyMoveSubmitButtonOnClick = this.specialtyMoveSubmitButtonOnClick.bind(this);
  }
  

  
  junkRemovalReviewTextOnChange(event){
    this.props.junkRemovalReviewTextOnChange(event.target.value);
  }
  specialtyMoveSubmitButtonOnClick(event){
    this.props.specialtyMoveSubmitButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Let’s quickly review the information for your specialty move free quote:</span>
        <br/>
        
        <input type="text" className="" onChange={this.junkRemovalReviewTextOnChange} placeholder="" />
        <br />

        

        
        <button className="" onClick={this.specialtyMoveSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default JunkRemovalReviewQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import JunkRemovalReviewQuestion from './JunkRemovalReviewQuestion.js';






/* Move these statements to the constructor of the parent class */

this.junkRemovalReviewTextOnChange = this.junkRemovalReviewTextOnChange.bind(this);
this.specialtyMoveSubmitButtonOnClick = this.specialtyMoveSubmitButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

junkRemovalReviewTextOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
specialtyMoveSubmitButtonOnClick(text){
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
    <JunkRemovalReviewQuestion
    
    
      junkRemovalReviewTextOnChange={this.junkRemovalReviewTextOnChange}
      specialtyMoveSubmitButtonOnClick={this.specialtyMoveSubmitButtonOnClick}
    />
  </div>
);