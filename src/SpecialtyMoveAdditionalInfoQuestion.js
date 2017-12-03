import React from 'react';

class SpecialtyMoveAdditionalInfoQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.specialtyMoveAdditionalInfoOnChange = this.specialtyMoveAdditionalInfoOnChange.bind(this);
    this.specialtyMoveAdditionalInfoButtonOnClick = this.specialtyMoveAdditionalInfoButtonOnClick.bind(this);
  }
  

  
  specialtyMoveAdditionalInfoOnChange(event){
    this.props.specialtyMoveAdditionalInfoOnChange(event.target.value);
  }
  specialtyMoveAdditionalInfoButtonOnClick(event){
    this.props.specialtyMoveAdditionalInfoButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Finally, is there anything else you’d like us to know about the move?</span>
        <br/>
        

        
        <textarea className="" onChange={this.specialtyMoveAdditionalInfoOnChange}>Additional stops, special place to park, etc.</textarea>
        <br />

        
        <button className="" onClick={this.specialtyMoveAdditionalInfoButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveAdditionalInfoQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import SpecialtyMoveAdditionalInfoQuestion from './SpecialtyMoveAdditionalInfoQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'specialty_move_additional_info' : '',



/* Move these statements to the constructor of the parent class */

this.specialtyMoveAdditionalInfoOnChange = this.specialtyMoveAdditionalInfoOnChange.bind(this);
this.specialtyMoveAdditionalInfoButtonOnClick = this.specialtyMoveAdditionalInfoButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

specialtyMoveAdditionalInfoOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
specialtyMoveAdditionalInfoButtonOnClick(text){
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
    <SpecialtyMoveAdditionalInfoQuestion
    
      specialty_move_additional_info={this.state.specialty_move_additional_info}
    
      specialtyMoveAdditionalInfoOnChange={this.specialtyMoveAdditionalInfoOnChange}
      specialtyMoveAdditionalInfoButtonOnClick={this.specialtyMoveAdditionalInfoButtonOnClick}
    />
  </div>
);