import React from 'react';

class HomeMoveAdditionalInfoQuestion extends React.Component {

  constructor(props) {
    
    super(props);    

    this.homeMoveAdditionalInfoTextareaOnChange = this.homeMoveAdditionalInfoTextareaOnChange.bind(this);
    this.homeMoveAdditionalInfoNextButtonOnClick = this.homeMoveAdditionalInfoNextButtonOnClick.bind(this);
    this.homeMoveAdditionalInfoSkipButtonOnClick = this.homeMoveAdditionalInfoSkipButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }
    
  homeMoveAdditionalInfoTextareaOnChange(event){
    this.props.homeMoveAdditionalInfoTextareaOnChange(event.target.value);
  }

  homeMoveAdditionalInfoNextButtonOnClick(){
    this.props.homeMoveAdditionalInfoNextButtonOnClick();
  }

  homeMoveAdditionalInfoSkipButtonOnClick(){
    this.props.homeMoveAdditionalInfoSkipButtonOnClick();
  }

  componentDidMount(){
    this.nameInput.focus(); 
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
        <span className="question">Finally, is there anything else you’d like us to know about the move?</span>
        <br/>
        <br/>
        <textarea className="" onChange={this.homeMoveAdditionalInfoTextareaOnChange} ref={(input) => { this.nameInput = input; }}>Additional stops, special place to park, etc.</textarea>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.homeMoveAdditionalInfoNextButtonOnClick}>Next</button> <button type="button" className="btn btn-warning" onClick={this.homeMoveAdditionalInfoSkipButtonOnClick}>Skip</button>
        <br />
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

export default HomeMoveAdditionalInfoQuestion;