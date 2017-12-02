import React from 'react';
import './index.css';

class HomeMovingTypeQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.handleRegularHomeMovingOnClick = this.handleRegularHomeMovingOnClick.bind(this);
    this.handleFullServiceHomeMovingOnClick = this.handleFullServiceHomeMovingOnClick.bind(this);
  }
  
  handleRegularHomeMovingOnClick(e) {
    this.props.handleRegularHomeMovingOnClick();
  }

  handleFullServiceHomeMovingOnClick() {
    this.props.handleFullServiceHomeMovingOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Home moving it is! What type of move would you like?</span>
        <br/>
        <button className="button" onClick={this.handleRegularHomeMovingOnClick}>Regular</button> <button className="button" onClick={this.handleFullServiceHomeMovingOnClick}>Full Service</button>
      </div>
    );

  }
}

export default HomeMovingTypeQuestion;