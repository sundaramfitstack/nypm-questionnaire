import React from 'react';

class BusinessMoveAdditionalInfoQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.businessMoveAdditionalInfoTextareaOnChange = this.businessMoveAdditionalInfoTextareaOnChange.bind(this);
    this.businessMoveAdditionalInfoNextButtonOnClick = this.businessMoveAdditionalInfoNextButtonOnClick.bind(this);
    this.businessMoveAdditionalInfoSkipButtonOnClick = this.businessMoveAdditionalInfoSkipButtonOnClick.bind(this);
  }
  
  businessMoveAdditionalInfoTextareaOnChange(event){
    this.props.businessMoveAdditionalInfoTextareaOnChange(event.target.value);
  }

  businessMoveAdditionalInfoNextButtonOnClick(){
    this.props.businessMoveAdditionalInfoNextButtonOnClick();
  }

  businessMoveAdditionalInfoSkipButtonOnClick(){
    this.props.businessMoveAdditionalInfoSkipButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Finally, is there anything else you’d like us to know about the move?</span>
        <br/>        
        <textarea className="" onChange={this.businessMoveAdditionalInfoTextareaOnChange}>Additional stops, special place to park, etc.</textarea>
        <br />        
        <button className="" onClick={this.businessMoveAdditionalInfoNextButtonOnClick}>Next</button>
        <br />
        <button className="" onClick={this.businessMoveAdditionalInfoSkipButtonOnClick}>Skip</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveAdditionalInfoQuestion;