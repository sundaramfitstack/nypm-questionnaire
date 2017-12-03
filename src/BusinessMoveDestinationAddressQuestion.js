import React from 'react';

class BusinessMoveDestinationAddressQuestion extends React.Component {

  constructor(props) {    
    super(props);
    
    this.businessMoveDestinationAddressTextboxOnChange = this.businessMoveDestinationAddressTextboxOnChange.bind(this);
    this.businessMoveDestinationAddressNextButtonOnClick = this.businessMoveDestinationAddressNextButtonOnClick.bind(this);
  }
    
  businessMoveDestinationAddressTextboxOnChange(event){
    this.props.businessMoveDestinationAddressTextboxOnChange(event.target.value);
  }

  businessMoveDestinationAddressNextButtonOnClick(event){
    this.props.businessMoveDestinationAddressNextButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">Where is your new office located?</span>
        <br/>        
        <input type="text" className="" onChange={this.businessMoveDestinationAddressTextboxOnChange} placeholder="'Moving to' address" />
        <br />
        <button className="" onClick={this.businessMoveDestinationAddressNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveDestinationAddressQuestion;