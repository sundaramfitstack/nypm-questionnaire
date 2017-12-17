import React from 'react';

class BusinessMoveDestinationAddressQuestion extends React.Component {

  constructor(props) {    
    super(props);
    
    this.businessMoveDestinationAddressTextboxOnChange = this.businessMoveDestinationAddressTextboxOnChange.bind(this);
    this.businessMoveDestinationAddressNextButtonOnClick = this.businessMoveDestinationAddressNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }
    
  businessMoveDestinationAddressTextboxOnChange(event){
    this.props.businessMoveDestinationAddressTextboxOnChange(event.target.value);
  }

  businessMoveDestinationAddressNextButtonOnClick(event){
    this.props.businessMoveDestinationAddressNextButtonOnClick(event.target.value);
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
        <span className="question">Where is your new office located?</span>
        <br/>
        <br/>        
        <input type="text" className="" onChange={this.businessMoveDestinationAddressTextboxOnChange} placeholder="'Moving to' address" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.businessMoveDestinationAddressNextButtonOnClick}>Next</button>
        <br />
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="percent">{this.props.percent}% Complete</span>
      </div>
    );
  }
}

export default BusinessMoveDestinationAddressQuestion;