import React from 'react';
import './index.css';

class FirstAndLastNameQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.nameTextOnChange = this.nameTextOnChange.bind(this);
    this.nextButtonOnClick = this.nextButtonOnClick.bind(this);
  }
  
  nameTextOnChange(e) {
    this.props.nameTextOnChange(e.target.value);
  }

  nextButtonOnClick() {
    this.props.handleNameNextOnClick();
  }


  render(){
    return (
      <div>
        <span className="question">Let's get started. We're Name Your Price Movers, what is your name?</span>
        <br />
        <input type="text" onChange={this.nameTextOnChange} placeholder="First & Last Name" />
        <input type="submit" value="Next" onClick={this.props.handleNameNextOnClick}/>
      </div>
      );
  }
}

export default FirstAndLastNameQuestion;