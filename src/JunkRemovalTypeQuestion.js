import React from 'react';

class JunkRemovalTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.regularJunkRemovalTypeButtonOnClick = this.regularJunkRemovalTypeButtonOnClick.bind(this);
    this.fullServiceJunkRemovalTypeButtonOnClick = this.fullServiceJunkRemovalTypeButtonOnClick.bind(this);
  }

  
  regularJunkRemovalTypeButtonOnClick(){
    this.props.regularJunkRemovalTypeButtonOnClick();
  }

  fullServiceJunkRemovalTypeButtonOnClick(){
    this.props.fullServiceJunkRemovalTypeButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Home move it is! What type of move would you like?</span>
        <br/>        
        <button className="" onClick={this.regularJunkRemovalTypeButtonOnClick}>Regular</button> <button className="" onClick={this.fullServiceJunkRemovalTypeButtonOnClick}>Full Service</button>
        <br />
      </div>
    );
  }
}

export default JunkRemovalTypeQuestion;