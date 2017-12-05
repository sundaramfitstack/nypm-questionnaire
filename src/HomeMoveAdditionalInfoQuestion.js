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

  homeMoveAdditionalInfoNextButtonOnClick(){
    this.props.homeMoveAdditionalInfoNextButtonOnClick();
  }

  homeMoveAdditionalInfoSkipButtonOnClick(){
    this.props.homeMoveAdditionalInfoSkipButtonOnClick();
  }

  componentDidMount(){
     this.nameInput.focus(); 
  }

  render(){
    return (
      <div>
        <span className="question">Finally, is there anything else you’d like us to know about the move?</span>
        <br/>
        <textarea className="" onChange={this.homeMoveAdditionalInfoTextareaOnChange} ref={(input) => { this.nameInput = input; }}>Additional stops, special place to park, etc.</textarea>
        <br />
        <button className="" onClick={this.homeMoveAdditionalInfoNextButtonOnClick}>Next</button> <button className="" onClick={this.homeMoveAdditionalInfoSkipButtonOnClick}>Skip</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveAdditionalInfoQuestion;