import React from 'react';

class JunkRemovalAddtionalInfoQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.junkRemovalAdditionalInfoTextOnChange = this.junkRemovalAdditionalInfoTextOnChange.bind(this);
    this.junkRemovalAdditionalInfoNextButtonOnClick = this.junkRemovalAdditionalInfoNextButtonOnClick.bind(this);
  }
  

  
  junkRemovalAdditionalInfoTextOnChange(event){
    this.props.junkRemovalAdditionalInfoTextOnChange(event.target.value);
  }
  junkRemovalAdditionalInfoNextButtonOnClick(event){
    this.props.junkRemovalAdditionalInfoNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Finally, is there anything else you’d like us to know about the junk removal pickup?</span>
        <br/>
        

        
        <textarea className="" onChange={this.junkRemovalAdditionalInfoTextOnChange}>Additional stops, special place to park, etc.</textarea>
        <br />

        
        <button className="" onClick={this.junkRemovalAdditionalInfoNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default JunkRemovalAddtionalInfoQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import JunkRemovalAddtionalInfoQuestion from './JunkRemovalAddtionalInfoQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'junk_removal_additional_info' : '',



/* Move these statements to the constructor of the parent class */

this.junkRemovalAdditionalInfoTextOnChange = this.junkRemovalAdditionalInfoTextOnChange.bind(this);
this.junkRemovalAdditionalInfoNextButtonOnClick = this.junkRemovalAdditionalInfoNextButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

junkRemovalAdditionalInfoTextOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
junkRemovalAdditionalInfoNextButtonOnClick(text){
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
    <JunkRemovalAddtionalInfoQuestion
    
      junk_removal_additional_info={this.state.junk_removal_additional_info}
    
      junkRemovalAdditionalInfoTextOnChange={this.junkRemovalAdditionalInfoTextOnChange}
      junkRemovalAdditionalInfoNextButtonOnClick={this.junkRemovalAdditionalInfoNextButtonOnClick}
    />
  </div>
);