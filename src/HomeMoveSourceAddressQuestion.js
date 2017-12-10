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
        <span className="question">Where would you like us to pick up your things?</span>
        <br/>        
        <input type="text" className="" onChange={this.homeMoveSourceAddressTextboxOnChange} placeholder="'Move from' address" ref={(input) => { this.nameInput = input; }}/>
        <br />
        <button className="" onClick={this.homeMoveSourceAddressNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveSourceAddressQuestion;