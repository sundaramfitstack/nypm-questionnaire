import React from 'react';

class SpecialtyMoveReviewQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.specialtyMoveReviewTextOnChange = this.specialtyMoveReviewTextOnChange.bind(this);
    this.specialtyMoveSubmitButtonOnClick = this.specialtyMoveSubmitButtonOnClick.bind(this);
  }
    
  specialtyMoveReviewTextOnChange(event){
    this.props.specialtyMoveReviewTextOnChange(event.target.value);
  }

  specialtyMoveSubmitButtonOnClick(){
    this.props.specialtyMoveSubmitButtonOnClick();
  }

  render(){
    return (
      <div>
        <span className="question">Let’s quickly review the information for your specialty move free quote:</span>
        <br/>        
        <table className="table table-condensed">
          <tbody>
            <tr>
              <td>Service</td><td>{this.props.service_type}</td>
            </tr>
            <tr>
              <td>Service Type</td><td>{this.props.specialty_move_type}</td>
            </tr>
            <tr>
              <td>Moving From</td><td>{this.props.specialty_move_source_address}</td>
            </tr>
            <tr>
              <td>Moving To</td><td>{this.props.specialty_move_destination_address}</td>
            </tr>
            <tr>
              <td>Date</td><td>{this.props.specialty_move_date}</td>
            </tr>
            <tr>
              <td>Additional Info</td><td>{this.props.specialty_move_additional_info}</td>              
            </tr>
          </tbody>
        </table>
        <button className="" onClick={this.specialtyMoveSubmitButtonOnClick}>Submit</button>
        <br />
      </div>
    );
  }
}

export default SpecialtyMoveReviewQuestion;