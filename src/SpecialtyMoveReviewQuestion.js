import React from 'react';

class SpecialtyMoveReviewQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.specialtyMoveReviewTextOnChange = this.specialtyMoveReviewTextOnChange.bind(this);
    this.specialtyMoveSubmitButtonOnClick = this.specialtyMoveSubmitButtonOnClick.bind(this);
  }
    
  specialtyMoveReviewTextOnChange(event){
    this.props.specialtyMoveReviewTextOnChange(event.target.value);
  }

  specialtyMoveSubmitButtonOnClick(){
    this.props.specialtyMoveSubmitButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Let’s quickly review the information for your specialty move free quote:</span>
        <br/>        
        <input type="text" className="" onChange={this.specialtyMoveReviewTextOnChange} placeholder="" />
        <br />
        <button className="" onClick={this.specialtyMoveSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveReviewQuestion;