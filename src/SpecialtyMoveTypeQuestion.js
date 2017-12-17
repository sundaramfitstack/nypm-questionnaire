import React from 'react';

class SpecialtyMoveTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.regularSpecialtyMoveButtonOnClick = this.regularSpecialtyMoveButtonOnClick.bind(this);
    this.fullServiceSpecialtyMoveButtonOnClick = this.fullServiceSpecialtyMoveButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }
  
  regularSpecialtyMoveButtonOnClick(){
    this.props.regularSpecialtyMoveButtonOnClick();
  }

  fullServiceSpecialtyMoveButtonOnClick(){
    this.props.fullServiceSpecialtyMoveButtonOnClick();
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
        <span className="question">Specialty moving it is! What type of move would you like?</span>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.regularSpecialtyMoveButtonOnClick}>Regular</button> <button type="button" className="btn btn-warning" onClick={this.fullServiceSpecialtyMoveButtonOnClick}>Full Service</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="percent">{this.props.percent}% Complete</span>
      </div>
    );
  }
}

export default SpecialtyMoveTypeQuestion;