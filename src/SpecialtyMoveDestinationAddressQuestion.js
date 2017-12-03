import React from 'react';

class SpecialtyMoveDestinationAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.specialtyMoveDestinationAddressOnChange = this.specialtyMoveDestinationAddressOnChange.bind(this);
    this.specialtyMoveSourceAddressButtonOnClick = this.specialtyMoveSourceAddressButtonOnClick.bind(this);
  }
  

  
  specialtyMoveDestinationAddressOnChange(event){
    this.props.specialtyMoveDestinationAddressOnChange(event.target.value);
  }
  specialtyMoveSourceAddressButtonOnClick(event){
    this.props.specialtyMoveSourceAddressButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Where would you like us to move your specialty item(s)?</span>
        <br/>
        
        <input type="text" className="" onChange={this.specialtyMoveDestinationAddressOnChange} placeholder=""Moving to" address" />
        <br />

        

        
        <button className="" onClick={this.specialtyMoveSourceAddressButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveDestinationAddressQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import SpecialtyMoveDestinationAddressQuestion from './SpecialtyMoveDestinationAddressQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'specialty_move_destination_address' : '',



/* Move these statements to the constructor of the parent class */

this.specialtyMoveDestinationAddressOnChange = this.specialtyMoveDestinationAddressOnChange.bind(this);
this.specialtyMoveSourceAddressButtonOnClick = this.specialtyMoveSourceAddressButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

specialtyMoveDestinationAddressOnChange(text){
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
    <SpecialtyMoveDestinationAddressQuestion
    
      specialty_move_destination_address={this.state.specialty_move_destination_address}
    
      specialtyMoveDestinationAddressOnChange={this.specialtyMoveDestinationAddressOnChange}
      specialtyMoveSourceAddressButtonOnClick={this.specialtyMoveSourceAddressButtonOnClick}
    />
  </div>
);