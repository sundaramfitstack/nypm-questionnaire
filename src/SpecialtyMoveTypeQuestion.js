import React from 'react';

class SpecialtyMoveTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.regularSpecialtyMoveButtonOnClick = this.regularSpecialtyMoveButtonOnClick.bind(this);
    this.fullServiceSpecialtyMoveButtonOnClick = this.fullServiceSpecialtyMoveButtonOnClick.bind(this);
  }
  

  
  regularSpecialtyMoveButtonOnClick(event){
    this.props.regularSpecialtyMoveButtonOnClick(event.target.value);
  }
  fullServiceSpecialtyMoveButtonOnClick(event){
    this.props.fullServiceSpecialtyMoveButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Specialty moving it is! What type of move would you like?</span>
        <br/>
        

        

        
        <button className="" onClick={this.regularSpecialtyMoveButtonOnClick}>Regular</button>
        <br />
        <button className="" onClick={this.fullServiceSpecialtyMoveButtonOnClick}>Full Service</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveTypeQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import SpecialtyMoveTypeQuestion from './SpecialtyMoveTypeQuestion.js';






/* Move these statements to the constructor of the parent class */

this.regularSpecialtyMoveButtonOnClick = this.regularSpecialtyMoveButtonOnClick.bind(this);
this.fullServiceSpecialtyMoveButtonOnClick = this.fullServiceSpecialtyMoveButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

regularSpecialtyMoveButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
fullServiceSpecialtyMoveButtonOnClick(text){
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
    <SpecialtyMoveTypeQuestion
    
    
      regularSpecialtyMoveButtonOnClick={this.regularSpecialtyMoveButtonOnClick}
      fullServiceSpecialtyMoveButtonOnClick={this.fullServiceSpecialtyMoveButtonOnClick}
    />
  </div>
);