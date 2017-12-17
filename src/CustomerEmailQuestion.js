import React from 'react';

class CustomerEmailQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.emailTextboxOnChange = this.emailTextboxOnChange.bind(this);
    this.customerEmailNextButtonOnClick = this.customerEmailNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }
  
  emailTextboxOnChange(event){
    this.props.emailTextboxOnChange(event.target.value);
  }

  customerEmailNextButtonOnClick(){
    this.props.customerEmailNextButtonOnClick();
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
        <span className="question">Hi {this.props.customer_name}, great to meet you! What email should we use to send your free quote?</span>
        <br/>
        <br/>        
        <input type="text" className="" onChange={this.emailTextboxOnChange} placeholder="Email address" ref={(input) => { this.nameInput = input; }}/>
        <br/>        
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.customerEmailNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default CustomerEmailQuestion;