import React from 'react';

class JunkRemovalSourceAddressQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.junkRemovalSourceAddressTextOnChange = this.junkRemovalSourceAddressTextOnChange.bind(this);
    this.junkRemovalSourceAddressNextButtonOnClick = this.junkRemovalSourceAddressNextButtonOnClick.bind(this);
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

  render(){
    return (
      <div>
        <span className="question">Where would you like us to make the pickup?</span>
        <br/>        
        <input type="text" className="" onChange={this.junkRemovalSourceAddressTextOnChange} placeholder="'Pickup' address" ref={(input) => { this.nameInput = input; }}/>
        <br />
        <button className="" onClick={this.junkRemovalSourceAddressNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default JunkRemovalSourceAddressQuestion;