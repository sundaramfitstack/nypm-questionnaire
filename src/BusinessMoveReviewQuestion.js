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

    let styles = {'width' : this.props.percent+'%'};
    
    return (
      <div>
        <div className="nav-container">
          <div className="back-button">
            <span className="back-button" onClick={this.backButtonOnClick}>
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
          </div>
          <div className="close-button">
            <span className="close-button" onClick={this.closeButtonOnClick}>
              <i className="fa fa-times" aria-hidden="true"></i>
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
        <button type="button" className="btn btn-warning" onClick={this.businessMoveSubmitButtonOnClick}>Submit</button>
        <br />
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="percent">{this.props.percent}% Complete</span>
        <br/>
        <br/>
        <div className="progress">
          <div id='pb' className="progress-bar" role="progressbar" aria-valuenow="{this.props.percent}" aria-valuemin="0" aria-valuemax="100" style={styles}></div>
        </div>
      </div>
    );
  }
}

export default BusinessMoveReviewQuestion;