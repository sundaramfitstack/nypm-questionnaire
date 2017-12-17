import React from 'react';

const SPECIALTY_MOVE_SOURCE_ADDRESS_MIN_LENGTH = 5;

class SpecialtyMoveSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.specialtyMoveSourceAddressOnChange = this.specialtyMoveSourceAddressOnChange.bind(this);
    this.specialtyMoveSourceAddressButtonOnClick = this.specialtyMoveSourceAddressButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);

    this.address = '';
  } 
  
  specialtyMoveSourceAddressOnChange(event){
    this.address = event.target.value;
    this.props.specialtyMoveSourceAddressOnChange(event.target.value);
  }

  specialtyMoveSourceAddressButtonOnClick(){
    if (this.address.length > SPECIALTY_MOVE_SOURCE_ADDRESS_MIN_LENGTH){
      this.props.specialtyMoveSourceAddressButtonOnClick();
    }
    else {
      alert("Please provide a valid address");
      document.getElementById("specialty-move-source-address").focus();
    }
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

    let styles = {'width' : this.props.percent+'%'};
    
    return (
      <div>
        <div className="nav-container">
          <div className="back-button">
            <span className="back-button" onClick={this.backButtonOnClick}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
          </div>
          <div className="close-button">
            <span className="close-button" onClick={this.closeButtonOnClick}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">Where will your specialty move start?</span>
        <br/>
        <br/>        
        <input id="specialty-move-source-address" type="text" className="" onChange={this.specialtyMoveSourceAddressOnChange} placeholder="'Moving from' address" ref={(input) => { this.nameInput = input; }}/>
        <br/>        
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.specialtyMoveSourceAddressButtonOnClick}>Next</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="percent">{this.props.percent}% Complete</span>
        <br/>
        <br/>
        <div className="progress">
          <div id='pb' className="progress-bar" role="progressbar" aria-valuenow="{this.props.percent}" aria-valuemin="0" aria-valuemax="100" style={styles}></div>
        </div>
      </div>
    );
  }
}

export default SpecialtyMoveSourceAddressQuestion;