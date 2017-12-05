import React from 'react';

class CustomerNameQuestion extends React.Component {

  constructor(props) {
    
    super(props);    
    this.customerNameTextboxOnChange = this.customerNameTextboxOnChange.bind(this);
    this.customerNameNextButtonOnClick = this.customerNameNextButtonOnClick.bind(this);
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

  render(){
    return (
      <div>
        <span className="question">Let’s get started. We’re Name Your Price Movers, what’s your name?</span>
        <br/>        
        <input type="text" className="" onChange={this.customerNameTextboxOnChange} placeholder="Enter your first and last name" ref={(input) => { this.nameInput = input; }}/>
        <br />
        <button className="" onClick={this.customerNameNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default CustomerNameQuestion;