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

  junkRemovalAdditionalInfoNextButtonOnClick(){
    this.props.junkRemovalAdditionalInfoNextButtonOnClick();
  }

  componentDidMount(){
     this.nameInput.focus(); 
  }

  render(){
    return (
      <div>
        <span className="question">Finally, is there anything else you’d like us to know about the junk removal pickup?</span>
        <br/>
        <textarea className="" onChange={this.junkRemovalAdditionalInfoTextOnChange} ref={(input) => { this.nameInput = input; }}>Additional stops, special place to park, etc.</textarea>
        <br />
        <button className="" onClick={this.junkRemovalAdditionalInfoNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default JunkRemovalAddtionalInfoQuestion;