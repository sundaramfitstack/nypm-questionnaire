import React from 'react';

class BusinessMoveTypeQuestion extends React.Component {

  constructor(props) {    
    super(props);    
    this.regularBusinessTypeButtonOnClick = this.regularBusinessTypeButtonOnClick.bind(this);
    this.fullServiceBusinessTypeButtonOnClick = this.fullServiceBusinessTypeButtonOnClick.bind(this);
  }
    
  regularBusinessTypeButtonOnClick(){
    this.props.regularBusinessTypeButtonOnClick();
  }

  fullServiceBusinessTypeButtonOnClick(){
    this.props.fullServiceBusinessTypeButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Business moving it is! What type of move would you like?</span>
        <br/>
        <button className="" onClick={this.regularBusinessTypeButtonOnClick}>Regular</button> <button className="" onClick={this.fullServiceBusinessTypeButtonOnClick}>Full Service</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveTypeQuestion;