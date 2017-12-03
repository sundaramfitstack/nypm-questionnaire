import React from 'react';

class HomeMoveReviewQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveReviewTextOnChange = this.homeMoveReviewTextOnChange.bind(this);
    this.homeMoveSubmitButtonOnClick = this.homeMoveSubmitButtonOnClick.bind(this);
  }
  
  homeMoveReviewTextOnChange(event){
    this.props.homeMoveReviewTextOnChange(event.target.value);
  }

  homeMoveSubmitButtonOnClick(){
    this.props.homeMoveSubmitButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Let’s quickly review the information for your free quote:</span>
        <br/>        
        <input type="text" className="" onChange={this.homeMoveReviewTextOnChange} placeholder="Initial" />
        <br />
        <button className="" onClick={this.homeMoveSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveReviewQuestion;