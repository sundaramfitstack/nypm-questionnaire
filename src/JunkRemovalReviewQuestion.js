import React from 'react';

class JunkRemovalReviewQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    this.junkRemovalReviewTextOnChange = this.junkRemovalReviewTextOnChange.bind(this);
    this.junkRemovalSubmitButtonOnClick = this.junkRemovalSubmitButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }
    
  junkRemovalReviewTextOnChange(event){
    this.props.junkRemovalReviewTextOnChange(event.target.value);
  }

  junkRemovalSubmitButtonOnClick(){
    this.props.junkRemovalSubmitButtonOnClick();
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
        <span className="question">Let’s quickly review the information for your specialty move free quote:</span>
        <br/>        
        <table className="table table-condensed">
          <tbody>
            <tr>
              <td>Service</td><td>{this.props.service_type}</td>
            </tr>
            <tr>
              <td>Service Type</td><td>{this.props.junk_removal_type}</td>
            </tr>
            <tr>
              <td>Moving From</td><td>{this.props.junk_removal_source_address}</td>
            </tr>
            <tr>
              <td>Date</td><td>{this.props.junk_removal_date}</td>
            </tr>
            <tr>
              <td>Additional Info</td><td>{this.props.junk_removal_additional_info}</td>              
            </tr>
          </tbody>
        </table>
        <button className="" onClick={this.junkRemovalSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default JunkRemovalReviewQuestion;