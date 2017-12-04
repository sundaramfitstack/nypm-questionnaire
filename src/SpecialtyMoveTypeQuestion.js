import React from 'react';

class SpecialtyMoveTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.regularSpecialtyMoveButtonOnClick = this.regularSpecialtyMoveButtonOnClick.bind(this);
    this.fullServiceSpecialtyMoveButtonOnClick = this.fullServiceSpecialtyMoveButtonOnClick.bind(this);
  }
  
  regularSpecialtyMoveButtonOnClick(){
    this.props.regularSpecialtyMoveButtonOnClick();
  }

  fullServiceSpecialtyMoveButtonOnClick(){
    this.props.fullServiceSpecialtyMoveButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Specialty moving it is! What type of move would you like?</span>
        <br/>
        <button className="" onClick={this.regularSpecialtyMoveButtonOnClick}>Regular</button> <button className="" onClick={this.fullServiceSpecialtyMoveButtonOnClick}>Full Service</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveTypeQuestion;