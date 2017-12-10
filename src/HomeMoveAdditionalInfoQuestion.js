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
        <span className="question">Finally, is there anything else you’d like us to know about the move?</span>
        <br/>
        <textarea className="" onChange={this.homeMoveAdditionalInfoTextareaOnChange} ref={(input) => { this.nameInput = input; }}>Additional stops, special place to park, etc.</textarea>
        <br />
        <button className="" onClick={this.homeMoveAdditionalInfoNextButtonOnClick}>Next</button> <button className="" onClick={this.homeMoveAdditionalInfoSkipButtonOnClick}>Skip</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveAdditionalInfoQuestion;