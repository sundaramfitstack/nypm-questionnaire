import React from 'react';

class HomeMoveBudgetQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveBudgetTextboxOnChange = this.homeMoveBudgetTextboxOnChange.bind(this);
    this.homeMoveBudgetNextButtonOnClick = this.homeMoveBudgetNextButtonOnClick.bind(this);
    this.homeMoveBudgetSkipButtonOnClick = this.homeMoveBudgetSkipButtonOnClick.bind(this);
  } 
  
  homeMoveBudgetTextboxOnChange(event){
    this.props.homeMoveBudgetTextboxOnChange(event.target.value);
  }

  homeMoveBudgetNextButtonOnClick(){
    this.props.homeMoveBudgetNextButtonOnClick();
  }

  homeMoveBudgetSkipButtonOnClick(){
    this.props.homeMoveBudgetSkipButtonOnClick();
  }

  componentDidMount(){
     this.nameInput.focus(); 
  }

  render(){
    return (
      <div>
        <span className="question">Is there a specific budget you’d like to stay within?  This is optional and won’t have any effect on the quote, however we’re always willing to work within a budget if you have one.</span>
        <br/>        
        <input type="text" className="" onChange={this.homeMoveBudgetTextboxOnChange} placeholder="Budget" ref={(input) => { this.nameInput = input; }}/>
        <br />                
        <button className="" onClick={this.homeMoveBudgetNextButtonOnClick}>Next</button> <button className="" onClick={this.homeMoveBudgetSkipButtonOnClick}>Skip</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveBudgetQuestion;