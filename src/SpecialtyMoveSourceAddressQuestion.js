import React from 'react';

class SpecialtyMoveSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.specialtyMoveSourceAddressOnChange = this.specialtyMoveSourceAddressOnChange.bind(this);
    this.specialtyMoveSourceAddressButtonOnClick = this.specialtyMoveSourceAddressButtonOnClick.bind(this);
  }
  

  
  specialtyMoveSourceAddressOnChange(event){
    this.props.specialtyMoveSourceAddressOnChange(event.target.value);
  }
  specialtyMoveSourceAddressButtonOnClick(event){
    this.props.specialtyMoveSourceAddressButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Where will your specialty move start?</span>
        <br/>
        
        <input type="text" className="" onChange={this.specialtyMoveSourceAddressOnChange} placeholder=""Moving from" address" />
        <br />

        

        
        <button className="" onClick={this.specialtyMoveSourceAddressButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveSourceAddressQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import SpecialtyMoveSourceAddressQuestion from './SpecialtyMoveSourceAddressQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'specialty_move_source_address' : '',



/* Move these statements to the constructor of the parent class */

this.specialtyMoveSourceAddressOnChange = this.specialtyMoveSourceAddressOnChange.bind(this);
this.specialtyMoveSourceAddressButtonOnClick = this.specialtyMoveSourceAddressButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

specialtyMoveSourceAddressOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
specialtyMoveSourceAddressButtonOnClick(text){
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
    <SpecialtyMoveSourceAddressQuestion
    
      specialty_move_source_address={this.state.specialty_move_source_address}
    
      specialtyMoveSourceAddressOnChange={this.specialtyMoveSourceAddressOnChange}
      specialtyMoveSourceAddressButtonOnClick={this.specialtyMoveSourceAddressButtonOnClick}
    />
  </div>
);