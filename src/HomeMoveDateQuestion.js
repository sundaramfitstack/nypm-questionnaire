import React from 'react';

class HomeMoveDateQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.homeMovingDateTextboxOnChange = this.homeMovingDateTextboxOnChange.bind(this);
    this.homeMovingDateNextButtonOnClick = this.homeMovingDateNextButtonOnClick.bind(this);
  }
  

  
  homeMovingDateTextboxOnChange(event){
    this.props.homeMovingDateTextboxOnChange(event.target.value);
  }
  homeMovingDateNextButtonOnClick(event){
    this.props.homeMovingDateNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">What is your preferred moving date?</span>
        <br/>
        
        <input type="text" className="" onChange={this.homeMovingDateTextboxOnChange} placeholder="MM/DD/YY" />
        <br />

        

        
        <button className="" onClick={this.homeMovingDateNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveDateQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import HomeMoveDateQuestion from './HomeMoveDateQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'moving_date' : '',



/* Move these statements to the constructor of the parent class */

this.homeMovingDateTextboxOnChange = this.homeMovingDateTextboxOnChange.bind(this);
this.homeMovingDateNextButtonOnClick = this.homeMovingDateNextButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

homeMovingDateTextboxOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
homeMovingDateNextButtonOnClick(text){
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
    <HomeMoveDateQuestion
    
      moving_date={this.state.moving_date}
    
      homeMovingDateTextboxOnChange={this.homeMovingDateTextboxOnChange}
      homeMovingDateNextButtonOnClick={this.homeMovingDateNextButtonOnClick}
    />
  </div>
);