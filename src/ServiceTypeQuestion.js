import React from 'react';

class ServiceTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeServiceTypeButtonOnClick = this.homeServiceTypeButtonOnClick.bind(this);
    this.businessServiceTypeButtonOnClick = this.businessServiceTypeButtonOnClick.bind(this);
    this.specialtyServiceTypeButtonOnClick = this.specialtyServiceTypeButtonOnClick.bind(this);
    this.junkRemovalServiceTypeButtonOnClick = this.junkRemovalServiceTypeButtonOnClick.bind(this);
  }
  
  
  homeServiceTypeButtonOnClick(){
    this.props.homeServiceTypeButtonOnClick();
  }

  businessServiceTypeButtonOnClick(){
    this.props.businessServiceTypeButtonOnClick();
  }

  specialtyServiceTypeButtonOnClick(){
    this.props.specialtyServiceTypeButtonOnClick();
  }

  junkRemovalServiceTypeButtonOnClick(){
    this.props.junkRemovalServiceTypeButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Thanks!  Ok, let’s get your quote started. What service are you interested in?</span>
        <br/>
        
        <button className="" onClick={this.homeServiceTypeButtonOnClick}>Home</button> <button className="" onClick={this.businessServiceTypeButtonOnClick}>Business</button> <button className="" onClick={this.specialtyServiceTypeButtonOnClick}>Specialty</button> <button className="" onClick={this.junkRemovalServiceTypeButtonOnClick}>Junk Removal</button>
      </div>
    );
  }
}

export default ServiceTypeQuestion;