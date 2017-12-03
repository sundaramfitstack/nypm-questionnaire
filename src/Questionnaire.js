import React from 'react';
import './index.css';

import BusinessMoveDateQuestion from './BusinessMoveDateQuestion.js';
import BusinessMoveDestinationAddressQuestion from './BusinessMoveDestinationAddressQuestion.js';
import FirstAndLastNameQuestion from './FirstAndLastNameQuestion.js';
import EmailQuestion from './EmailQuestion.js';
import ServiceTypeQuestion from './ServiceTypeQuestion.js';
import HomeMovingTypeQuestion from './HomeMovingTypeQuestion.js';
import BusinessMoveAdditionalInfoQuestion from './BusinessMoveAdditionalInfoQuestion.js';

class Questionnaire extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'current_question' : 'name',
      'customer_name' : '',
      'customer_email' : '',
      'customer_phone' : '',
      'service_type' : '',
      'home_moving_type' : '',
      'home_moving_date' :'',
      'home_moving_source_address' : '',
      'home_moving_destination_address' : '',
      'home_moving_size' : '',
      'home_moving_budget' : '',
      'home_moving_notes':'',
      'business_moving_type' : '',
      'business_moving_notes' : '',
      'business_moving_date' : '',
      'business_moving_source_address' : '',
      'business_moving_size' : '',
      'business_moving_destination_address' : '',
      'business_move_additional_info' : ''
    };
 
    
    this.nameTextOnChange = this.nameTextOnChange.bind(this);
    this.nameNextButtonOnClick = this.nameNextButtonOnClick.bind(this);
        

    this.emailTextOnChange = this.emailTextOnChange.bind(this);
    this.emailNextButtonOnClick = this.emailNextButtonOnClick.bind(this);
    

    this.homeMovingDateTextOnChange = this.homeMovingDateTextOnChange.bind(this);
    this.homeMovingDateButtonOnClick = this.homeMovingDateNextButtonOnClick.bind(this);


    /*---------------------------------------

     ServiceTypeQuestion support methods

    ---------------------------------------*/
    this.homeServiceTypeButtonOnClick = this.homeServiceTypeButtonOnClick.bind(this);
    this.businessServiceTypeButtonOnClick = this.businessServiceTypeButtonOnClick.bind(this);
    this.specialtyServiceTypeButtonOnClick = this.specialtyServiceTypeButtonOnClick.bind(this);
    this.junkRemovalServiceTypeButtonOnClick = this.junkRemovalServiceTypeButtonOnClick.bind(this);

    /*---------------------------------------

     BusinessMoveDateQuestion support methods

    ---------------------------------------*/
    this.businessMovingDateTextboxOnChange = this.businessMovingDateTextboxOnChange.bind(this);
    this.homeMovingDateNextButtonOnClick = this.homeMovingDateNextButtonOnClick.bind(this);

    /*---------------------------------------

     BusinessMoveDestinationQuestion support methods

    ---------------------------------------*/
    this.businessMoveDestinationAddressTextboxOnChange = this.businessMoveDestinationAddressTextboxOnChange.bind(this);
    this.businessMoveDestinationAddressNextButtonOnClick = this.businessMoveDestinationAddressNextButtonOnClick.bind(this);

       
    this.businessMoveAdditionalInfoTextareaOnChange = this.businessMoveAdditionalInfoTextareaOnChange.bind(this);
    this.businessMoveAdditionalInfoNextButtonOnClick = this.businessMoveAdditionalInfoNextButtonOnClick.bind(this);
    this.businessMoveAdditionalInfoSkipButtonOnClick = this.businessMoveAdditionalInfoSkipButtonOnClick.bind(this);
 
                
  }


  handleNameTextChange(nameText) {
    /* Need to add some validation at some point */
    this.setState({
      customer_name: nameText,
    });
  }
  
  handleNameNextButtonOnClick(){
    /* Need to add some validation at some point */
    this.setState({
      current_question : 'email',
    });
  }



  handleEmailTextChange(emailText) {
    /* Need to add some validation at some point */
    this.setState({
      customer_email: emailText,
    });
    console.log(emailText);
  }

 
  handleEmailNextButtonOnClick(){
    /* Need to add some validation at some point */
    this.setState({
      current_question : 'service_type'
    });
  }


  homeMovingDateTextOnChange(text) {
    /* Need to add some validation at some point */
    this.setState({
      'home_moving_date': text,
    });
  }


  /*---------------------------------------

   ServiceTypeQuestion support methods

  ---------------------------------------*/
  homeServiceTypeButtonOnClick(){
    this.setState({
      'current_question': '',
    });
  }

  businessServiceTypeButtonOnClick(){
    this.setState({
      'current_question': '',
    });
  }

  specialtyServiceTypeButtonOnClick(){
    this.setState({
      'current_question': '',
    });
  }

  junkRemovalServiceTypeButtonOnClick(){
    this.setState({
      'current_question': '',
    });
  }



 /*---------------------------------------

   BusinessMoveDateQuestion support methods

  ---------------------------------------*/
  businessMovingDateTextboxOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'business_moving_date': text,
    });

  }
  
  businessMovingDateNextButtonOnClick(text){
    this.setState({
      '': ,
    });
  }


  /*---------------------------------------

   BusinessMoveDestinationQuestion support methods

  ---------------------------------------*/
  businessMoveSourceAddressTextboxOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'business_moving_destination_address': text,
    });
  }

  businessMoveDestinationAddressNextButtonOnClick(){
    this.setState({
      'current_question': '',
    });
  }






  homeMovingDateNextButtonOnClick(){
    this.setState({
      current_question : 'home_moving_from_address'
    });
  }

  businessMoveAdditionalInfoTextareaOnChange(text){
   /* Need to add some validation at some point */
    this.setState({
      'business_move_additional_info': text,
    });
  }

  businessMoveAdditionalInfoNextButtonOnClick(){
    this.setState({
      'current_question' : ''
    });
  }

  businessMoveAdditionalInfoSkipButtonOnClick(){
    this.setState({
      'current_question' : ''
    });
  }


  render() {
    if (this.state.current_question === 'name'){
      return (
        <div>
          <FirstAndLastNameQuestion
            // customer_name={this.state.customer_name}
            nameTextOnChange={this.handleNameTextChange}
            nameNextButtonOnClick={this.nameNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'email'){
      return (
        <div>
          <EmailQuestion
            // customer_email={this.state.customer_email}
            customer_name={this.state.customer_name}
            emailTextOnChange={this.handleEmailTextChange}
            emailNextButtonOnClick={this.emailNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'service_type'){
      return (
        <div>
          <ServiceTypeQuestion          
            customer_email={this.state.customer_email}
            customer_name={this.state.customer_name}
            service_type={this.state.service_type}          
            homeServiceTypeButtonOnClick={this.homeServiceTypeButtonOnClick}
            businessServiceTypeButtonOnClick={this.businessServiceTypeButtonOnClick}
            specialtyServiceTypeButtonOnClick={this.specialtyServiceTypeButtonOnClick}
            junkRemovalServiceTypeButtonOnClick={this.junkRemovalServiceTypeButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'home_service_type'){
      return (
      <div>
          <HomeServiceTypeQuestion
            homeMovingRegularButtonOnClick={this.homeMovingRegularButtonOnClick}
            homeMovingFullServiceButtonOnClick={this.homeMovingFullServiceButtonOnClick}
          />
      </div>
      );
    }
    else if (){
      return (
        <div>
          <BusinessMoveAdditionalInfoQuestion
          
            business_additional_info={this.state.business_additional_info}
          
            businessMoveAdditionalInfoTextareaOnChange={this.businessMoveAdditionalInfoTextareaOnChange}
            businessMoveAdditionalInfoNextButtonOnClick={this.businessMoveAdditionalInfoNextButtonOnClick}
            businessMoveAdditionalInfoSkipButtonOnClick={this.businessMoveAdditionalInfoSkipButtonOnClick}
          />
        </div>
      );
    }
    else if (){
      return (
        <div>
          <BusinessMoveDateQuestion          
            business_moving_date={this.state.business_moving_date}          
            businessMovingDateTextboxOnChange={this.businessMovingDateTextboxOnChange}
            businessMovingDateNextButtonOnClick={this.businessMovingDateNextButtonOnClick}
          />
        </div>
      );
    }
    else if (){
      return (
        <div>
          <BusinessMoveDestinationAddressQuestion          
            business_destination_address={this.state.business_destination_address}          
            businessMoveDestinationAddressTextboxOnChange={this.businessMoveDestinationAddressTextboxOnChange}
            businessMoveDestinationAddressNextButtonOnClick={this.businessMoveDestinationAddressNextButtonOnClick}
          />
        </div>
      );
    }
  }
}


// ReactDOM.render(
//   <FilterableProductTable products={PRODUCTS} />,
//   document.getElementById('container')
// );


// class Questionnaire extends React.Component {

// 	constructor(props){
// 		super(props){

// 		}
// 	}



//   render() {
//     return (
//       <div className="questionnaire">
//       	<FirstAndLastNameQuestion done=""/>        
//       </div>
//     );
//   }
// }


export default Questionnaire;