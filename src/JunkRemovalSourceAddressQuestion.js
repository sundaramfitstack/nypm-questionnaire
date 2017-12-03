import React from 'react';

class JunkRemovalSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.junkRemovalSourceAddressTextOnChange = this.junkRemovalSourceAddressTextOnChange.bind(this);
    this.junkRemovalSourceAddressNextButtonOnClick = this.junkRemovalSourceAddressNextButtonOnClick.bind(this);
  }
  

  
  junkRemovalSourceAddressTextOnChange(event){
    this.props.junkRemovalSourceAddressTextOnChange(event.target.value);
  }
  junkRemovalSourceAddressNextButtonOnClick(event){
    this.props.junkRemovalSourceAddressNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Where would you like us to make the pickup?</span>
        <br/>
        
        <input type="text" className="" onChange={this.junkRemovalSourceAddressTextOnChange} placeholder=""Pickup" address" />
        <br />

        

        
        <button className="" onClick={this.junkRemovalSourceAddressNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default JunkRemovalSourceAddressQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import JunkRemovalSourceAddressQuestion from './JunkRemovalSourceAddressQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'junk_removal_source_address' : '',



/* Move these statements to the constructor of the parent class */

this.junkRemovalSourceAddressTextOnChange = this.junkRemovalSourceAddressTextOnChange.bind(this);
this.junkRemovalSourceAddressNextButtonOnClick = this.junkRemovalSourceAddressNextButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

junkRemovalSourceAddressTextOnChange(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
junkRemovalSourceAddressNextButtonOnClick(text){
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
    <JunkRemovalSourceAddressQuestion
    
      junk_removal_source_address={this.state.junk_removal_source_address}
    
      junkRemovalSourceAddressTextOnChange={this.junkRemovalSourceAddressTextOnChange}
      junkRemovalSourceAddressNextButtonOnClick={this.junkRemovalSourceAddressNextButtonOnClick}
    />
  </div>
);