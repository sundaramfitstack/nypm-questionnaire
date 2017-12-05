import React from 'react';

class HomeMoveSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveSourceAddressTextboxOnChange = this.homeMoveSourceAddressTextboxOnChange.bind(this);
    this.homeMoveSourceAddressNextButtonOnClick = this.homeMoveSourceAddressNextButtonOnClick.bind(this);
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

  render(){
    return (
      <div>
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