import React from 'react';

class SpecialtyMoveDestinationAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.specialtyMoveDestinationAddressOnChange = this.specialtyMoveDestinationAddressOnChange.bind(this);
    this.specialtyMoveSourceAddressButtonOnClick = this.specialtyMoveSourceAddressButtonOnClick.bind(this);
  }
  
  
  specialtyMoveDestinationAddressOnChange(event){
    this.props.specialtyMoveDestinationAddressOnChange(event.target.value);
  }

  specialtyMoveSourceAddressButtonOnClick(){
    this.props.specialtyMoveSourceAddressButtonOnClick();
  }

  componentDidMount(){
     this.nameInput.focus(); 
  }

  render(){
    return (
      <div>
        <span className="question">Where would you like us to move your specialty item(s)?</span>
        <br/>        
        <input type="text" className="" onChange={this.specialtyMoveDestinationAddressOnChange} placeholder="'Moving to' address" ref={(input) => { this.nameInput = input; }}/>
        <br />        
        <button className="" onClick={this.specialtyMoveSourceAddressButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveDestinationAddressQuestion;