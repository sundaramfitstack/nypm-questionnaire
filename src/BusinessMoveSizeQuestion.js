import React from 'react';

class BusinessMoveSizeQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.businessMoveSize2000ButtonOnClick = this.businessMoveSize2000ButtonOnClick.bind(this);
    this.businessMoveSize3000ButtonOnClick = this.businessMoveSize3000ButtonOnClick.bind(this);
    this.businessMoveSize4000ButtonOnClick = this.businessMoveSize4000ButtonOnClick.bind(this);
  }
  
  
  businessMoveSize2000ButtonOnClick(){
    this.props.businessMoveSize2000ButtonOnClick();
  }

  businessMoveSize3000ButtonOnClick(){
    this.props.businessMoveSize3000ButtonOnClick();
  }

  businessMoveSize4000ButtonOnClick(){
    this.props.businessMoveSize4000ButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">And what’s the size of the office at [business_move_source_address]?</span>
        <br/>
        <button className="" onClick={this.businessMoveSize2000ButtonOnClick}>&lt; 2,000 sqft</button> <button className="" onClick={this.businessMoveSize3000ButtonOnClick}>2,000 - 4,000 sqft</button>  <button className="" onClick={this.businessMoveSize4000ButtonOnClick}> &gt; 4,000 sqft</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveSizeQuestion;