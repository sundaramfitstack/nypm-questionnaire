import React from 'react';

class HomeMoveAdditionalInfoQuestion extends React.Component {

  constructor(props) {
    
    super(props);    

    this.homeMoveAdditionalInfoTextareaOnChange = this.homeMoveAdditionalInfoTextareaOnChange.bind(this);
    this.homeMoveAdditionalInfoNextButtonOnClick = this.homeMoveAdditionalInfoNextButtonOnClick.bind(this);
    this.homeMoveAdditionalInfoSkipButtonOnClick = this.homeMoveAdditionalInfoSkipButtonOnClick.bind(this);
  }
    
  homeMoveAdditionalInfoTextareaOnChange(event){
    this.props.homeMoveAdditionalInfoTextareaOnChange(event.target.value);
  }

  homeMoveAdditionalInfoNextButtonOnClick(event){
    this.props.homeMoveAdditionalInfoNextButtonOnClick(event.target.value);
  }

  homeMoveAdditionalInfoSkipButtonOnClick(event){
    this.props.homeMoveAdditionalInfoSkipButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Finally, is there anything else you’d like us to know about the move?</span>
        <br/>
        <textarea className="" onChange={this.homeMoveAdditionalInfoTextareaOnChange}>Budget</textarea>
        <br />
        <button className="" onClick={this.homeMoveAdditionalInfoNextButtonOnClick}>Next</button> <button className="" onClick={this.homeMoveAdditionalInfoSkipButtonOnClick}>Skip</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveAdditionalInfoQuestion;