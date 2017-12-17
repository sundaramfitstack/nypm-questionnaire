import React from 'react';

const junk_removal_guide_url = 'http://www.cnn.com';

class JunkRemovalConfirmationQuestion extends React.Component {

 constructor(props) {
    
    super(props);
    
    this.viewTheGuideButtonOnClick = this.viewTheGuideButtonOnClick.bind(this);    
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }
  
  viewTheGuideButtonOnClick(){
    window.open(junk_removal_guide_url, "_blank");
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
            <span className="close-button" onClick={this.closeButtonOnClick}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">Thanks! We've received your request and will email your quote in &lt; 24 hours.</span>
        <br/>
        <br/>
        <span className="smallprint">To help you prepare for your move, we've put together <a href="#" onClick={this.viewTheGuideButtonOnClick}>The Ultimate Junk Removal Guide: Junk Removal Tips & Tricks To Make Your Life Easier.</a></span>
        <br/>
        <br/>
        <span className="smallprint">If you find the guide useful, please share it!</span>
        <br/>
        <br/>        
        <button type="button" className="btn btn-warning" onClick={this.viewTheGuideButtonOnClick}>View The Guide</button>
        <br/>
      </div>    
    );
  }
}

export default JunkRemovalConfirmationQuestion;