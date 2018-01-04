import React from 'react';

const JUNK_REMOVAL_SOURCE_ADDRESS_MIN_LENGTH = 5;

class JunkRemovalSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.junkRemovalSourceAddressTextOnChange = this.junkRemovalSourceAddressTextOnChange.bind(this);
    this.junkRemovalSourceAddressNextButtonOnClick = this.junkRemovalSourceAddressNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.address = '';
  }
    
  handleKeyPress(event){

    if (event.key == 'Enter'){
      this.junkRemovalSourceAddressNextButtonOnClick();
    }
  }

  junkRemovalSourceAddressTextOnChange(event){

    this.address = event.target.value;
    this.props.junkRemovalSourceAddressTextOnChange(event.target.value);
  }

  junkRemovalSourceAddressNextButtonOnClick(){
    if (this.address.length > JUNK_REMOVAL_SOURCE_ADDRESS_MIN_LENGTH){
      this.props.junkRemovalSourceAddressNextButtonOnClick();
    }
    else {
      alert("Please provide a valid source address");
      document.getElementById("junk-removal-source-address").focus();
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
        <span className="question">Where would you like us to make the pickup?</span>
        <br/>
        <br/>        
        <input id="junk-removal-source-address" type="text" className="" onKeyPress={this.handleKeyPress} onChange={this.junkRemovalSourceAddressTextOnChange} placeholder="'Pickup' address" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.junkRemovalSourceAddressNextButtonOnClick}>Next</button>
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

export default JunkRemovalSourceAddressQuestion;