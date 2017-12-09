import React from 'react';

const junk_removal_guide_url = 'http://www.cnn.com';

class JunkRemovalConfirmationQuestion extends React.Component {

 constructor(props) {
    
    super(props);
    
    this.viewTheGuideButtonOnClick = this.viewTheGuideButtonOnClick.bind(this);    
  }
  
  viewTheGuideButtonOnClick(){
    window.open(junk_removal_guide_url, "_blank");
  }

  render(){
    return (
      <div>
        <span className="question">Thanks! We've received your request and will email your quote in &lt; 24 hours.</span>
        <br/>
        <span className="smallprint">To help you prepare for your move, we've put together <a href="#" onClick={this.viewTheGuideButtonOnClick}>The Ultimate Junk Removal Guide: Junk Removal Tips & Tricks To Make Your Life Easier.</a> If you find the guide useful, please share it!</span>
        <br/>        
        <button onClick={this.viewTheGuideButtonOnClick}>View The Guide</button>
      </div>    );
  }
}

export default JunkRemovalConfirmationQuestion;