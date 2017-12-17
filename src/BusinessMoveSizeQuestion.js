import React from 'react';

class BusinessMoveSizeQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.businessMoveSize2000ButtonOnClick = this.businessMoveSize2000ButtonOnClick.bind(this);
    this.businessMoveSize3000ButtonOnClick = this.businessMoveSize3000ButtonOnClick.bind(this);
    this.businessMoveSize4000ButtonOnClick = this.businessMoveSize4000ButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
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
        <span className="question">And what’s the size of the office at [business_move_source_address]?</span>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.businessMoveSize2000ButtonOnClick}>&lt; 2,000 sqft</button> <button type="button" className="btn btn-warning" onClick={this.businessMoveSize3000ButtonOnClick}>2,000 - 4,000 sqft</button>  <button type="button" className="btn btn-warning" onClick={this.businessMoveSize4000ButtonOnClick}> &gt; 4,000 sqft</button>
        <br/>
        <br/>
      </div>
    );
  }
}

export default BusinessMoveSizeQuestion;