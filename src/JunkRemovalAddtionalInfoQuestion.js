import React from 'react';

class JunkRemovalAddtionalInfoQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.junkRemovalAdditionalInfoTextOnChange = this.junkRemovalAdditionalInfoTextOnChange.bind(this);
    this.junkRemovalAdditionalInfoNextButtonOnClick = this.junkRemovalAdditionalInfoNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);

  } 
  
  junkRemovalAdditionalInfoTextOnChange(event){
    this.props.junkRemovalAdditionalInfoTextOnChange(event.target.value);
  }

  junkRemovalAdditionalInfoNextButtonOnClick(){
    this.props.junkRemovalAdditionalInfoNextButtonOnClick();
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
        <span className="question">Finally, is there anything else you’d like us to know about the junk removal pickup?</span>
        <br/>
        <br/>
        <textarea className="" onChange={this.junkRemovalAdditionalInfoTextOnChange} ref={(input) => { this.nameInput = input; }}>Additional stops, special place to park, etc.</textarea>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.junkRemovalAdditionalInfoNextButtonOnClick}>Next</button>
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

export default JunkRemovalAddtionalInfoQuestion;