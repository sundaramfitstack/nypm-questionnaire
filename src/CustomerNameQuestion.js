import React from 'react';

const MIN_NAME_LENGTH = 2;

class CustomerNameQuestion extends React.Component {

  constructor(props) {
    
    super(props);    
    this.customerNameTextboxOnChange = this.customerNameTextboxOnChange.bind(this);
    this.customerNameNextButtonOnClick = this.customerNameNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);

    this.name = '';
  }
   
  customerNameTextboxOnChange(event){
    this.name = event.target.value;
    this.props.customerNameTextboxOnChange(event.target.value);
  }

  customerNameNextButtonOnClick(){
    if (this.name.length > MIN_NAME_LENGTH){
      this.props.customerNameNextButtonOnClick();
    }
    else {
      alert("Please provide your name");
      document.getElementById("customer-name").focus();
    }
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
          <div className="close-button">
            <span className="close-button" onClick={this.closeButtonOnClick}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">Let’s get started. We’re Name Your Price Movers, what’s your name?</span>
        <br/>
        <br/>        
        <input id="customer-name" type="text" className="" onChange={this.customerNameTextboxOnChange} placeholder="Enter your first and last name" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.customerNameNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default CustomerNameQuestion;