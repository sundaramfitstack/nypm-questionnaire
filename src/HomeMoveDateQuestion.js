import React from 'react';

class HomeMoveDateQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveDateTextboxOnChange = this.homeMoveDateTextboxOnChange.bind(this);
    this.homeMoveDateNextButtonOnClick = this.homeMoveDateNextButtonOnClick.bind(this);
  }  
  
  homeMoveDateTextboxOnChange(event){
    this.props.homeMoveDateTextboxOnChange(event.target.value);
  }

  homeMoveDateNextButtonOnClick(){
    this.props.homeMoveDateNextButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">What is your preferred move date?</span>
        <br/>        
        <input type="text" className="" onChange={this.homeMoveDateTextboxOnChange} placeholder="MM/DD/YY" />
        <br />
        <button className="" onClick={this.homeMoveDateNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveDateQuestion;