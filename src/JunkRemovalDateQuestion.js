import React from 'react';

class JunkRemovalDateQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.junkRemovalDateTextOnChange = this.junkRemovalDateTextOnChange.bind(this);
    this.junkRemovalDateNextButtonOnClick = this.junkRemovalDateNextButtonOnClick.bind(this);
  }
  

  
  junkRemovalDateTextOnChange(event){
    this.props.junkRemovalDateTextOnChange(event.target.value);
  }
  junkRemovalDateNextButtonOnClick(event){
    this.props.junkRemovalDateNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Junk removal it is! What is your preferred pickup date?</span>
        <br/>
        
        <input type="text" className="" onChange={this.junkRemovalDateTextOnChange} placeholder="MM/DD/YY" />
        <br />

        

        
        <button className="" onClick={this.junkRemovalDateNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default JunkRemovalDateQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import JunkRemovalDateQuestion from './JunkRemovalDateQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'junk_removal_date' : '',



/* Move these statements to the constructor of the parent class */

this.junkRemovalDateTextOnChange = this.junkRemovalDateTextOnChange.bind(this);
this.junkRemovalDateNextButtonOnClick = this.junkRemovalDateNextButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

junkRemovalDateTextOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
junkRemovalDateNextButtonOnClick(text){
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
    <JunkRemovalDateQuestion
    
      junk_removal_date={this.state.junk_removal_date}
    
      junkRemovalDateTextOnChange={this.junkRemovalDateTextOnChange}
      junkRemovalDateNextButtonOnClick={this.junkRemovalDateNextButtonOnClick}
    />
  </div>
);