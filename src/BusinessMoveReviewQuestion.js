import React from 'react';

class BusinessMoveReviewQuestion extends React.Component {
  constructor(props) {   
    super(props);    
    this.businessMoveReviewTextOnChanage = this.businessMoveReviewTextOnChange.bind(this);
    this.businessMoveSubmitButtonOnClick = this.businessMoveSubmitButtonOnClick.bind(this);
  }

  
  businessMoveReviewTextOnChange(event){
    this.props.businessMoveReviewTextOnChanage(event.target.value);
  }

  businessMoveSubmitButtonOnClick(){
    this.props.businessMoveSubmitButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Let’s quickly review the information for your business move free quote:</span>
        <br/>        
        <input type="text" className="" onChange={this.businessMoveReviewTextOnChange} placeholder="" />
        <br />
        <button className="" onClick={this.businessMoveSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveReviewQuestion;