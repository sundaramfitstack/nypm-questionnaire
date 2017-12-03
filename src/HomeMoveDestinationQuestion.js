import React from 'react';

class HomeMoveDestinationQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveDestinationAddressTextboxOnChange = this.homeMoveDestinationAddressTextboxOnChange.bind(this);
    this.homeMoveDestinationAddressNextButtonOnClick = this.homeMoveDestinationAddressNextButtonOnClick.bind(this);
  }
  
  homeMoveDestinationAddressTextboxOnChange(event){
    this.props.homeMoveDestinationAddressTextboxOnChange(event.target.value);
  }

  homeMoveDestinationAddressNextButtonOnClick(){
    this.props.homeMoveDestinationAddressNextButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Where would you like us to drop off your things?</span>
        <br/>        
        <input type="text" className="" onChange={this.homeMoveDestinationAddressTextboxOnChange} placeholder="'Move to' address" />
        <br />
        <button className="" onClick={this.homeMoveDestinationAddressNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveDestinationQuestion;