import React from 'react';
import './index.css';

import BusinessMoveDateQuestion from './BusinessMoveDateQuestion.js';
import BusinessMoveDestinationAddressQuestion from './BusinessMoveDestinationAddressQuestion.js';
import BusinessMoveReviewQuestion from './BusinessMoveReviewQuestion.js';
import BusinessMoveAdditionalInfoQuestion from './BusinessMoveAdditionalInfoQuestion.js';
import BusinessMoveSizeQuestion from './BusinessMoveSizeQuestion.js';
import BusinessMoveSourceAddressQuestion from './BusinessMoveSourceAddressQuestion.js';
import BusinessMoveTypeQuestion from './BusinessMoveTypeQuestion.js';
import BusinessMoveConfirmationQuestion from './BusinessMoveConfirmationQuestion.js';

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
import HomeMoveTypeQuestion from './HomeMoveTypeQuestion.js';
import HomeMoveConfirmationQuestion from './HomeMoveConfirmationQuestion.js';

import JunkRemovalAddtionalInfoQuestion from './JunkRemovalAddtionalInfoQuestion.js';
import JunkRemovalDateQuestion from './JunkRemovalDateQuestion.js';
import JunkRemovalReviewQuestion from './JunkRemovalReviewQuestion.js';
import JunkRemovalSourceAddressQuestion from './JunkRemovalSourceAddressQuestion.js';
import JunkRemovalTypeQuestion from './JunkRemovalTypeQuestion.js';
import JunkRemovalConfirmationQuestion from './JunkRemovalConfirmationQuestion.js';

import SpecialtyMoveAdditionalInfoQuestion from './SpecialtyMoveAdditionalInfoQuestion.js';
import SpecialtyMoveDateQuestion from './SpecialtyMoveDateQuestion.js';
import SpecialtyMoveDestinationAddressQuestion from './SpecialtyMoveDestinationAddressQuestion.js';
import SpecialtyMoveReviewQuestion from './SpecialtyMoveReviewQuestion.js';
import SpecialtyMoveSourceAddressQuestion from './SpecialtyMoveSourceAddressQuestion.js';
import SpecialtyMoveTypeQuestion from './SpecialtyMoveTypeQuestion.js';
import SpecialtyMoveConfirmationQuestion from './SpecialtyMoveConfirmationQuestion.js';

import FirstAndLastNameQuestion from './FirstAndLastNameQuestion.js';
import EmailQuestion from './EmailQuestion.js';
import ServiceTypeQuestion from './ServiceTypeQuestion.js';



class Questionnaire extends React.Component {

  constructor(props) {
    super(props);

    const question_lookup = {
      'customer_name' : { 'next' : 'customer_email' },
      'customer_email' : { 'next' : 'customer_phone' },
      'customer_phone' : { 'next' : 'service_type' },
      'home_move_type' : { 'next' : 'home_move_date' },
      'home_move_date' : { 'next' : 'home_move_source_address' },
      'home_move_source_address' : { 'next' : 'home_move_size' },
      'home_move_size' : { 'next' : 'home_move_budget' },
      'home_move_budget' : { 'next' : 'home_move_additional_info' },
      'home_move_additional_info' : { 'next' : 'home_move_review' },
      'home_move_review' : { 'next' : 'home_move_confirmation' },
      'business_move_type' : { 'next' : 'business_move_date' },
      'business_move_date' : { 'next' : 'business_move_source_address' },
      'business_move_source_address' : { 'next' : 'business_move_size' },
      'business_move_size' : { 'next' : 'business_move_additional_info' },
      'business_move_additional_info' : { 'next' : 'business_move_review' },
      'business_move_review' : { 'next' : 'business_move_confirmation' },
      'specialty_move_type' : { 'next' : 'specialty_move_date' },
      'specialty_move_date' : { 'next' : 'specialty_move_source_address' },
      'specialty_move_source_address' : { 'next' : 'specialty_move_destination_address' },
      'specialty_move_destination_address' : { 'next' : 'specialty_move_additional_info' },
      'specialty_move_additional_info' : { 'next' : 'specialty_move_review' },
      'specialty_move_review' : { 'next' : 'specialty_move_confirmation' },
      'junk_removal_type' : { 'next' : 'junk_removal_date' },
      'junk_removal_date' : { 'next' : 'junk_removal_source_address' },
      'junk_removal_source_address' : { 'next' : 'junk_removal_additional_info' },
      'junk_removal_additional_info' : { 'next' : 'junk_removal_review' },
      'junk_removal_review' : { 'next' : 'junk_removal_confirmation' },

    };

    this.state = {  
      'current_question' : 'customer_name',
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
      'business_move_additional_info' : '',
      'junk_removal_additional_info' : '',
      'junk_removal_date' : '',
      'junk_removal_source_address' : '',
      'junk_removal_type' : '',
      'specialty_move_additional_info' : '',
      'specialty_move_date' : '',
      'specialty_move_destination_address' : '',
      'specialty_move_source_address' : '',
      'specialty_move_type' : '',
      'question_lookup' : question_lookup
    };
 
    
    // this.nameTextOnChange = this.nameTextOnChange.bind(this);
    // this.nameNextButtonOnClick = this.nameNextButtonOnClick.bind(this);
        

    // this.emailTextOnChange = this.emailTextOnChange.bind(this);
    // this.emailNextButtonOnClick = this.emailNextButtonOnClick.bind(this);
    

    // this.homeMoveDateTextOnChange = this.homeMoveDateTextOnChange.bind(this);
    // this.homeMoveDateButtonOnClick = this.homeMoveDateNextButtonOnClick.bind(this);



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
    this.businessMoveDateNextButtonOnClick = this.businessMoveDateNextButtonOnClick.bind(this);

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

    /*---------------------------------------

     HomeMoveTypeQuestion support methods

    ---------------------------------------*/
    this.regularHomeMoveTypeButtonOnClick = this.regularHomeMoveTypeButtonOnClick.bind(this);
    this.fullServiceHomeMoveTypeButtonOnClick = this.fullServiceHomeMoveTypeButtonOnClick.bind(this);


    /*---------------------------------------

     JunkRemovalAdditionalInfoQuestion support methods

    ---------------------------------------*/
    this.junkRemovalAdditionalInfoTextOnChange = this.junkRemovalAdditionalInfoTextOnChange.bind(this);
    this.junkRemovalAdditionalInfoNextButtonOnClick = this.junkRemovalAdditionalInfoNextButtonOnClick.bind(this);


    /*---------------------------------------

     JunkRemovalDateQuestion support methods

    ---------------------------------------*/
    this.junkRemovalDateTextOnChange = this.junkRemovalDateTextOnChange.bind(this);
    this.junkRemovalDateNextButtonOnClick = this.junkRemovalDateNextButtonOnClick.bind(this);

    /*---------------------------------------

     JunkRemovalReviewQuestion support methods

    ---------------------------------------*/
    this.junkRemovalReviewTextOnChange = this.junkRemovalReviewTextOnChange.bind(this);
    this.specialtyMoveSubmitButtonOnClick = this.specialtyMoveSubmitButtonOnClick.bind(this);

    /*---------------------------------------

     JunkRemovalSourceAddressQuestion support methods

    ---------------------------------------*/
    this.junkRemovalSourceAddressTextOnChange = this.junkRemovalSourceAddressTextOnChange.bind(this);
    this.junkRemovalSourceAddressNextButtonOnClick = this.junkRemovalSourceAddressNextButtonOnClick.bind(this);


    /*---------------------------------------

     JunkRemovalTypeQuestion support methods

    ---------------------------------------*/
    this.regularJunkRemovalTypeButtonOnClick = this.regularJunkRemovalTypeButtonOnClick.bind(this);
    this.fullServiceJunkRemovalTypeButtonOnClick = this.fullServiceJunkRemovalTypeButtonOnClick.bind(this);

    /*---------------------------------------

     SpecialtyMoveAdditionalInfoQuestion support methods

    ---------------------------------------*/
    this.specialtyMoveAdditionalInfoOnChange = this.specialtyMoveAdditionalInfoOnChange.bind(this);
    this.specialtyMoveAdditionalInfoButtonOnClick = this.specialtyMoveAdditionalInfoButtonOnClick.bind(this);

    /*---------------------------------------

     SpecialtyMoveDateQuestion support methods

    ---------------------------------------*/
    this.specialtyMoveDateOnChange = this.specialtyMoveDateOnChange.bind(this);
    this.specialtyMoveDateNextButtonOnClick = this.specialtyMoveDateNextButtonOnClick.bind(this);


    /*---------------------------------------

     SpecialtyMoveDestinationAddressQuestion support methods

    ---------------------------------------*/
    this.specialtyMoveDestinationAddressOnChange = this.specialtyMoveDestinationAddressOnChange.bind(this);
    this.specialtyMoveSourceAddressButtonOnClick = this.specialtyMoveSourceAddressButtonOnClick.bind(this);


    /*---------------------------------------

     SpecialtyMoveReviewQuestion support methods

    ---------------------------------------*/
    this.specialtyMoveReviewTextOnChange = this.specialtyMoveReviewTextOnChange.bind(this);
    this.specialtyMoveSubmitButtonOnClick = this.specialtyMoveSubmitButtonOnClick.bind(this);


    /*---------------------------------------

     SpecialtyMoveSourceAddressQuestion support methods

    ---------------------------------------*/
    this.specialtyMoveSourceAddressOnChange = this.specialtyMoveSourceAddressOnChange.bind(this);
    this.specialtyMoveSourceAddressButtonOnClick = this.specialtyMoveSourceAddressButtonOnClick.bind(this);


    /*---------------------------------------

     SpecialtyMoveTypeQuestion support methods

    ---------------------------------------*/
    this.regularSpecialtyMoveButtonOnClick = this.regularSpecialtyMoveButtonOnClick.bind(this);
    this.fullServiceSpecialtyMoveButtonOnClick = this.fullServiceSpecialtyMoveButtonOnClick.bind(this);

  }



  setNextQuestion(next_question){

    if (next_question === undefined){
      next_question = this.getNextQuestion();
    }

    this.setState({
      'current_question' : next_question
    });
  }

  getNextQuestion(){

    const current_question = this.state.current_question;
    
    const next_question = this.state.question_lookup[current_question]['next'];

    if (next_question === undefined){
      throw new Error("next_question is not defined for current_question '" + current_question + "'");
    }

    return next_question;
  }


  // businessMoveAdditionalInfoTextareaOnChange(text){
  //  /* Need to add some validation at some point */
  //   this.setState({
  //     'business_move_additional_info': text,
  //   });
  // }

  // businessMoveAdditionalInfoNextButtonOnClick(){

  //   this.setNextQuestion();
  // }

  // businessMoveAdditionalInfoSkipButtonOnClick(){

  //   this.setNextQuestion();
  // }

  // handleNameTextChange(nameText) {
  //   /* Need to add some validation at some point */
  //   this.setState({
  //     customer_name: nameText,
  //   });
  // }
  
  // handleNameNextButtonOnClick(){
    
  //   const next_question = getNextQuestion();

  //   this.setState({
  //     current_question : next_question
  //   });
  // }



  // handleEmailTextChange(emailText) {

  //   this.setState({
  //     customer_email: emailText,
  //   });

  // }

 
  // handleEmailNextButtonOnClick(){
  //   /* Need to add some validation at some point */
  //   this.setState({
  //     current_question : 'service_type'
  //   });
  // }


  // homeMoveDateTextOnChange(text) {
  //    Need to add some validation at some point 
  //   this.setState({
  //     'home_move_date': text,
  //   });
  // }


  /*---------------------------------------

   ServiceTypeQuestion support methods

  ---------------------------------------*/
  homeServiceTypeButtonOnClick(){
    this.setState({
      'current_question': 'home_move_type',
    });
  }

  businessServiceTypeButtonOnClick(){

    this.setState({
      'current_question' : 'business_move_type'
    });
  }

  specialtyServiceTypeButtonOnClick(){

    this.setState({
      'current_question' : 'specialty_move_type'
    });
  }

  junkRemovalServiceTypeButtonOnClick(){

    this.setState({
      'current_question' : 'junk_removal_type'
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
  
  businessMoveDateNextButtonOnClick(){

    this.setNextQuestion();
  }


  /*---------------------------------------

   BusinessMoveDestinationQuestion support methods

  ---------------------------------------*/
  businessMoveDestinationAddressTextboxOnChange(text){
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

    this.setNextQuestion();
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
      'business_move_review' : text,
    });
  }

  businessMoveSubmitButtonOnClick(){
    
    this.setNextQuestion();
  }


  /*---------------------------------------

   BusinessMoveAddtionalInfoQuestion support methods

  ---------------------------------------*/
  businessMoveAdditionalInfoTextareaOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }

    this.setState({
      'business_move_additional_info' : text,
    });
  }

  businessMoveAdditionalInfoNextButtonOnClick(){

    this.setNextQuestion();
  }

  businessMoveAdditionalInfoSkipButtonOnClick(){

    this.setNextQuestion();
  }


  /*---------------------------------------

   BusinessMoveSizeQuestion support methods

  ---------------------------------------*/
  businessMoveSize2000ButtonOnClick(){

    this.setState({
      'business_move_size' : '2000 sqft'
    });

    this.setNextQuestion();
  }

  businessMoveSize3000ButtonOnClick(){

    this.setState({
      'business_move_size' : '2000 - 4000 sqft'
    });

    this.setNextQuestion();
  }

  businessMoveSize4000ButtonOnClick(){

    this.setState({
      'business_move_size' : '4000+ sqft'      
    });

    this.setNextQuestion();
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
      'business_move_source_address' : text,
    });
  }

  businessMoveSourceAddressNextButtonOnClick(){

    this.setNextQuestion();
  }


  /*---------------------------------------

   BusinessMoveTypeQuestion support methods

  ---------------------------------------*/
  regularBusinessTypeButtonOnClick(){

    this.setState({
      'business_move_type' : 'regular'      
    });

    this.setNextQuestion();
  }

  fullServiceBusinessTypeButtonOnClick(){

     
    this.setState({
      'business_move_type' : 'full service'
    });

    this.setNextQuestion();
  }

  /*---------------------------------------

   CustomerEmailQuestion support methods

  ---------------------------------------*/
  emailTextboxOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }

    this.setState({
      'customer_email' : text
    });
  }

  customerEmailNextButtonOnClick(){

    this.setNextQuestion();
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

    this.setNextQuestion();
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

    this.setNextQuestion();
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

    this.setNextQuestion();
  }

  homeMoveAdditionalInfoSkipButtonOnClick(){

    this.setNextQuestion();
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
      'home_move_budget' : text,
    });
  }

  homeMoveBudgetNextButtonOnClick(){
    
    this.setNextQuestion();
  }

  homeMoveBudgetSkipButtonOnClick(){

    this.setNextQuestion();
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
      'home_move_date' : text,
    });
  }

  homeMoveDateNextButtonOnClick(){

    this.setNextQuestion();
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
    
    this.setNextQuestion();
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

    this.setNextQuestion();
  }


  /*---------------------------------------

   HomeMoveSizeQuestion support methods

  ---------------------------------------*/

  oneBedroomButtonOnClick(){
    
    this.setState({
      'home_move_size': '1 BR',
    });

    this.setNextQuestion();
  }

  twoBedroomButtonOnClick(){
    
    this.setState({
      'home_move_size': '2 BR',
    });

    this.setNextQuestion();
  }

  threeBedroomButtonOnClick(){
    
    this.setState({
      'home_move_size': '3 BR',
    });

    this.setNextQuestion();
  }

  fourBedroomButtonOnClick(){
    
    this.setState({
      'home_move_size': '4+ BR',
    });

    this.setNextQuestion();
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

    this.setNextQuestion();
  }


  /*---------------------------------------

   HomeMoveTypeQuestion support methods

  ---------------------------------------*/
  regularHomeMoveTypeButtonOnClick(){

    this.setState({
      'home_move_type': 'regular',
    });

    this.setNextQuestion();
  }

  fullServiceHomeMoveTypeButtonOnClick(){

    this.setState({
      'home_move_type': 'full service',
    });

    this.setNextQuestion();
  }


  /*---------------------------------------

   JunkRemovalAdditionalInfoQuestion support methods

  ---------------------------------------*/
  junkRemovalAdditionalInfoTextOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'junk_removal_additional_info': text,
    });
  }

  junkRemovalAdditionalInfoNextButtonOnClick(){

    this.setNextQuestion();
  }


  /*---------------------------------------

   JunkRemovalDateQuestion support methods

  ---------------------------------------*/
  junkRemovalDateTextOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'junk_removal_date': text,
    });
  }

  junkRemovalDateNextButtonOnClick(){

    this.setNextQuestion();
  }

  /*---------------------------------------

   JunkRemovalReviewQuestion support methods

  ---------------------------------------*/
  junkRemovalReviewTextOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'junk_removal_review': text,
    });
  }

  junkRemovalSubmitButtonOnClick(){

    this.setNextQuestion();
  }


  /*---------------------------------------

   JunkRemovalSourceAddressQuestion support methods

  ---------------------------------------*/

  junkRemovalSourceAddressTextOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'junk_removal_source_address': text,
    });
  }

  junkRemovalSourceAddressNextButtonOnClick(){

    this.setNextQuestion();
  }


  /*---------------------------------------

   JunkRemovalTypeQuestion support methods

  ---------------------------------------*/
  regularJunkRemovalTypeButtonOnClick(){

    this.setState({
      'junk_removal_type': 'regular',
    });

    this.setNextQuestion();
  }

  fullServiceJunkRemovalTypeButtonOnClick(){

    this.setState({
      'junk_removal_type': 'full service',
    });

    this.setNextQuestion();
  }



  /*---------------------------------------

   SpecialtyMoveAdditionalInfoQuestion support methods

  ---------------------------------------*/
  specialtyMoveAdditionalInfoOnChange(text){

    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }

    /* Adjust state as needed here */
    this.setState({
      'specialty_move_additional_info': text,
    });
  }

  specialtyMoveAdditionalInfoButtonOnClick(){

   this.setNextQuestion();
  }

  /*---------------------------------------

   SpecialtyMoveDateQuestion support methods

  ---------------------------------------*/

  specialtyMoveDateOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'specialty_move_date': text,
    });
  }

  specialtyMoveDateNextButtonOnClick(){
    
    this.setNextQuestion();
  }


  /*---------------------------------------

   SpecialtyMoveDestinationAddressQuestion support methods

  ---------------------------------------*/
  specialtyMoveDestinationAddressOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'specialty_move_destination_address': text,
    });
  }

  specialtyMoveDestinationAddressButtonOnClick(){
    
    this.setNextQuestion();
  }


  /*---------------------------------------

   SpecialtyMoveReviewQuestion support methods

  ---------------------------------------*/
  specialtyMoveReviewTextOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'specialty_move_review': text,
    });
  }

  specialtyMoveSubmitButtonOnClick(){

    this.setNextQuestion();
  }


  /*---------------------------------------

   SpecialtyMoveSourceAddressQuestion support methods

  ---------------------------------------*/
  specialtyMoveSourceAddressOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }
    /* Adjust state as needed here */
    this.setState({
      'specialty_move_source_address': text,
    });
  }

  specialtyMoveSourceAddressButtonOnClick(){
    
    this.setNextQuestion();
  }


  /*---------------------------------------

   SpecialtyMoveTypeQuestion support methods

  ---------------------------------------*/
  regularSpecialtyMoveButtonOnClick(){

    this.setState({
      'specialty_move_type': 'regular'
    });

    this.setNextQuestion();
  }

  fullServiceSpecialtyMoveButtonOnClick(){

    this.setState({
      'specialty_move_type': 'full service',      
    });

    this.setNextQuestion();
  }




  /*---------------------------------------

    render logic follows

  ----------------------------------------*/

  render() {
    const cq = this.state.current_question;
    console.log(cq);

    if (this.state.current_question === 'customer_name_original'){
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
    else if (this.state.current_question === 'customer_email_original'){
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
    // else if (this.state.current_question === 'home_service_type'){
    //   return (
    //   <div>
    //       <HomeMoveTypeQuestion
    //         homeMoveRegularButtonOnClick={this.homeMoveRegularButtonOnClick}
    //         homeMoveFullServiceButtonOnClick={this.homeMoveFullServiceButtonOnClick}
    //       />
    //   </div>
    //   );
    // }
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
    else if (this.state.current_question === 'business_move_confirmation'){
      return (
        <div>
          <BusinessMoveConfirmationQuestion
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
    else if (this.state.current_question === 'home_move_confirmation'){
      return (
        <div>
          <HomeMoveConfirmationQuestion
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
    else if (this.state.current_question === 'home_move_date'){
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
    else if (this.state.current_question === 'home_move_destination_address'){
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
    else if (this.state.current_question === 'home_move_review'){
      return (
        <div>
          <HomeMoveReviewQuestion
            homeMoveReviewTextOnChange={this.homeMoveReviewTextOnChange}
            homeMoveSubmitButtonOnClick={this.homeMoveSubmitButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'home_move_size'){
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
    else if (this.state.current_question === 'home_move_source_address'){
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
    else if (this.state.current_question === 'home_move_type'){
      return (
        <div>
          <HomeMoveTypeQuestion          
            home_move_type={this.state.home_move_type}          
            regularHomeMoveTypeButtonOnClick={this.regularHomeMoveTypeButtonOnClick}
            fullServiceHomeMoveTypeButtonOnClick={this.fullServiceHomeMoveTypeButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'junk_removal_additional_info'){
      return (
        <div>
          <JunkRemovalAddtionalInfoQuestion          
            junk_removal_additional_info={this.state.junk_removal_additional_info}          
            junkRemovalAdditionalInfoTextOnChange={this.junkRemovalAdditionalInfoTextOnChange}
            junkRemovalAdditionalInfoNextButtonOnClick={this.junkRemovalAdditionalInfoNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'junk_removal_confirmation'){
      return (
        <div>
          <JunkRemovalConfirmationQuestion
          />
        </div>
      );
    }
    else if (this.state.current_question === 'junk_removal_date'){
      return (
        <div>
          <JunkRemovalDateQuestion          
            junk_removal_date={this.state.junk_removal_date}          
            junkRemovalDateTextOnChange={this.junkRemovalDateTextOnChange}
            junkRemovalDateNextButtonOnClick={this.junkRemovalDateNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'junk_removal_review'){
      return (
        <div>
          <JunkRemovalReviewQuestion
            junk_removal_date={this.state.junk_removal_date}
            junk_removal_source_address={this.state.junk_removal_source_address}          
            junkRemovalReviewTextOnChange={this.junkRemovalReviewTextOnChange}
            specialtyMoveSubmitButtonOnClick={this.specialtyMoveSubmitButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'junk_removal_source_address'){
      return (
        <div>
          <JunkRemovalSourceAddressQuestion          
            junk_removal_source_address={this.state.junk_removal_source_address}          
            junkRemovalSourceAddressTextOnChange={this.junkRemovalSourceAddressTextOnChange}
            junkRemovalSourceAddressNextButtonOnClick={this.junkRemovalSourceAddressNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'junk_removal_type'){
      return (
        <div>
          <JunkRemovalTypeQuestion          
            junk_removal_type={this.state.junk_removal_type}          
            regularJunkRemovalTypeButtonOnClick={this.regularJunkRemovalTypeButtonOnClick}
            fullServiceJunkRemovalTypeButtonOnClick={this.fullServiceJunkRemovalTypeButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'specialty_move_additional_info'){
      return (
        <div>
          <SpecialtyMoveAdditionalInfoQuestion          
            specialty_move_additional_info={this.state.specialty_move_additional_info}          
            specialtyMoveAdditionalInfoOnChange={this.specialtyMoveAdditionalInfoOnChange}
            specialtyMoveAdditionalInfoButtonOnClick={this.specialtyMoveAdditionalInfoButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'specialty_move_confirmation'){
      return (
        <div>
          <SpecialtyMoveConfirmationQuestion
          />
        </div>
      );
    }
    else if (this.state.current_question === 'specialty_move_date'){
      return (
        <div>
          <SpecialtyMoveDateQuestion          
            specialty_move_date={this.state.specialty_move_date}          
            specialtyMoveDateOnChange={this.specialtyMoveDateOnChange}
            specialtyMoveDateNextButtonOnClick={this.specialtyMoveDateNextButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'specialty_move_destination_address'){
      return (
        <div>
          <SpecialtyMoveDestinationAddressQuestion          
            specialty_move_destination_address={this.state.specialty_move_destination_address}          
            specialtyMoveDestinationAddressOnChange={this.specialtyMoveDestinationAddressOnChange}
            specialtyMoveSourceAddressButtonOnClick={this.specialtyMoveSourceAddressButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'specialty_move_review'){
      return (
        <div>
          <SpecialtyMoveReviewQuestion
            specialty_move_destination_address={this.state.specialty_move_destination_address}          
            specialty_move_date={this.state.specialty_move_date}
            specialty_move_source_address={this.state.specialty_move_source_address}
            specialty_move_additional_info={this.state.specialty_move_additional_info}
            specialtyMoveReviewTextOnChange={this.specialtyMoveReviewTextOnChange}
            specialtyMoveSubmitButtonOnClick={this.specialtyMoveSubmitButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'specialty_move_source_address'){
      return (
        <div>
          <SpecialtyMoveSourceAddressQuestion          
            specialty_move_source_address={this.state.specialty_move_source_address}          
            specialtyMoveSourceAddressOnChange={this.specialtyMoveSourceAddressOnChange}
            specialtyMoveSourceAddressButtonOnClick={this.specialtyMoveSourceAddressButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'specialty_move_type'){
      return (
        <div>
          <SpecialtyMoveTypeQuestion
            regularSpecialtyMoveButtonOnClick={this.regularSpecialtyMoveButtonOnClick}
            fullServiceSpecialtyMoveButtonOnClick={this.fullServiceSpecialtyMoveButtonOnClick}
          />
        </div>
      );
    }
    else {
      return (
        <div>Something is wrong</div>
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