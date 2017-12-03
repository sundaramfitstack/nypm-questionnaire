import React from 'react';

class HomeMoveSizeQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.oneBedroomButtonOnClick = this.oneBedroomButtonOnClick.bind(this);
    this.twoBedroomButtonOnClick = this.twoBedroomButtonOnClick.bind(this);
    this.threeBedroomButtonOnClick = this.threeBedroomButtonOnClick.bind(this);
    this.fourBedroomButtonOnClick = this.fourBedroomButtonOnClick.bind(this);
  } 

  
  oneBedroomButtonOnClick(){
    this.props.oneBedroomButtonOnClick();
  }

  twoBedroomButtonOnClick(){
    this.props.twoBedroomButtonOnClick();
  }

  threeBedroomButtonOnClick(){
    this.props.threeBedroomButtonOnClick();
  }

  fourBedroomButtonOnClick(){
    this.props.fourBedroomButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">And what’s the size of your home at {this.props.home_move_source_address}?</span>
        <br/>
        <button className="" onClick={this.oneBedroomButtonOnClick}>Studio - 1BR</button> <button className="" onClick={this.twoBedroomButtonOnClick}>2BR</button> <button className="" onClick={this.threeBedroomButtonOnClick}>3BR</button> <button className="" onClick={this.fourBedroomButtonOnClick}>4BR+</button>
      </div>
    );
  }
}

export default HomeMoveSizeQuestion;