import React from 'react';

class BusinessMoveTypeQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.regularBusinessTypeButtonOnClick = this.regularBusinessTypeButtonOnClick.bind(this);
    this.fullServiceBusinessTypeButtonOnClick = this.fullServiceBusinessTypeButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);

  }
    
  regularBusinessTypeButtonOnClick(){
    this.props.regularBusinessTypeButtonOnClick();
  }

  fullServiceBusinessTypeButtonOnClick(){
    this.props.fullServiceBusinessTypeButtonOnClick();
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
            <span className="back-button" onClick={this.backButtonOnClick}>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
          </div>
          <div className="close-button">
            <span className="close-button" onClick={this.closeButtonOnClick}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">Business moving it is! What type of move would you like?</span>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.regularBusinessTypeButtonOnClick}>Regular</button> <button type="button" className="btn btn-warning" onClick={this.fullServiceBusinessTypeButtonOnClick}>Full Service</button>
        <br />
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="percent">{this.props.percent}% Complete</span>
      </div>
    );
  }
}

export default BusinessMoveTypeQuestion;