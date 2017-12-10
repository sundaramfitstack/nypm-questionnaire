import React from 'react';

class CustomerPhoneNumberQuestion extends React.Component {

  constructor(props) {
    
    super(props);    
    this.phoneNumberTextboxOnChange = this.phoneNumberTextboxOnChange.bind(this);
    this.phoneNumberNextButtonOnClick = this.phoneNumberNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  } 
  
  phoneNumberTextboxOnChange(event){
    this.props.phoneNumberTextboxOnChange(event.target.value);
  }

  phoneNumberNextButtonOnClick(){
    this.props.phoneNumberNextButtonOnClick();
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
        <span className="question">And what’s the best phone number to reach you?</span>
        <br/>        
        <input type="text" className="" onChange={this.phoneNumberTextboxOnChange} placeholder="Phone number" ref={(input) => { this.nameInput = input; }}/>
        <br />
        <button className="" onClick={this.phoneNumberNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default CustomerPhoneNumberQuestion;