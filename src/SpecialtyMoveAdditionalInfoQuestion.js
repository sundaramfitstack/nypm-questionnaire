import React from 'react';

class SpecialtyMoveAdditionalInfoQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.specialtyMoveAdditionalInfoOnChange = this.specialtyMoveAdditionalInfoOnChange.bind(this);
    this.specialtyMoveAdditionalInfoButtonOnClick = this.specialtyMoveAdditionalInfoButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }

  specialtyMoveAdditionalInfoOnChange(event){
    this.props.specialtyMoveAdditionalInfoOnChange(event.target.value);
  }

  specialtyMoveAdditionalInfoButtonOnClick(){
    this.props.specialtyMoveAdditionalInfoButtonOnClick();
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
        <span className="question">Finally, is there anything else you’d like us to know about the move?</span>
        <br/>
        <br/>        
        <textarea className="" onChange={this.specialtyMoveAdditionalInfoOnChange} ref={(input) => { this.nameInput = input; }}>Additional stops, special place to park, etc.</textarea>
        <br/>        
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.specialtyMoveAdditionalInfoButtonOnClick}>Next</button>
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

export default SpecialtyMoveAdditionalInfoQuestion;