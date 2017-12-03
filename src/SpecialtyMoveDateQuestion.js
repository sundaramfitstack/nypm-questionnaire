import React from 'react';

class SpecialtyMoveDateQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.specialtyMoveDateOnChange = this.specialtyMoveDateOnChange.bind(this);
    this.specialtyMoveDateNextButtonOnClick = this.specialtyMoveDateNextButtonOnClick.bind(this);
  }
  

  
  specialtyMoveDateOnChange(event){
    this.props.specialtyMoveDateOnChange(event.target.value);
  }
  specialtyMoveDateNextButtonOnClick(event){
    this.props.specialtyMoveDateNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">What is your preferred moving date?</span>
        <br/>
        
        <input type="text" className="" onChange={this.specialtyMoveDateOnChange} placeholder="MM/DD/YY" />
        <br />

        

        
        <button className="" onClick={this.specialtyMoveDateNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveDateQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import SpecialtyMoveDateQuestion from './SpecialtyMoveDateQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'specialty_move_date' : '',



/* Move these statements to the constructor of the parent class */

this.specialtyMoveDateOnChange = this.specialtyMoveDateOnChange.bind(this);
this.specialtyMoveDateNextButtonOnClick = this.specialtyMoveDateNextButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

specialtyMoveDateOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
specialtyMoveDateNextButtonOnClick(text){
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
    <SpecialtyMoveDateQuestion
    
      specialty_move_date={this.state.specialty_move_date}
    
      specialtyMoveDateOnChange={this.specialtyMoveDateOnChange}
      specialtyMoveDateNextButtonOnClick={this.specialtyMoveDateNextButtonOnClick}
    />
  </div>
);