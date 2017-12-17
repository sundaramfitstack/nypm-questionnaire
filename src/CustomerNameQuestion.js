import React from 'react';

class CustomerNameQuestion extends React.Component {

  constructor(props) {
    
    super(props);    
    this.customerNameTextboxOnChange = this.customerNameTextboxOnChange.bind(this);
    this.customerNameNextButtonOnClick = this.customerNameNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }
   
  customerNameTextboxOnChange(event){
    this.props.customerNameTextboxOnChange(event.target.value);
  }

  customerNameNextButtonOnClick(){
    this.props.customerNameNextButtonOnClick();
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
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
          </div>
          <div className="close-button">
            <span className="" onClick={this.closeButtonOnClick}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">Let’s get started. We’re Name Your Price Movers, what’s your name?</span>
        <br/>
        <br/>        
        <input type="text" className="" onChange={this.customerNameTextboxOnChange} placeholder="Enter your first and last name" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.customerNameNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default CustomerNameQuestion;