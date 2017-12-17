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

    let styles = {'width' : this.props.percent+'%'};
    
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
        <span className="question">Home move it is! What type of move would you like?</span>
        <br/> 
        <br/>       
        <button type="button" className="btn btn-warning" onClick={this.regularJunkRemovalTypeButtonOnClick}>Regular</button> <button type="button" className="btn btn-warning" onClick={this.fullServiceJunkRemovalTypeButtonOnClick}>Full Service</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="percent">{this.props.percent}% Complete</span>
        <br/>
        <br/>
        <div className="progress">
          <div id='pb' className="progress-bar" role="progressbar" aria-valuenow="{this.props.percent}" aria-valuemin="0" aria-valuemax="100" style={styles}></div>
        </div>
      </div>
    );
  }
}

export default JunkRemovalTypeQuestion;