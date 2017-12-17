import React from 'react';

const MIN_BUSINESS_MOVE_SOURCE_ADDRESS_LENGTH = 5;

class BusinessMoveSourceAddressQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.businessMoveSourceAddressTextboxOnChange = this.businessMoveSourceAddressTextboxOnChange.bind(this);
    this.businessMoveSourceAddressNextButtonOnClick = this.businessMoveSourceAddressNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);

    this.address = '';
  }
  
 
  businessMoveSourceAddressTextboxOnChange(event){
    this.address = event.target.value;
    this.props.businessMoveSourceAddressTextboxOnChange(event.target.value);
  }

  businessMoveSourceAddressNextButtonOnClick(){
    if (this.address.length > MIN_BUSINESS_MOVE_SOURCE_ADDRESS_LENGTH){
      this.props.businessMoveSourceAddressNextButtonOnClick();
    }
    else {
      alert("Please provide a valid source address");
      document.getElementById("business-move-source-address").focus();
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
        <span className="question">Where will your business move start?</span>
        <br/>
        <br/>        
        <input id="business-move-source-address" type="text" className="" onChange={this.businessMoveSourceAddressTextboxOnChange} placeholder="'Moving from' address" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.businessMoveSourceAddressNextButtonOnClick}>Next</button>
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

export default BusinessMoveSourceAddressQuestion;