import React from 'react';

class SpecialtyMoveDateQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.specialtyMoveDateOnChange = this.specialtyMoveDateOnChange.bind(this);
    this.specialtyMoveDateNextButtonOnClick = this.specialtyMoveDateNextButtonOnClick.bind(this);
  } 

  
  specialtyMoveDateOnChange(event){
    this.props.specialtyMoveDateOnChange(event.target.value);
  }

  specialtyMoveDateNextButtonOnClick(){
    this.props.specialtyMoveDateNextButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">What is your preferred moving date?</span>
        <br/>        
        <input type="text" className="" onChange={this.specialtyMoveDateOnChange} placeholder="MM/DD/YY" />
        <br />
        <button className="" onClick={this.specialtyMoveDateNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveDateQuestion;