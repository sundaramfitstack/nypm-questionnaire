import React from 'react';

class BusinessMoveDateQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.businessMoveDateTextboxOnChange = this.businessMoveDateTextboxOnChange.bind(this);
    this.businessMoveDateNextButtonOnClick = this.businessMoveDateNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.date = '';
  }
  
  handleKeyPress(event){

    if (event.key == 'Enter'){
      this.businessMoveDateNextButtonOnClick();
    }
  }

  businessMoveDateTextboxOnChange(event){
    this.date = event.target.value;
    this.props.businessMoveDateTextboxOnChange(event.target.value);
  }

  businessMoveDateNextButtonOnClick(){
    if (this.validateDate(this.date)){
      this.props.businessMoveDateNextButtonOnClick();
    }
    else {
      alert("Please provide valid date");
      document.getElementById("business-move-date").focus();
    }
  }


  validateDate(inputtxt) {
    
    if (inputtxt.length > 1){
      
      const dateMask = /^[0-9]{2}\/[0-9]{2}\/[0-9]{2}$/;
      
      if(inputtxt.match(dateMask)) {
        return true;
      }
    }

    return false;
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
        <span className="question">What is your preferred move date?</span>
        <br/>
        <br/>        
        <input id="business-move-date" type="text" className="" onKeyPress={this.handleKeyPress} onChange={this.businessMoveDateTextboxOnChange} placeholder="MM/DD/YY" ref={(input) => { this.nameInput = input; }}/>
        <br/>        
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.businessMoveDateNextButtonOnClick}>Next</button>
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

export default BusinessMoveDateQuestion;