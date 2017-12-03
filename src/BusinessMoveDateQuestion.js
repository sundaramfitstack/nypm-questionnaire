import React from 'react';

class BusinessMoveDateQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.businessMovingDateTextboxOnChange = this.businessMovingDateTextboxOnChange.bind(this);
    this.businessMovingDateNextButtonOnClick = this.businessMovingDateButtonOnClick.bind(this);
  }
  
  businessMovingDateTextboxOnChange(event){
    this.props.businessMovingDateTextboxOnChange(event.target.value);
  }

  businessMovingDateNextButtonOnClick(){
    this.props.businessMovingDateNextButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">What is your preferred moving date?</span>
        <br/>        
        <input type="text" className="" onChange={this.businessMovingDateTextboxOnChange} placeholder="MM/DD/YY" />
        <br />        
        <button className="" onClick={this.businessMovingDateNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveDateQuestion;