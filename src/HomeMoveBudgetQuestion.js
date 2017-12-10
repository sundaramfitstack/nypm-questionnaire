import React from 'react';

class HomeMoveBudgetQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveBudgetTextboxOnChange = this.homeMoveBudgetTextboxOnChange.bind(this);
    this.homeMoveBudgetNextButtonOnClick = this.homeMoveBudgetNextButtonOnClick.bind(this);
    this.homeMoveBudgetSkipButtonOnClick = this.homeMoveBudgetSkipButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
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
            <span className="" onClick={this.backButtonOnClick}>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
          </div>
          <div className="close-button">
            <span className="" onClick={this.closeButtonOnClick}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">Is there a specific budget you’d like to stay within?  This is optional and won’t have any effect on the quote, however we’re always willing to work within a budget if you have one.</span>
        <br/>
        <br/>        
        <input type="text" className="" onChange={this.homeMoveBudgetTextboxOnChange} placeholder="Budget" ref={(input) => { this.nameInput = input; }}/>
        <br/>                
        <br/>
        <button className="" onClick={this.homeMoveBudgetNextButtonOnClick}>Next</button> <button className="" onClick={this.homeMoveBudgetSkipButtonOnClick}>Skip</button>
        <br/>
      </div>
    );
  }
}

export default HomeMoveBudgetQuestion;