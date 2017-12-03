import React from 'react';

class HomeMoveTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.regularHomeMovingTypeButtonOnClick = this.regularHomeMovingTypeButtonOnClick.bind(this);
    this.fullServiceHomeMovingTypeButtonOnClick = this.fullServiceHomeMovingTypeButtonOnClick.bind(this);
  }
  

  
  regularHomeMovingTypeButtonOnClick(event){
    this.props.regularHomeMovingTypeButtonOnClick(event.target.value);
  }
  fullServiceHomeMovingTypeButtonOnClick(event){
    this.props.fullServiceHomeMovingTypeButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Home moving it is! What type of move would you like?</span>
        <br/>
        

        

        
        <button className="" onClick={this.regularHomeMovingTypeButtonOnClick}>Regular</button>
        <br />
        <button className="" onClick={this.fullServiceHomeMovingTypeButtonOnClick}>Full Service</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveTypeQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import HomeMoveTypeQuestion from './HomeMoveTypeQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'home_moving_type' : '',



/* Move these statements to the constructor of the parent class */

this.regularHomeMovingTypeButtonOnClick = this.regularHomeMovingTypeButtonOnClick.bind(this);
this.fullServiceHomeMovingTypeButtonOnClick = this.fullServiceHomeMovingTypeButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

regularHomeMovingTypeButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
fullServiceHomeMovingTypeButtonOnClick(text){
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
    <HomeMoveTypeQuestion
    
      home_moving_type={this.state.home_moving_type}
    
      regularHomeMovingTypeButtonOnClick={this.regularHomeMovingTypeButtonOnClick}
      fullServiceHomeMovingTypeButtonOnClick={this.fullServiceHomeMovingTypeButtonOnClick}
    />
  </div>
);