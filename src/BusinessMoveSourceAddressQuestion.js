import React from 'react';

class BusinessMoveSourceAddressQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.businessMoveSourceAddressTextboxOnChange = this.businessMoveSourceAddressTextboxOnChange.bind(this);
    this.businessMoveSourceAddressNextButtonOnClick = this.businessMoveSourceAddressNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);

  }
  
 
  businessMoveSourceAddressTextboxOnChange(event){
    this.props.businessMoveSourceAddressTextboxOnChange(event.target.value);
  }

  businessMoveSourceAddressNextButtonOnClick(event){
    this.props.businessMoveSourceAddressNextButtonOnClick(event.target.value);
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
        <span className="question">Where will your business move start?</span>
        <br/>
        <br/>        
        <input type="text" className="" onChange={this.businessMoveSourceAddressTextboxOnChange} placeholder="'Moving from' address" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button className="" onClick={this.businessMoveSourceAddressNextButtonOnClick}>Next</button>
        <br/>
      </div>
    );
  }
}

export default BusinessMoveSourceAddressQuestion;