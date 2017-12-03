import React from 'react';
import './index.css';

import BusinessMoveDateQuestion from './BusinessMoveDateQuestion.js';
import BusinessMoveDestinationAddressQuestion from './BusinessMoveDestinationAddressQuestion.js';
import BusinessMoveReviewQuestion from './BusinessMoveReviewQuestion.js';
import BusinessMoveAdditionalInfoQuestion from './BusinessMoveAdditionalInfoQuestion.js';
import BusinessMoveSizeQuestion from './BusinessMoveSizeQuestion.js';
import BusinessMoveSourceAddressQuestion from './BusinessMoveSourceAddressQuestion.js';
import BusinessMoveTypeQuestion from './BusinessMoveTypeQuestion.js';

import CustomerEmailQuestion from './CustomerEmailQuestion.js';
import CustomerNameQuestion from './CustomerNameQuestion.js';
import CustomerPhoneNumberQuestion from './CustomerPhoneNumberQuestion.js';

import HomeMoveAdditionalInfoQuestion from './HomeMoveAdditionalInfoQuestion.js';
import HomeMoveBudgetQuestion from './HomeMoveBudgetQuestion.js';
import HomeMoveDateQuestion from './HomeMoveDateQuestion.js';
import HomeMoveDestinationQuestion from './HomeMoveDestinationQuestion.js';
import HomeMoveReviewQuestion from './HomeMoveReviewQuestion.js';
import HomeMoveSizeQuestion from './HomeMoveSizeQuestion.js';
import HomeMoveSourceAddressQuestion from './HomeMoveSourceAddressQuestion.js';


import FirstAndLastNameQuestion from './FirstAndLastNameQuestion.js';
import EmailQuestion from './EmailQuestion.js';
import ServiceTypeQuestion from './ServiceTypeQuestion.js';
import HomeMoveTypeQuestion from './HomeMoveTypeQuestion.js';


class Questionnaire extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      'current_question' : 'name',
      'customer_name' : '',
      'customer_email' : '',
      'customer_phone' : '',
      'service_type' : '',
      'home_move_additional_info' : '',
      'home_move_type' : '',
      'home_move_date' :'',
      'home_move_source_address' : '',
      'home_move_destination_address' : '',
      'home_move_size' : '',
      'home_move_budget' : '',
      'home_move_notes':'',
      'business_move_type' : '',
      'business_move_notes' : '',
      'business_move_date' : '',
      'business_move_source_address' : '',
      'business_move_size' : '',
      'business_move_destination_address' : '',
      'business_move_additional_info' : ''
    };
 
    
    this.nameTextOnChange = this.nameTextOnChange.bind(this);
    this.nameNextButtonOnClick = this.nameNextButtonOnClick.bind(this);
        

    this.emailTextOnChange = this.emailTextOnChange.bind(this);
    this.emailNextButtonOnClick = this.emailNextButtonOnClick.bind(this);
    

    this.homeMoveDateTextOnChange = this.homeMoveDateTextOnChange.bind(this);
    this.homeMoveDateButtonOnClick = this.homeMoveDateNextButtonOnClick.bind(this);



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
    this.businessMoveDateTextboxOnChange = this.businessMoveDateTextboxOnChange.bind(this);
    this.homeMoveDateNextButtonOnClick = this.homeMoveDateNextButtonOnClick.bind(this);

    /*---------------------------------------

     BusinessMoveDestinationQuestion support methods

    ---------------------------------------*/
    this.businessMoveDestinationAddressTextboxOnChange = this.businessMoveDestinationAddressTextboxOnChange.bind(this);
    this.businessMoveDestinationAddressNextButtonOnClick = this.businessMoveDestinationAddressNextButtonOnClick.bind(this);


    /*---------------------------------------

     BusinessMoveReviewQuestion support methods

    ---------------------------------------*/
    this.businessMoveReviewTextOnChange = this.businessMoveReviewTextOnChange.bind(this);
    this.businessMoveSubmitButtonOnClick = this.businessMoveSubmitButtonOnClick.bind(this);


    /*---------------------------------------

     BusinessMoveAddtionalInfoQuestion support methods

    ---------------------------------------*/
    this.businessMoveAdditionalInfoTextareaOnChange = this.businessMoveAdditionalInfoTextareaOnChange.bind(this);
    this.businessMoveAdditionalInfoNextButtonOnClick = this.businessMoveAdditionalInfoNextButtonOnClick.bind(this);
    this.businessMoveAdditionalInfoSkipButtonOnClick = this.businessMoveAdditionalInfoSkipButtonOnClick.bind(this);

       
    /*---------------------------------------

     BusinessMoveSizeQuestion support methods

    ---------------------------------------*/
    this.businessMoveSize2000ButtonOnClick = this.businessMoveSize2000ButtonOnClick.bind(this);
    this.businessMoveSize3000ButtonOnClick = this.businessMoveSize3000ButtonOnClick.bind(this);
    this.businessMoveSize4000ButtonOnClick = this.businessMoveSize4000ButtonOnClick.bind(this);

    /*---------------------------------------

     BusinessMoveSourceAddressQuestion support methods

    ---------------------------------------*/
    this.businessMoveSourceAddressTextboxOnChange = this.businessMoveSourceAddressTextboxOnChange.bind(this);
    this.businessMoveSourceAddressNextButtonOnClick = this.businessMoveSourceAddressNextButtonOnClick.bind(this);


    /*---------------------------------------

     BusinessMoveTypeQuestion support methods

    ---------------------------------------*/
    this.regularBusinessTypeButtonOnClick = this.regularBusinessTypeButtonOnClick.bind(this);
    this.fullServiceBusinessTypeButtonOnClick = this.fullServiceBusinessTypeButtonOnClick.bind(this);

    /*---------------------------------------

     CustomerEmailQuestion support methods

    ---------------------------------------*/
    this.emailTextboxOnChange = this.emailTextboxOnChange.bind(this);
    this.customerEmailNextButtonOnClick = this.customerEmailNextButtonOnClick.bind(this);

    /*---------------------------------------

     CustomerNameQuestion support methods

    ---------------------------------------*/
    this.customerNameTextboxOnChange = this.customerNameTextboxOnChange.bind(this);
    this.customerNameNextButtonOnClick = this.customerNameNextButtonOnClick.bind(this);


    /*---------------------------------------

     CustomerPhoneQuestion support methods

    ---------------------------------------*/
    this.phoneNumberTextboxOnChange = this.phoneNumberTextboxOnChange.bind(this);
    this.phoneNumberNextButtonOnClick = this.phoneNumberNextButtonOnClick.bind(this);


    /*---------------------------------------

     HomeMoveAdditionalInfoQuestion support methods

    ---------------------------------------*/
    this.homeMoveAdditionalInfoTextareaOnChange = this.homeMoveAdditionalInfoTextareaOnChange.bind(this);
    this.homeMoveAdditionalInfoNextButtonOnClick = this.homeMoveAdditionalInfoNextButtonOnClick.bind(this);
    this.homeMoveAdditionalInfoSkipButtonOnClick = this.homeMoveAdditionalInfoSkipButtonOnClick.bind(this);

    /*---------------------------------------

     HomeMoveBudgeQuestion support methods

    ---------------------------------------*/
    this.homeMoveBudgetTextboxOnChange = this.homeMoveBudgetTextboxOnChange.bind(this);
    this.homeMoveBudgetNextButtonOnClick = this.homeMoveBudgetNextButtonOnClick.bind(this);
    this.homeMoveBudgetSkipButtonOnClick = this.homeMoveBudgetSkipButtonOnClick.bind(this);


    /*---------------------------------------

     HomeMoveDateQuestion support methods

    ---------------------------------------*/
    this.homeMoveDateTextboxOnChange = this.homeMoveDateTextboxOnChange.bind(this);
    this.homeMoveDateNextButtonOnClick = this.homeMoveDateNextButtonOnClick.bind(this);

    /*---------------------------------------

     HomeMoveDestinationAddressQuestion support methods

    ---------------------------------------*/
    this.homeMoveDestinationAddressTextboxOnChange = this.homeMoveDestinationAddressTextboxOnChange.bind(this);
    this.homeMoveDestinationAddressNextButtonOnClick = this.homeMoveDestinationAddressNextButtonOnClick.bind(this);


    /*---------------------------------------

     HomeMoveReviewQuestion support methods

    ---------------------------------------*/
    this.homeMoveReviewTextOnChange = this.homeMoveReviewTextOnChange.bind(this);
    this.homeMoveSubmitButtonOnClick = this.homeMoveSubmitButtonOnClick.bind(this);

    /*---------------------------------------

     HomeMoveSizeQuestion support methods

    ---------------------------------------*/
    this.oneBedroomButtonOnClick = this.oneBedroomButtonOnClick.bind(this);
    this.twoBedroomButtonOnClick = this.twoBedroomButtonOnClick.bind(this);
    this.threeBedroomButtonOnClick = this.threeBedroomButtonOnClick.bind(this);
    this.fourBedroomButtonOnClick = this.fourBedroomButtonOnClick.bind(this);


    /*---------------------------------------

     HomeMoveSourceAddressQuestion support methods

    ---------------------------------------*/
    this.homeMoveSourceAddressTextboxOnChange = this.homeMoveSourceAddressTextboxOnChange.bind(this);
    this.homeMoveSourceAddressNextButtonOnClick = this.homeMoveSourceAddressNextButtonOnClick.bind(this);


  }


  homeMoveDateNextButtonOnClick(){
    this.setState({
      current_question : 'home_move_from_address'
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


  homeMoveDateTextOnChange(text) {
    /* Need to add some validation at some point */
    this.setState({
      'home_move_date': text,
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
  businessMoveDateTextboxOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'business_move_date': text,
    });

  }
  
  businessMoveDateNextButtonOnClick(text){
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
      'business_move_destination_address': text,
    });
  }

  businessMoveDestinationAddressNextButtonOnClick(){
    this.setState({
      'current_question': '',
    });
  }




  /*---------------------------------------

   BusinessMoveReviewQuestion support methods

  ---------------------------------------*/
  businessMoveReviewTextOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      '': ,
    });
  }

  businessMoveSubmitButtonOnClick(){
    /* Adjust state as needed here */
    this.setState({
      '': ,
    });
  }


  /*---------------------------------------

   BusinessMoveAddtionalInfoQuestion support methods

  ---------------------------------------*/
  businessMoveAdditionalInfoTextareaOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
  }

  businessMoveAdditionalInfoNextButtonOnClick(){
    this.setState({
        'current_question': ,
    });
  }

  businessMoveAdditionalInfoSkipButtonOnClick(){
    this.setState({
      'current_question': ,
    });
  }


  /*---------------------------------------

   BusinessMoveSizeQuestion support methods

  ---------------------------------------*/
  businessMoveSize2000ButtonOnClick(){
    this.setState({
      'current_question': ,
    });
  }

  businessMoveSize3000ButtonOnClick(){
    this.setState({
      'current_question': ,
    });
  }

  businessMoveSize4000ButtonOnClick(){
    this.setState({
      'current_question': ,
    });
  }


  /*---------------------------------------

   BusinessMoveSourceAddressQuestion support methods

  ---------------------------------------*/
  businessMoveSourceAddressTextboxOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }

    this.setState({
      '': ,
    });

  }

  businessMoveSourceAddressNextButtonOnClick(){
    this.setState({
      'current_question': ,
    });
  }


  /*---------------------------------------

   BusinessMoveTypeQuestion support methods

  ---------------------------------------*/
  regularBusinessTypeButtonOnClick(){
    this.setState({
      'business_move_type': 'regular',
      'current_question' : ''
    });
  }

  fullServiceBusinessTypeButtonOnClick(text){
      this.setState({
      'business_move_type': 'full service',
      'current_question' : ''
    });
  }

  /*---------------------------------------

   CustomerEmailQuestion support methods

  ---------------------------------------*/
  emailTextboxOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
  }

  customerEmailNextButtonOnClick(){
    this.setState({
      'current_question': ,
    });
  }


  /*---------------------------------------

   CustomerNameQuestion support methods

  ---------------------------------------*/
  customerNameTextboxOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }

    this.setState({
      'customer_name': text,
    });
  }

  customerNameNextButtonOnClick(){
    this.setState({
      'current_question': '',
    });
  }


  /*---------------------------------------

   CustomerPhoneQuestion support methods

  ---------------------------------------*/
  phoneNumberTextboxOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }

    this.setState({
      'customer_phone': text,
    });
  }

  phoneNumberNextButtonOnClick(){
    this.setState({
      'current_question': '',
    });

  }



  /*---------------------------------------

   HomeMoveAdditionalInfoQuestion support methods

  ---------------------------------------*/
  homeMoveAdditionalInfoTextareaOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }

    this.setState({
      'home_move_additional_info': text,
    });
  }

  homeMoveAdditionalInfoNextButtonOnClick(){
    this.setState({
      'current_question': ,
    });
  }

  homeMoveAdditionalInfoSkipButtonOnClick(){
    this.setState({
      'current_question': ,
    });
  }



  /*---------------------------------------

   HomeMoveBudgetQuestion support methods

  ---------------------------------------*/
  homeMoveBudgetTextboxOnChange(text){
  
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
  
    /* Adjust state as needed here */
    this.setState({
      'home_move_budget': text,
    });
  }

  homeMoveBudgetNextButtonOnClick(){
    this.setState({
      'current_question': '',
    });
  }

  homeMoveBudgetSkipButtonOnClick(){
    this.setState({
      'current_question': '',
    });
  }

  /*---------------------------------------

   HomeMoveDateQuestion support methods

  ---------------------------------------*/
  homeMoveDateTextboxOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    
    /* Adjust state as needed here */
    this.setState({
      'home_move_date': text,
    });
  }

  homeMoveDateNextButtonOnClick(){
    this.setState({
      'current_question': ,
    });
  }



  /*---------------------------------------

   HomeMoveDestinationAddressQuestion support methods

  ---------------------------------------*/
  
  homeMoveDestinationAddressTextboxOnChange(text){
    
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    
    /* Adjust state as needed here */
    this.setState({
      'home_move_destination_address': text,
    });
  }

  homeMoveDestinationAddressNextButtonOnClick(){
    this.setState({
      'current_question': ,
    });
  }


  /*---------------------------------------

   HomeMoveReviewQuestion support methods

  ---------------------------------------*/
  homeMoveReviewTextOnChange(text){

    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    
    /* Adjust state as needed here */
    this.setState({
      'home_move_review': text,
    });
  }

  homeMoveSubmitButtonOnClick(){
    this.setState({
      'current_question': '',
    });
  }


  /*---------------------------------------

   HomeMoveSizeQuestion support methods

  ---------------------------------------*/

  oneBedroomButtonOnClick(){
    this.setState({
      'home_move_size': '1 BR',
      'current_question' : ''
    });
  }

  twoBedroomButtonOnClick(){
    this.setState({
      'home_move_size': '2 BR',
      'current_question' : ''
    });
  }

  threeBedroomButtonOnClick(){
    this.setState({
      'home_move_size': '3 BR',
      'current_question' : ''
    });
  }

  fourBedroomButtonOnClick(){
    this.setState({
      'home_move_size': '4+ BR',
      'current_question' : ''
    });
  }


  /*---------------------------------------

   HomeMoveSourceAddressQuestion support methods

  ---------------------------------------*/

  homeMoveSourceAddressTextboxOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'home_move_source_address': text,
    });
  }

  homeMoveSourceAddressNextButtonOnClick(){
    this.setState({
      'current_question': '',
    });
  }


  /*---------------------------------------

    render logic follows

  ----------------------------------------*/

  render() {
    if (this.state.current_question === 'customer_name'){
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
    else if (this.state.current_question === 'customer_email'){
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
            homeMoveRegularButtonOnClick={this.homeMoveRegularButtonOnClick}
            homeMoveFullServiceButtonOnClick={this.homeMoveFullServiceButtonOnClick}
          />
      </div>
      );
    }
    // else if (){
    //   return (
    //     <div>
    //       <BusinessMoveAdditionalInfoQuestion          
    //         business_additional_info={this.state.business_move_additional_info}          
    //         businessMoveAdditionalInfoTextareaOnChange={this.businessMoveAdditionalInfoTextareaOnChange}
    //         businessMoveAdditionalInfoNextButtonOnClick={this.businessMoveAdditionalInfoNextButtonOnClick}
    //         businessMoveAdditionalInfoSkipButtonOnClick={this.businessMoveAdditionalInfoSkipButtonOnClick}
    //       />
    //     </div>
    //   );
    // }
    else if (this.state.current_question === 'business_move_date'){
      return (
        <div>
          <BusinessMoveDateQuestion          
            business_move_date={this.state.business_move_date}          
            businessMoveDateTextboxOnChange={this.businessMoveDateTextboxOnChange}
            businessMoveDateNextButtonOnClick={this.businessMoveDateNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'business_move_destination_address'){
      return (
        <div>
          <BusinessMoveDestinationAddressQuestion          
            business_destination_address={this.state.business_move_destination_address}          
            businessMoveDestinationAddressTextboxOnChange={this.businessMoveDestinationAddressTextboxOnChange}
            businessMoveDestinationAddressNextButtonOnClick={this.businessMoveDestinationAddressNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'business_move_review'){
      return (
        <div>
          <BusinessMoveReviewQuestion
            business_move_date={this.state.business_move_date}
            business_move_source_address={this.state.business_move_source_address}
            business_move_destination_address={this.state.business_move_destination_address}
            business_move_additional_info={this.state.business_move_additional_info}
            businessMoveReviewTextOnChanage={this.businessMoveReviewTextOnChanage}
            businessMoveSubmitButtonOnClick={this.businessMoveSubmitButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'business_move_additional_info'){
      return (
        <div>
          <BusinessMoveAdditionalInfoQuestion    
            business_move_additional_info={this.state.business_move_additional_info}    
            businessMoveAdditionalInfoTextareaOnChange={this.businessMoveAdditionalInfoTextareaOnChange}
            businessMoveAdditionalInfoNextButtonOnClick={this.businessMoveAdditionalInfoNextButtonOnClick}
            businessMoveAdditionalInfoSkipButtonOnClick={this.businessMoveAdditionalInfoSkipButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'business_move_size'){
      return (
        <div>
          <BusinessMoveSizeQuestion
            businessMoveSize2000ButtonOnClick={this.businessMoveSize2000ButtonOnClick}
            businessMoveSize3000ButtonOnClick={this.businessMoveSize3000ButtonOnClick}
            businessMoveSize4000ButtonOnClick={this.businessMoveSize4000ButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'business_move_source_address'){
      return (
        <div>
          <BusinessMoveSourceAddressQuestion          
            business_move_source_address={this.state.business_move_source_address}          
            businessMoveSourceAddressTextboxOnChange={this.businessMoveSourceAddressTextboxOnChange}
            businessMoveSourceAddressNextButtonOnClick={this.businessMoveSourceAddressNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'business_move_type'){
      return (
        <div>
          <BusinessMoveTypeQuestion
            regularBusinessTypeButtonOnClick={this.regularBusinessTypeButtonOnClick}
            fullServiceBusinessTypeButtonOnClick={this.fullServiceBusinessTypeButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'customer_email'){
      return (
        <div>
          <CustomerEmailQuestion          
            customer_email={this.state.customer_email}          
            customer_name={this.state.customer_name}          
            emailTextboxOnChange={this.emailTextboxOnChange}
            customerEmailNextButtonOnClick={this.customerEmailNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'customer_name'){
      return (
        <div>
          <CustomerNameQuestion          
            customer_name={this.state.customer_name}          
            customerNameTextboxOnChange={this.customerNameTextboxOnChange}
            customerNameNextButtonOnClick={this.customerNameNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'customer_phone'){
      return (
        <div>
          <CustomerPhoneNumberQuestion          
            customer_phone={this.state.customer_phone}          
            phoneNumberTextboxOnChange={this.phoneNumberTextboxOnChange}
            phoneNumberNextButtonOnClick={this.phoneNumberNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'home_move_additional_info'){
      return (
        <div>
          <HomeMoveAdditionalInfoQuestion          
            home_Move_additional_info={this.state.home_move_additional_info}          
            homeMoveAdditionalInfoTextareaOnChange={this.homeMoveAdditionalInfoTextareaOnChange}
            homeMoveAdditionalInfoNextButtonOnClick={this.homeMoveAdditionalInfoNextButtonOnClick}
            homeMoveAdditionalInfoSkipButtonOnClick={this.homeMoveAdditionalInfoSkipButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'home_move_budget'){
      return (
        <div>
          <HomeMoveBudgetQuestion          
            budget={this.state.home_move_budget}          
            homeMoveBudgetTextboxOnChange={this.homeMoveBudgetTextboxOnChange}
            homeMoveBudgetNextButtonOnClick={this.homeMoveBudgetNextButtonOnClick}
            homeMoveBudgetSkipButtonOnClick={this.homeMoveBudgetSkipButtonOnClick}
          />
        </div>
      ); 
    }
    else if (this.state.current_question == 'home_move_date'){
      return (
        <div>
          <HomeMoveDateQuestion          
            move_date={this.state.home_move_date}          
            homeMoveDateTextboxOnChange={this.homeMoveDateTextboxOnChange}
            homeMoveDateNextButtonOnClick={this.homeMoveDateNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question == 'home_move_destination_address'){
      return (
        <div>
          <HomeMoveDestinationQuestion    
            home_move_destination_address={this.state.home_move_destination_address}    
            homeMoveDestinationAddressTextboxOnChange={this.homeMoveDestinationAddressTextboxOnChange}
            homeMoveDestinationAddressNextButtonOnClick={this.homeMoveDestinationAddressNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question == 'home_move_review'){
      return (
        <div>
          <HomeMoveReviewQuestion
            homeMoveReviewTextOnChange={this.homeMoveReviewTextOnChange}
            homeMoveSubmitButtonOnClick={this.homeMoveSubmitButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question == 'home_move_size'){
      return (
        <div>
          <HomeMoveSizeQuestion          
            home_move_size={this.state.home_move_size}
            home_move_source_address={this.state.home_move_source_address}          
            oneBedroomButtonOnClick={this.oneBedroomButtonOnClick}
            twoBedroomButtonOnClick={this.twoBedroomButtonOnClick}
            threeBedroomButtonOnClick={this.threeBedroomButtonOnClick}
            fourBedroomButtonOnClick={this.fourBedroomButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question == 'home_move_source_address'){
      return (
        <div>
          <HomeMoveSourceAddressQuestion    
            home_move_source_address={this.state.home_move_source_address}    
            homeMoveSourceAddressTextboxOnChange={this.homeMoveSourceAddressTextboxOnChange}
            homeMoveSourceAddressNextButtonOnClick={this.homeMoveSourceAddressNextButtonOnClick}
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