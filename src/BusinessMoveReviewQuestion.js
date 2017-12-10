import React from 'react';

class BusinessMoveReviewQuestion extends React.Component {
  constructor(props) {   
    super(props);    
    this.businessMoveReviewTextOnChanage = this.businessMoveReviewTextOnChange.bind(this);
    this.businessMoveSubmitButtonOnClick = this.businessMoveSubmitButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }

  
  businessMoveReviewTextOnChange(event){
    this.props.businessMoveReviewTextOnChanage(event.target.value);
  }

  businessMoveSubmitButtonOnClick(){
    this.props.businessMoveSubmitButtonOnClick();
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
            <span className="" onClick={this.backButtonOnClick}>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
          </div>
          <div className="close-button">
            <span className="" onClick={this.closeButtonOnClick}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">Let’s quickly review the information for your business move free quote:</span>
        <br/>        
        <br/>
        <table className="table table-condensed">
          <tbody>
            <tr>
              <td>Service</td><td>{this.props.service_type}</td>
            </tr>
            <tr>
              <td>Service Type</td><td>{this.props.business_move_type}</td>
            </tr>
            <tr>
              <td>Moving From</td><td>{this.props.business_move_source_address}</td>
            </tr>
            <tr>
              <td>Moving To</td><td>{this.props.business_move_destination_address}</td>
            </tr>
            <tr>
              <td>Size</td><td>{this.props.business_move_size}</td>
            </tr>
            <tr>
              <td>Date</td><td>{this.props.business_move_date}</td>
            </tr>
            <tr>
              <td>Additional Info</td><td>{this.props.business_move_additional_info}</td>              
            </tr>
          </tbody>
        </table>
        <button className="" onClick={this.businessMoveSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default BusinessMoveReviewQuestion;