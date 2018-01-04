import React from 'react';

class HomeMoveBudgetQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveBudgetTextboxOnChange = this.homeMoveBudgetTextboxOnChange.bind(this);
    this.homeMoveBudgetNextButtonOnClick = this.homeMoveBudgetNextButtonOnClick.bind(this);
    this.homeMoveBudgetSkipButtonOnClick = this.homeMoveBudgetSkipButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

  } 
  
  handleKeyPress(event){

    if (event.key == 'Enter'){
      this.homeMoveBudgetNextButtonOnClick();
    }
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
        <span className="question">Is there a specific budget you’d like to stay within?  This is optional and won’t have any effect on the quote, however we’re always willing to work within a budget if you have one.</span>
        <br/>
        <br/>        
        <input type="text" className="" onKeyPress={this.handleKeyPress} onChange={this.homeMoveBudgetTextboxOnChange} placeholder="Budget" ref={(input) => { this.nameInput = input; }}/>
        <br/>                
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.homeMoveBudgetNextButtonOnClick}>Next</button> <button type="button" className="btn btn-warning" onClick={this.homeMoveBudgetSkipButtonOnClick}>Skip</button>
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

export default HomeMoveBudgetQuestion;