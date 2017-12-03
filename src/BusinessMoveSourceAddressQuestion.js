import React from 'react';

class BusinessMoveSourceAddressQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.businessMoveSourceAddressTextboxOnChange = this.businessMoveSourceAddressTextboxOnChange.bind(this);
    this.businessMoveSourceAddressNextButtonOnClick = this.businessMoveSourceAddressNextButtonOnClick.bind(this);
  }
  
 
  businessMoveSourceAddressTextboxOnChange(event){
    this.props.businessMoveSourceAddressTextboxOnChange(event.target.value);
  }

  businessMoveSourceAddressNextButtonOnClick(event){
    this.props.businessMoveSourceAddressNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Where will your business move start?</span>
        <br/>        
        <input type="text" className="" onChange={this.businessMoveSourceAddressTextboxOnChange} placeholder=""Moving from" address" />
        <br />
        <button className="" onClick={this.businessMoveSourceAddressNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveSourceAddressQuestion;