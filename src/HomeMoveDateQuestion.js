import React from 'react';

class HomeMoveDateQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveDateTextboxOnChange = this.homeMoveDateTextboxOnChange.bind(this);
    this.homeMoveDateNextButtonOnClick = this.homeMoveDateNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);

  }  
  
  homeMoveDateTextboxOnChange(event){
    this.props.homeMoveDateTextboxOnChange(event.target.value);
  }

  homeMoveDateNextButtonOnClick(){
    this.props.homeMoveDateNextButtonOnClick();
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
        <span className="question">What is your preferred move date?</span>
        <br/>
        <br/>        
        <input type="text" className="" onChange={this.homeMoveDateTextboxOnChange} placeholder="MM/DD/YY" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.homeMoveDateNextButtonOnClick}>Next</button>
        <br />
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="percent">{this.props.percent}% Complete</span>
      </div>
    );
  }
}

export default HomeMoveDateQuestion;