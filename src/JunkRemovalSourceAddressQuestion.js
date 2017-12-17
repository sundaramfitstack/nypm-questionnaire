import React from 'react';

class JunkRemovalSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.junkRemovalSourceAddressTextOnChange = this.junkRemovalSourceAddressTextOnChange.bind(this);
    this.junkRemovalSourceAddressNextButtonOnClick = this.junkRemovalSourceAddressNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }
    
  junkRemovalSourceAddressTextOnChange(event){
    this.props.junkRemovalSourceAddressTextOnChange(event.target.value);
  }

  junkRemovalSourceAddressNextButtonOnClick(){
    this.props.junkRemovalSourceAddressNextButtonOnClick();
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
        <span className="question">Where would you like us to make the pickup?</span>
        <br/>
        <br/>        
        <input type="text" className="" onChange={this.junkRemovalSourceAddressTextOnChange} placeholder="'Pickup' address" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.junkRemovalSourceAddressNextButtonOnClick}>Next</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="percent">{this.props.percent}% Complete</span>
      </div>
    );
  }
}

export default JunkRemovalSourceAddressQuestion;