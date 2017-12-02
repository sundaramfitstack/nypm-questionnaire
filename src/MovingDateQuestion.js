import React from 'react';
import './index.css';

class MovingDateQuestion extends React.Component {


  constructor(props) {
    
    super(props);

    this.movingDateTextOnChange = this.movingDateTextOnChange.bind(this);
    this.nextButtonOnClick = this.nextButtonOnClick.bind(this);
  }
  
  movingDateTextOnChange(e) {
    this.props.movingDateTextOnChange(e.target.value);
  }

  nextButtonOnClick() {
    this.props.handleMovingDateNextButtonOnClick();
  }


  render(){
    return (
      <div>
        <span className="question">What is your preferred moving date?</span>
        <br />
        <input type="text" onChange={this.movingDateTextOnChange} placeholder="MM / DD / YY" />
        <input type="submit" value="Next" onClick={this.nextButtonOnClick}/>
      </div>
      );
  }
}

export default MovingDateQuestion;