import React from 'react';

class SpecialtyMoveSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.specialtyMoveSourceAddressOnChange = this.specialtyMoveSourceAddressOnChange.bind(this);
    this.specialtyMoveSourceAddressButtonOnClick = this.specialtyMoveSourceAddressButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  } 
  
  specialtyMoveSourceAddressOnChange(event){
    this.props.specialtyMoveSourceAddressOnChange(event.target.value);
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
            <span className="back-button" onClick={this.backButtonOnClick}>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
          </div>
          <div className="close-button">
            <span className="close-button" onClick={this.closeButtonOnClick}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">Where will your specialty move start?</span>
        <br/>
        <br/>        
        <input type="text" className="" onChange={this.specialtyMoveSourceAddressOnChange} placeholder="'Moving from' address" ref={(input) => { this.nameInput = input; }}/>
        <br/>        
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.specialtyMoveSourceAddressButtonOnClick}>Next</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="percent">{this.props.percent}% Complete</span>
      </div>
    );
  }
}

export default SpecialtyMoveSourceAddressQuestion;