import React from 'react';

const specialty_move_guide_url = 'http://www.cnn.com';

class SpecialtyMoveConfirmationQuestion extends React.Component {

 constructor(props) {
    
    super(props);
    
    this.viewTheGuideButtonOnClick = this.viewTheGuideButtonOnClick.bind(this);   
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this); 
  }
  
  viewTheGuideButtonOnClick(){
    window.open(specialty_move_guide_url, "_blank");
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
          <div className="close-button">
            <span className="" onClick={this.closeButtonOnClick}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">Thanks! We've received your request and will email your quote in &lt; 24 hours.</span>
        <br/>
        <br/>
        <span className="smallprint">To help you prepare for your move, we've put together <a onClick={this.viewTheGuideButtonOnClick}>The Ultimate Specialty Moving Guide: Moving Tips & Tricks To Make Your Life Easier.</a></span>
        <br/>
        <span className="smallprint">If you find the guide useful, please share it!</span>
        <br/>
        <br/>        
        <button onClick={this.viewTheGuideButtonOnClick}>View The Guide</button>
      </div>
	  );
  }
}

export default SpecialtyMoveConfirmationQuestion;