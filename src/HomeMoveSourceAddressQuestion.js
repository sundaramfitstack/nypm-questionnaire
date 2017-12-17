import React from 'react';

const HOME_MOVE_SOURCE_ADDRESS_MIN_LENGTH = 5;

class HomeMoveSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveSourceAddressTextboxOnChange = this.homeMoveSourceAddressTextboxOnChange.bind(this);
    this.homeMoveSourceAddressNextButtonOnClick = this.homeMoveSourceAddressNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);

    this.address = '';
  }
  
  homeMoveSourceAddressTextboxOnChange(event){
    this.address = event.target.value;
    this.props.homeMoveSourceAddressTextboxOnChange(event.target.value);
  }

  homeMoveSourceAddressNextButtonOnClick(){
    if (this.address.length > HOME_MOVE_SOURCE_ADDRESS_MIN_LENGTH){
      this.props.homeMoveSourceAddressNextButtonOnClick();
    }
    else {
      alert("Please provide a valid source address");
      document.getElementById("home-move-source-address").focus();
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
        <span className="question">Where would you like us to pick up your things?</span>
        <br/>
        <br/>        
        <input id="home-move-source-address" type="text" className="" onChange={this.homeMoveSourceAddressTextboxOnChange} placeholder="'Move from' address" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.homeMoveSourceAddressNextButtonOnClick}>Next</button>
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

export default HomeMoveSourceAddressQuestion;