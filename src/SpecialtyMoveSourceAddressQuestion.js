import React from 'react';

class SpecialtyMoveSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.specialtyMoveSourceAddressOnChange = this.specialtyMoveSourceAddressOnChange.bind(this);
    this.specialtyMoveSourceAddressButtonOnClick = this.specialtyMoveSourceAddressButtonOnClick.bind(this);
  } 
  
  specialtyMoveSourceAddressOnChange(event){
    this.props.specialtyMoveSourceAddressOnChange(event.target.value);
  }

  specialtyMoveSourceAddressButtonOnClick(){
    this.props.specialtyMoveSourceAddressButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Where will your specialty move start?</span>
        <br/>        
        <input type="text" className="" onChange={this.specialtyMoveSourceAddressOnChange} placeholder="'Moving from' address" />
        <br />        
        <button className="" onClick={this.specialtyMoveSourceAddressButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveSourceAddressQuestion;