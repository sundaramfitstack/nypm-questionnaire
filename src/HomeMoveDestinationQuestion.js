import React from 'react';

class HomeMoveDestinationQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveDestinationAddressTextboxOnChange = this.homeMoveDestinationAddressTextboxOnChange.bind(this);
    this.homeMoveDestinationAddressNextButtonOnClick = this.homeMoveDestinationAddressNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }
  
  homeMoveDestinationAddressTextboxOnChange(event){
    this.props.homeMoveDestinationAddressTextboxOnChange(event.target.value);
  }

  homeMoveDestinationAddressNextButtonOnClick(){
    this.props.homeMoveDestinationAddressNextButtonOnClick();
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
        <span className="question">Where would you like us to drop off your things?</span>
        <br/>
        <br/>        
        <input type="text" className="" onChange={this.homeMoveDestinationAddressTextboxOnChange} placeholder="'Move to' address" ref={(input) => { this.nameInput = input; }}/>
        <br/>
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.homeMoveDestinationAddressNextButtonOnClick}>Next</button>
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

export default HomeMoveDestinationQuestion;