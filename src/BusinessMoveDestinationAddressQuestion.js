import React from 'react';

const MIN_BUSINESS_MOVE_DESTINATION_ADDRESS_LENGTH = 5;

class BusinessMoveDestinationAddressQuestion extends React.Component {

  constructor(props) {    
    super(props);
    
    this.businessMoveDestinationAddressTextboxOnChange = this.businessMoveDestinationAddressTextboxOnChange.bind(this);
    this.businessMoveDestinationAddressNextButtonOnClick = this.businessMoveDestinationAddressNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.address = '';
  }
    
  handleKeyPress(event){

    if (event.key == 'Enter'){
      this.businessMoveDestinationAddressNextButtonOnClick();
    }
  }

  businessMoveDestinationAddressTextboxOnChange(event){
    this.address = event.target.value;
    this.props.businessMoveDestinationAddressTextboxOnChange(event.target.value);
  }

  businessMoveDestinationAddressNextButtonOnClick(){
    if (this.address.length > MIN_BUSINESS_MOVE_DESTINATION_ADDRESS_LENGTH){
      this.props.businessMoveDestinationAddressNextButtonOnClick();
    }
    else{
      alert("Please provide a valid destination address");
      document.getElementById("business-move-destination-address").focus();
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
        <span className="question">Where is your new office located?</span>
        <br/>
        <br/>        
        <input id="business-move-destination-address" type="text" className="" onKeyPress={this.handleKeyPress} onChange={this.businessMoveDestinationAddressTextboxOnChange} placeholder="'Moving to' address" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.businessMoveDestinationAddressNextButtonOnClick}>Next</button>
        <br />
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

export default BusinessMoveDestinationAddressQuestion;