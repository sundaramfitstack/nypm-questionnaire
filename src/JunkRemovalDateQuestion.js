import React from 'react';

class JunkRemovalDateQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.junkRemovalDateTextOnChange = this.junkRemovalDateTextOnChange.bind(this);
    this.junkRemovalDateNextButtonOnClick = this.junkRemovalDateNextButtonOnClick.bind(this);
  }
    
  junkRemovalDateTextOnChange(event){
    this.props.junkRemovalDateTextOnChange(event.target.value);
  }

  junkRemovalDateNextButtonOnClick(){
    this.props.junkRemovalDateNextButtonOnClick();
  }

  componentDidMount(){
     this.nameInput.focus(); 
  }

  render(){
    return (
      <div>
        <span className="question">Junk removal it is! What is your preferred pickup date?</span>
        <br/>        
        <input type="text" className="" onChange={this.junkRemovalDateTextOnChange} placeholder="MM/DD/YY" ref={(input) => { this.nameInput = input; }}/>
        <br />        
        <button className="" onClick={this.junkRemovalDateNextButtonOnClick}>Next</button>
        <br />
      </div>
    );
  }
}

export default JunkRemovalDateQuestion;