import React from 'react';
import './index.css';


class ServiceTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    this.homeButtonOnClick = this.homeButtonOnClick.bind(this);
    this.businessButtonOnClick= this.businessButtonOnClick.bind(this);
    this.specialityButtonOnClick= this.specialityButtonOnClick.bind(this);
    this.storageButtonOnClick= this.storageButtonOnClick.bind(this);
    this.haulingButtonOnClick= this.haulingButtonOnClick.bind(this);
  }
  
  homeButtonOnClick(e) {
    this.props.homeButtonOnClick();
  }

  businessButtonOnClick() {
    this.props.businessButtonOnClick();
  }

  specialityButtonOnClick() {
    this.props.specialityButtonOnClick();
  }

  storageButtonOnClick() {
    this.props.storageButtonOnClick();
  }

  haulingButtonOnClick() {
    this.props.haulingButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Thanks! Ok, let's get your quote started.<br />What service are you interested in?</span>
        <br/>
        <button className="button" onClick={this.homeButtonOnClick}>Home</button> <button className="button" onClick={this.businessButtonOnClick}>Business</button> <button className="button" onClick={this.specialtyButtonOnClick}>Specialty</button> <button className="button" onClick={this.storageButtonOnClick}>Storage</button> <button className="button" onClick={this.haulingButtonOnClick}>Hauling</button> 
      </div>
    );

  }
}

export default ServiceTypeQuestion;