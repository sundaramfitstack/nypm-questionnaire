import React from 'react';

class CustomerEmailQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.emailTextboxOnChange = this.emailTextboxOnChange.bind(this);
    this.customerEmailNextButtonOnClick = this.customerEmailNextButtonOnClick.bind(this);
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

  render(){
    return (
      <div>
        <span className="question">Hi {this.props.customer_name}, great to meet you! What email should we use to send your free quote?</span>
        <br/>        
        <input type="text" className="" onChange={this.emailTextboxOnChange} placeholder="Email address" ref={(input) => { this.nameInput = input; }}/>
        <br />        
        <button className="" onClick={this.customerEmailNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default CustomerEmailQuestion;