import React from 'react';

class JunkRemovalTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.regularJunkRemovalTypeButtonOnClick = this.regularJunkRemovalTypeButtonOnClick.bind(this);
    this.fullServiceJunkRemovalTypeButtonOnClick = this.fullServiceJunkRemovalTypeButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }

  
  regularJunkRemovalTypeButtonOnClick(){
    this.props.regularJunkRemovalTypeButtonOnClick();
  }

  fullServiceJunkRemovalTypeButtonOnClick(){
    this.props.fullServiceJunkRemovalTypeButtonOnClick();
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
        <span className="question">Home move it is! What type of move would you like?</span>
        <br/> 
        <br/>       
        <button className="" onClick={this.regularJunkRemovalTypeButtonOnClick}>Regular</button> <button className="" onClick={this.fullServiceJunkRemovalTypeButtonOnClick}>Full Service</button>
        <br/>
      </div>
    );
  }
}

export default JunkRemovalTypeQuestion;