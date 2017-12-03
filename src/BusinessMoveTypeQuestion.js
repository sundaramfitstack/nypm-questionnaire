import React from 'react';

class BusinessMoveTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.regularBusinessTypeButtonOnClick = this.regularBusinessTypeButtonOnClick.bind(this);
    this.fullServiceBusinessTypeButtonOnClick = this.fullServiceBusinessTypeButtonOnClick.bind(this);
  }
  

  
  regularBusinessTypeButtonOnClick(event){
    this.props.regularBusinessTypeButtonOnClick(event.target.value);
  }
  fullServiceBusinessTypeButtonOnClick(event){
    this.props.fullServiceBusinessTypeButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Business moving it is! What type of move would you like?</span>
        <br/>
        

        

        
        <button className="" onClick={this.regularBusinessTypeButtonOnClick}>Regular</button>
        <br />
        <button className="" onClick={this.fullServiceBusinessTypeButtonOnClick}>Full Service</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveTypeQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import BusinessMoveTypeQuestion from './BusinessMoveTypeQuestion.js';






/* Move these statements to the constructor of the parent class */

this.regularBusinessTypeButtonOnClick = this.regularBusinessTypeButtonOnClick.bind(this);
this.fullServiceBusinessTypeButtonOnClick = this.fullServiceBusinessTypeButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

regularBusinessTypeButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
fullServiceBusinessTypeButtonOnClick(text){
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
    <BusinessMoveTypeQuestion
    
    
      regularBusinessTypeButtonOnClick={this.regularBusinessTypeButtonOnClick}
      fullServiceBusinessTypeButtonOnClick={this.fullServiceBusinessTypeButtonOnClick}
    />
  </div>
);