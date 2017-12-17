import React from 'react';

class ServiceTypeQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeServiceTypeButtonOnClick = this.homeServiceTypeButtonOnClick.bind(this);
    this.businessServiceTypeButtonOnClick = this.businessServiceTypeButtonOnClick.bind(this);
    this.specialtyServiceTypeButtonOnClick = this.specialtyServiceTypeButtonOnClick.bind(this);
    this.junkRemovalServiceTypeButtonOnClick = this.junkRemovalServiceTypeButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
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

  closeButtonOnClick(){
    this.props.closeButtonOnClick();
  }

  backButtonOnClick(){
    this.props.backButtonOnClick();
  }

  render(){                             
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
        <span className="question">Thanks!  Ok, let’s get your quote started. What service are you interested in?</span>
        <br/>
        <br/>        
        <button type="button" className="btn btn-warning" onClick={this.homeServiceTypeButtonOnClick}>Home</button> <button type="button" className="btn btn-warning" onClick={this.businessServiceTypeButtonOnClick}>Business</button> <button type="button" className="btn btn-warning" onClick={this.specialtyServiceTypeButtonOnClick}>Specialty</button> <button type="button" className="btn btn-warning" onClick={this.junkRemovalServiceTypeButtonOnClick}>Junk Removal</button>
      </div>
    );
  }
}

export default ServiceTypeQuestion;