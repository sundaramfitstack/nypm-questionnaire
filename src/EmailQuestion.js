import React from 'react';
import './index.css';

class EmailQuestion extends React.Component {


  constructor(props) {
    
    super(props);

    this.emailTextOnChange = this.emailTextOnChange.bind(this);
    this.handleEmailNextButtonOnClick = this.handleEmailNextButtonOnClick.bind(this);
  }
  
  emailTextOnChange(e) {
    this.props.emailTextOnChange(e.target.value);
  }

  businessButtonOnClick() {
    this.props.handleEmailNextButtonOnClick();
  }


  render(){
    return (
      <div>
        <span className="question">Hi {this.props.customer_name}, great to meet you! What email should we use to send your free quote?</span>
        <br />
        <input type="text" onChange={this.emailTextOnChange} placeholder="Email" />
        <input type="submit" value="Next" onClick={this.handleEmailNextButtonOnClick}/>
      </div>
      );
  }
}

export default EmailQuestion;