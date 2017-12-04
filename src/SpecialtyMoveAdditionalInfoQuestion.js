import React from 'react';

class SpecialtyMoveAdditionalInfoQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.specialtyMoveAdditionalInfoOnChange = this.specialtyMoveAdditionalInfoOnChange.bind(this);
    this.specialtyMoveAdditionalInfoButtonOnClick = this.specialtyMoveAdditionalInfoButtonOnClick.bind(this);
  }

  specialtyMoveAdditionalInfoOnChange(event){
    this.props.specialtyMoveAdditionalInfoOnChange(event.target.value);
  }

  specialtyMoveAdditionalInfoButtonOnClick(){
    this.props.specialtyMoveAdditionalInfoButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Finally, is there anything else you’d like us to know about the move?</span>
        <br/>        
        <textarea className="" onChange={this.specialtyMoveAdditionalInfoOnChange}>Additional stops, special place to park, etc.</textarea>
        <br />        
        <button className="" onClick={this.specialtyMoveAdditionalInfoButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveAdditionalInfoQuestion;