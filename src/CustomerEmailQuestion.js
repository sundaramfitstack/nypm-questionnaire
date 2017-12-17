import React from 'react';

class CustomerEmailQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.emailTextboxOnChange = this.emailTextboxOnChange.bind(this);
    this.customerEmailNextButtonOnClick = this.customerEmailNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);

    this.email = '';
  }
  
  emailTextboxOnChange(event){
    this.email = event.target.value;
    this.props.emailTextboxOnChange(event.target.value);
  }


  validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.toLowerCase());
  }

  customerEmailNextButtonOnClick(){
    if (this.validateEmail(this.email)){
      this.props.customerEmailNextButtonOnClick();
    }
    else {
      alert("Please provde a valid email address");
      document.getElementById("customer-email").focus();
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
        <span className="question">Hi {this.props.customer_name}, great to meet you! What email should we use to send your free quote?</span>
        <br/>
        <br/>        
        <input id="customer-email" type="text" className="" onChange={this.emailTextboxOnChange} placeholder="Email address" ref={(input) => { this.nameInput = input; }}/>
        <br/>        
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.customerEmailNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default CustomerEmailQuestion;