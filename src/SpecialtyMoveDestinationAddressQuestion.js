import React from 'react';

class SpecialtyMoveDestinationAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.specialtyMoveDestinationAddressOnChange = this.specialtyMoveDestinationAddressOnChange.bind(this);
    this.specialtyMoveSourceAddressButtonOnClick = this.specialtyMoveSourceAddressButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
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

  closeButtonOnClick(){
    this.props.closeButtonOnClick();
  }

  backButtonOnClick(){
    this.props.backButtonOnClick();
  }

  render(){
    return (
      <div>
        <div className="nav-container">
          <div className="back-button">
            <span className="" onClick={this.backButtonOnClick}>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
          </div>
          <div className="close-button">
            <span className="" onClick={this.closeButtonOnClick}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
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