import React from 'react';

class HomeMoveTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.regularHomeMoveTypeButtonOnClick = this.regularHomeMoveTypeButtonOnClick.bind(this);
    this.fullServiceHomeMoveTypeButtonOnClick = this.fullServiceHomeMoveTypeButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }

  
  regularHomeMoveTypeButtonOnClick(){
    this.props.regularHomeMoveTypeButtonOnClick();
  }

  fullServiceHomeMoveTypeButtonOnClick(){
    this.props.fullServiceHomeMoveTypeButtonOnClick();
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
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
          </div>
          <div className="close-button">
            <span className="close-button" onClick={this.closeButtonOnClick}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">Home move it is! What type of move would you like?</span>
        <br/>
        <br/>        
        <button type="button" className="btn btn-warning" onClick={this.regularHomeMoveTypeButtonOnClick}>Regular</button> <button type="button" className="btn btn-warning" onClick={this.fullServiceHomeMoveTypeButtonOnClick}>Full Service</button>
        <br/>
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

export default HomeMoveTypeQuestion;