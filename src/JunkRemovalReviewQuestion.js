import React from 'react';

class JunkRemovalReviewQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    this.junkRemovalReviewTextOnChange = this.junkRemovalReviewTextOnChange.bind(this);
    this.specialtyMoveSubmitButtonOnClick = this.specialtyMoveSubmitButtonOnClick.bind(this);
  }
    
  junkRemovalReviewTextOnChange(event){
    this.props.junkRemovalReviewTextOnChange(event.target.value);
  }

  specialtyMoveSubmitButtonOnClick(){
    this.props.specialtyMoveSubmitButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Let’s quickly review the information for your specialty move free quote:</span>
        <br/>        
        <input type="text" className="" onChange={this.junkRemovalReviewTextOnChange} placeholder="" />
        <br />        
        <button className="" onClick={this.specialtyMoveSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default JunkRemovalReviewQuestion;