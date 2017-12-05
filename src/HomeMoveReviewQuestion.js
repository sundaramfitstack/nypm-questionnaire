import React from 'react';

class HomeMoveReviewQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.homeMoveReviewTextOnChange = this.homeMoveReviewTextOnChange.bind(this);
    this.homeMoveSubmitButtonOnClick = this.homeMoveSubmitButtonOnClick.bind(this);
  }
  
  homeMoveReviewTextOnChange(event){
    this.props.homeMoveReviewTextOnChange(event.target.value);
  }

  homeMoveSubmitButtonOnClick(){
    this.props.homeMoveSubmitButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Let’s quickly review the information for your free quote:</span>
        <br/>        
        <table className="table table-condensed">
          <tbody>
            <tr>
              <td>Service</td><td>{this.props.service_type}</td>
            </tr>
            <tr>
              <td>Service Type</td><td>{this.props.home_move_type}</td>
            </tr>
            <tr>
              <td>Moving From</td><td>{this.props.home_move_source_address}</td>
            </tr>
            <tr>
              <td>Moving To</td><td>{this.props.home_move_destination_address}</td>
            </tr>
            <tr>
              <td>Size</td><td>{this.props.home_move_size}</td>
            </tr>
            <tr>
              <td>Budget</td><td>{this.props.home_move_budget}</td>
            </tr>
            <tr>
              <td>Date</td><td>{this.props.home_move_date}</td>
            </tr>
            <tr>
              <td>Additional Info</td><td>{this.props.home_move_additional_info}</td>              
            </tr>
          </tbody>
        </table>
        <br />
        <button className="" onClick={this.homeMoveSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveReviewQuestion;