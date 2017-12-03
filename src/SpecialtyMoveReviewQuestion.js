import React from 'react';

class SpecialtyMoveReviewQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.specialtyMoveReviewTextOnChange = this.specialtyMoveReviewTextOnChange.bind(this);
    this.specialtyMoveSubmitButtonOnClick = this.specialtyMoveSubmitButtonOnClick.bind(this);
  }
  

  
  specialtyMoveReviewTextOnChange(event){
    this.props.specialtyMoveReviewTextOnChange(event.target.value);
  }
  specialtyMoveSubmitButtonOnClick(event){
    this.props.specialtyMoveSubmitButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Let’s quickly review the information for your specialty move free quote:</span>
        <br/>
        
        <input type="text" className="" onChange={this.specialtyMoveReviewTextOnChange} placeholder="" />
        <br />

        

        
        <button className="" onClick={this.specialtyMoveSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveReviewQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import SpecialtyMoveReviewQuestion from './SpecialtyMoveReviewQuestion.js';






/* Move these statements to the constructor of the parent class */

this.specialtyMoveReviewTextOnChange = this.specialtyMoveReviewTextOnChange.bind(this);
this.specialtyMoveSubmitButtonOnClick = this.specialtyMoveSubmitButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

specialtyMoveReviewTextOnChange(text){
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
    <SpecialtyMoveReviewQuestion
    
    
      specialtyMoveReviewTextOnChange={this.specialtyMoveReviewTextOnChange}
      specialtyMoveSubmitButtonOnClick={this.specialtyMoveSubmitButtonOnClick}
    />
  </div>
);