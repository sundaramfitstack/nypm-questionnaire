import React from 'react';

class HomeMoveBudgetQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.homeMovingBudgetTextboxOnChange = this.homeMovingBudgetTextboxOnChange.bind(this);
    this.homeMovingBudgetNextButtonOnClick = this.homeMovingBudgetNextButtonOnClick.bind(this);
    this.homeMovingBudgetSkipButtonOnClick = this.homeMovingBudgetSkipButtonOnClick.bind(this);
  }
  

  
  homeMovingBudgetTextboxOnChange(event){
    this.props.homeMovingBudgetTextboxOnChange(event.target.value);
  }
  homeMovingBudgetNextButtonOnClick(event){
    this.props.homeMovingBudgetNextButtonOnClick(event.target.value);
  }
  homeMovingBudgetSkipButtonOnClick(event){
    this.props.homeMovingBudgetSkipButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Is there a specific budget you’d like to stay within?  This is optional and won’t have any effect on the quote, however we’re always willing to work within a budget if you have one.</span>
        <br/>
        
        <input type="text" className="" onChange={this.homeMovingBudgetTextboxOnChange} placeholder="Budget" />
        <br />

        

        
        <button className="" onClick={this.homeMovingBudgetNextButtonOnClick}>Next</button>
        <br />
        <button className="" onClick={this.homeMovingBudgetSkipButtonOnClick}>Skip</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveBudgetQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import HomeMoveBudgetQuestion from './HomeMoveBudgetQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'budget' : '',



/* Move these statements to the constructor of the parent class */

this.homeMovingBudgetTextboxOnChange = this.homeMovingBudgetTextboxOnChange.bind(this);
this.homeMovingBudgetNextButtonOnClick = this.homeMovingBudgetNextButtonOnClick.bind(this);
this.homeMovingBudgetSkipButtonOnClick = this.homeMovingBudgetSkipButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

homeMovingBudgetTextboxOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
homeMovingBudgetNextButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
homeMovingBudgetSkipButtonOnClick(text){
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
    <HomeMoveBudgetQuestion
    
      budget={this.state.budget}
    
      homeMovingBudgetTextboxOnChange={this.homeMovingBudgetTextboxOnChange}
      homeMovingBudgetNextButtonOnClick={this.homeMovingBudgetNextButtonOnClick}
      homeMovingBudgetSkipButtonOnClick={this.homeMovingBudgetSkipButtonOnClick}
    />
  </div>
);