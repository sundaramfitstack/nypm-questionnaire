import React from 'react';

class BusinessMoveDateQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.businessMoveDateTextboxOnChange = this.businessMoveDateTextboxOnChange.bind(this);
    this.businessMoveDateNextButtonOnClick = this.businessMoveDateNextButtonOnClick.bind(this);
  }
  
  businessMoveDateTextboxOnChange(event){
    this.props.businessMoveDateTextboxOnChange(event.target.value);
  }

  businessMoveDateNextButtonOnClick(){
    this.props.businessMoveDateNextButtonOnClick();
  }

  componentDidMount(){
     this.nameInput.focus(); 
  }

  render(){
    return (
      <div>
        <span className="question">What is your preferred move date?</span>
        <br/>        
        <input type="text" className="" onChange={this.businessMoveDateTextboxOnChange} placeholder="MM/DD/YY" ref={(input) => { this.nameInput = input; }}/>
        <br />        
        <button className="" onClick={this.businessMoveDateNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveDateQuestion;