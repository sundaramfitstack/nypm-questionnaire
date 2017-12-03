import React from 'react';

class BusinessMoveSizeQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.businessMoveSize2000ButtonOnClick = this.businessMoveSize2000ButtonOnClick.bind(this);
    this.businessMoveSize3000ButtonOnClick = this.businessMoveSize3000ButtonOnClick.bind(this);
    this.businessMoveSize4000ButtonOnClick = this.businessMoveSize4000ButtonOnClick.bind(this);
  }
  

  
  businessMoveSize2000ButtonOnClick(event){
    this.props.businessMoveSize2000ButtonOnClick(event.target.value);
  }
  businessMoveSize3000ButtonOnClick(event){
    this.props.businessMoveSize3000ButtonOnClick(event.target.value);
  }
  businessMoveSize4000ButtonOnClick(event){
    this.props.businessMoveSize4000ButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">And what’s the size of the office at [business_move_source_address]?</span>
        <br/>
        

        

        
        <button className="" onClick={this.businessMoveSize2000ButtonOnClick}>< 2,000 sqft</button>
        <br />
        <button className="" onClick={this.businessMoveSize3000ButtonOnClick}>2,000 - 4,000 sqft</button>
        <br />
        <button className="" onClick={this.businessMoveSize4000ButtonOnClick}>> 4,000 sqft</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveSizeQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import BusinessMoveSizeQuestion from './BusinessMoveSizeQuestion.js';






/* Move these statements to the constructor of the parent class */

this.businessMoveSize2000ButtonOnClick = this.businessMoveSize2000ButtonOnClick.bind(this);
this.businessMoveSize3000ButtonOnClick = this.businessMoveSize3000ButtonOnClick.bind(this);
this.businessMoveSize4000ButtonOnClick = this.businessMoveSize4000ButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

businessMoveSize2000ButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
businessMoveSize3000ButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
businessMoveSize4000ButtonOnClick(text){
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
    <BusinessMoveSizeQuestion
    
    
      businessMoveSize2000ButtonOnClick={this.businessMoveSize2000ButtonOnClick}
      businessMoveSize3000ButtonOnClick={this.businessMoveSize3000ButtonOnClick}
      businessMoveSize4000ButtonOnClick={this.businessMoveSize4000ButtonOnClick}
    />
  </div>
);