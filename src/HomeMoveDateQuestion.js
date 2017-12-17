import React from 'react';

class HomeMoveDateQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveDateTextboxOnChange = this.homeMoveDateTextboxOnChange.bind(this);
    this.homeMoveDateNextButtonOnClick = this.homeMoveDateNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);

    this.date = '';
  }  
  
  homeMoveDateTextboxOnChange(event){
    this.date = event.target.value;
    this.props.homeMoveDateTextboxOnChange(event.target.value);
  }

  homeMoveDateNextButtonOnClick(){
    if (this.validateDate(this.date)){
      this.props.homeMoveDateNextButtonOnClick();
    }
    else {
      alert("Please provide validate date");
      document.getElementById("home-move-date").focus();
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
        <input type="text" id="home-move-date" className="move-date" onChange={this.homeMoveDateTextboxOnChange} placeholder="MM/DD/YY" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.homeMoveDateNextButtonOnClick}>Next</button>
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

export default HomeMoveDateQuestion;