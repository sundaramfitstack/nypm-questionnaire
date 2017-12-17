import React from 'react';

class HomeMoveSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveSourceAddressTextboxOnChange = this.homeMoveSourceAddressTextboxOnChange.bind(this);
    this.homeMoveSourceAddressNextButtonOnClick = this.homeMoveSourceAddressNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }
  
  homeMoveSourceAddressTextboxOnChange(event){
    this.props.homeMoveSourceAddressTextboxOnChange(event.target.value);
  }

  homeMoveSourceAddressNextButtonOnClick(){
    this.props.homeMoveSourceAddressNextButtonOnClick();
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
        <span className="question">Where would you like us to pick up your things?</span>
        <br/>
        <br/>        
        <input type="text" className="" onChange={this.homeMoveSourceAddressTextboxOnChange} placeholder="'Move from' address" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.homeMoveSourceAddressNextButtonOnClick}>Next</button>
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

export default HomeMoveSourceAddressQuestion;