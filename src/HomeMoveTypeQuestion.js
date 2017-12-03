import React from 'react';

class HomeMoveTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.regularHomeMoveTypeButtonOnClick = this.regularHomeMoveTypeButtonOnClick.bind(this);
    this.fullServiceHomeMoveTypeButtonOnClick = this.fullServiceHomeMoveTypeButtonOnClick.bind(this);
  }

  
  regularHomeMoveTypeButtonOnClick(){
    this.props.regularHomeMoveTypeButtonOnClick();
  }

  fullServiceHomeMoveTypeButtonOnClick(){
    this.props.fullServiceHomeMoveTypeButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Home move it is! What type of move would you like?</span>
        <br/>        
        <button className="" onClick={this.regularHomeMoveTypeButtonOnClick}>Regular</button>
        <br />
        <button className="" onClick={this.fullServiceHomeMoveTypeButtonOnClick}>Full Service</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveTypeQuestion;