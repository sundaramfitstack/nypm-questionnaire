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

import ServiceTypeQuestion from './ServiceTypeQuestion.js';

const main_url = 'https://www.nypmovers.com/';

const NOTIFY_URL = 'http://localhost:5000/notify';

class Questionnaire extends React.Component {

  constructor(props) {
    super(props);

    const question_lookup = {
      'customer_name' : { 'next' : 'customer_email' },
      'customer_email' : { 'next' : 'customer_phone', 'prev' : 'customer_name' },
      'customer_phone' : { 'next' : 'service_type', 'prev' : 'customer_email' },
      'service_type' : { 'prev' : 'customer_phone' },
      'home_move_type' : { 'next' : 'home_move_date', 'prev' : 'service_type', 'percent' : '30' },
      'home_move_date' : { 'next' : 'home_move_source_address', 'prev' : 'home_move_type', 'percent' : '40' },
      'home_move_source_address' : { 'next' : 'home_move_destination_address', 'prev' : 'home_move_date', 'percent' : '50' },
      'home_move_destination_address' : { 'next' : 'home_move_size', 'prev' : 'home_move_source_address', 'percent' : '60' },
      'home_move_size' : { 'next' : 'home_move_budget', 'prev' : 'home_move_destination_address', 'percent' : '70' },
      'home_move_budget' : { 'next' : 'home_move_additional_info', 'prev' : 'home_move_size', 'percent' : '80' },
      'home_move_additional_info' : { 'next' : 'home_move_review', 'prev' : 'home_move_budget', 'percent' : '90' },
      'home_move_review' : { 'next' : 'home_move_confirmation', 'prev' : 'home_move_additional_info', 'percent' : '100' },
      'business_move_type' : { 'next' : 'business_move_date', 'prev' : 'service_type', 'percent' : '10' },
      'business_move_date' : { 'next' : 'business_move_source_address', 'prev' : 'business_move_type', 'percent' : '20' },
      'business_move_source_address' : { 'next' : 'business_move_destination_address', 'prev' : 'business_move_date', 'percent' : '30' },
      'business_move_destination_address' : { 'next' : 'business_move_size', 'prev' :'business_move_source_address', 'percent' : '40' },
      'business_move_size' : { 'next' : 'business_move_additional_info', 'prev' : 'business_move_destination_address', 'percent' : '60' },
      'business_move_additional_info' : { 'next' : 'business_move_review', 'prev' : 'business_move_size', 'percent' : '80' },
      'business_move_review' : { 'next' : 'business_move_confirmation', 'prev' : 'business_move_additional_info', 'percent' : '100' },
      'specialty_move_type' : { 'next' : 'specialty_move_date', 'prev' : 'service_type', 'percent' : '10' },
      'specialty_move_date' : { 'next' : 'specialty_move_source_address', 'prev': 'specialty_move_type', 'percent' : '20' },
      'specialty_move_source_address' : { 'next' : 'specialty_move_destination_address', 'prev' : 'specialty_move_date', 'percent' : '40' },
      'specialty_move_destination_address' : { 'next' : 'specialty_move_additional_info', 'prev' : 'specialty_move_source_address', 'percent' : '60' },
      'specialty_move_additional_info' : { 'next' : 'specialty_move_review', 'prev' : 'specialty_move_destination_address', 'percent' : '80' },
      'specialty_move_review' : { 'next' : 'specialty_move_confirmation', 'prev': 'specialty_move_additional_info', 'percent' : '100' },
      'junk_removal_type' : { 'next' : 'junk_removal_date', 'prev' : 'service_type', 'percent' : '20' },
      'junk_removal_date' : { 'next' : 'junk_removal_source_address', 'prev' : 'junk_removal_type', 'percent' : '40' },
      'junk_removal_source_address' : { 'next' : 'junk_removal_additional_info', 'prev': 'junk_removal_date', 'percent' : '60' },
      'junk_removal_additional_info' : { 'next' : 'junk_removal_review', 'prev' : 'junk_removal_source_address', 'percent' : '80' },
      'junk_removal_review' : { 'next' : 'junk_removal_confirmation', 'prev' : 'junk_removal_additional_info', 'percent' : '100' }
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
 
    
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.previousButtonOnClick = this.previousButtonOnClick.bind(this);

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
    this.junkRemovalSubmitButtonOnClick = this.junkRemovalSubmitButtonOnClick.bind(this);

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
    this.specialtyMoveDestinationAddressButtonOnClick = this.specialtyMoveDestinationAddressButtonOnClick.bind(this);


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

  setPreviousQuestion(previous_question){

    if (previous_question === undefined){
      previous_question = this.getPreviousQuestion();
    }

    this.setState({
      'current_question' : previous_question
    });
  }

  getPreviousQuestion(){

    const current_question = this.state.current_question;
    
    const previous_question = this.state.question_lookup[current_question]['prev'];

    if (previous_question === undefined){
      throw new Error("previous_question is not defined for current_question '" + current_question + "'");
    }

    return previous_question;
  }

  previousButtonOnClick(){

    this.setPreviousQuestion();
  }

  closeButtonOnClick(){

    console.log("Going to redirect to '" + main_url  + "'");

    window.location.href = main_url;
  }

  /*---------------------------------------

   ServiceTypeQuestion support methods

  ---------------------------------------*/
  homeServiceTypeButtonOnClick(){
    this.setState({
      'service_type' : 'home service',
      'current_question': 'home_move_type',
    });
  }

  businessServiceTypeButtonOnClick(){

    this.setState({
      'service_type' : 'business service',
      'current_question' : 'business_move_type'
    });
  }

  specialtyServiceTypeButtonOnClick(){

    this.setState({
      'service_type' : 'specialty service',
      'current_question' : 'specialty_move_type'
    });
  }

  junkRemovalServiceTypeButtonOnClick(){

    this.setState({
      'service_type' : 'junk removal service',
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

    text = text.trim();

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

    text = text.trim();

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

    text = text.trim();

    /* Adjust state as needed here */
    this.setState({
      'business_move_review' : text,
    });
  }

  businessMoveSubmitButtonOnClick(){

    this.sendBusinessMoveNotificationEmail();

    this.setNextQuestion();
  }


  sendBusinessMoveNotificationEmail(){

    const info = {
      'service_type' : this.state.service_type,
      'business_move_size' : this.state.business_move_size,
      'business_move_type' : this.state.business_move_type,            
      'business_move_date' : this.state.business_move_date,
      'business_move_source_address' : this.state.business_move_source_address,
      'business_move_destination_address' : this.state.business_move_destination_address,
      'business_move_additional_info' : this.state.business_move_additional_info
    };

    console.log("Here is the business move info to be emailed to the owner");
    console.dir(info);

    this._send(info);
  }


  /*---------------------------------------

   BusinessMoveAddtionalInfoQuestion support methods

  ---------------------------------------*/
  businessMoveAdditionalInfoTextareaOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }

    text = text.trim();

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

    text = text.trim();

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

    text = text.trim();

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

    text = text.trim();

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

    text = text.trim();

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

    text = text.trim();

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

    text = text.trim();
  
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

    text = text.trim();
    
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
    
    text = text.trim();

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
    
    text = text.trim();

    /* Adjust state as needed here */
    this.setState({
      'home_move_review': text,
    });
  }

  homeMoveSubmitButtonOnClick(){

    this.sendHomeMoveNotificationEmail();

    this.setNextQuestion();
  }

  sendHomeMoveNotificationEmail(){

    const info = {
      'service_type' : this.state.service_type,
      'home_move_date' : this.state.home_move_date,
      'home_move_additional_info' : this.state.home_move_additional_info,
      'home_move_size' : this.state.home_move_size,
      'home_move_type' : this.state.home_move_type,
      'home_move_budget' : this.state.home_move_budget,
      'home_move_source_address' : this.state.home_move_source_address,
      'home_move_destination_address' : this.state.home_move_destination_address             
    };

    console.log("Here is the home move info to be emailed to the owner");
    console.dir(info);

    this._send(info);
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

    text = text.trim();

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

    text = text.trim();

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

    text = text.trim();

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

    text = text.trim();

    /* Adjust state as needed here */
    this.setState({
      'junk_removal_review': text,
    });
  }

  junkRemovalSubmitButtonOnClick(){

    this.sendJunkRemovalNotificationEmail();

    this.setNextQuestion();
  }


  sendJunkRemovalNotificationEmail(){

    const info = {
      'service_type' : this.state.service_type,
      'junk_removal_additional_info' : this.state.junk_removal_additional_info,
      'junk_removal_type' : this.state.junk_removal_type,
      'junk_removal_date' : this.state.junk_removal_date,
      'junk_removal_source_address' : this.state.junk_removal_source_address
    };

    console.log("Here is the junk removal info to be emailed to the owner");
    console.dir(info);

    this._send(info);
  }


  /*---------------------------------------

   JunkRemovalSourceAddressQuestion support methods

  ---------------------------------------*/

  junkRemovalSourceAddressTextOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }

    text = text.trim();

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

    text = text.trim();

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

    text = text.trim();

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

    text = text.trim();

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

    text = text.trim();

    /* Adjust state as needed here */
    this.setState({
      'specialty_move_review': text,
    });
  }

  specialtyMoveSubmitButtonOnClick(){

    this.sendSpecialtyMoveNotificationEmail();

    this.setNextQuestion();
  }

  sendSpecialtyMoveNotificationEmail(){

    console.log("service_type is " +  this.state.service_type);

    let info = {
      'service_type' : this.state.service_type,
      'specialty_move_type' : this.state.specialty_move_type,
      'specialty_move_destination_address' : this.state.specialty_move_destination_address,
      'specialty_move_date' : this.state.specialty_move_date,
      'specialty_move_source_address' : this.state.specialty_move_source_address,
      'specialty_move_additional_info' : this.state.specialty_move_additional_info
    };

      console.log("Here is the specialty move info to be emailed to the owner");
      console.dir(info);

      this._send(info);
  }

  _send(info){

    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var myInit = { method: 'POST',
                   headers: myHeaders,
                   mode:   'no-cors',
                   body: JSON.stringify(info),
                   cache:  'default' };

    fetch(NOTIFY_URL, {
      'method' : 'POST',
      'mode': 'no-cors',
      'body' : JSON.stringify(info),
      'headers': {"Content-Type": "application/json"}
    }).then(function(response){

      console.dir(response);
      
      console.log("POSTed the request");
    
    }).catch(function(error) {
    
      console.error("Encountered some error : ");
    
      console.dir(error);
    });
  }

  /*---------------------------------------

   SpecialtyMoveSourceAddressQuestion support methods

  ---------------------------------------*/
  specialtyMoveSourceAddressOnChange(text){
    /* Implement validation logic here */
    if (text === undefined){
      throw new Error("text was not defined");
    }

    text = text.trim();

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
    
    if (this.state.current_question === 'service_type'){
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'business_move_date'){
      return (
        <div>
          <BusinessMoveDateQuestion          
            business_move_date={this.state.business_move_date}          
            businessMoveDateTextboxOnChange={this.businessMoveDateTextboxOnChange}
            businessMoveDateNextButtonOnClick={this.businessMoveDateNextButtonOnClick}
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.business_move_date.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.business_move_destination_address.percent}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'business_move_review'){
      return (
        <div>
          <BusinessMoveReviewQuestion
            service_type={this.state.service_type}
            business_move_size={this.state.business_move_size}
            business_move_type={this.state.business_move_type}            
            business_move_date={this.state.business_move_date}
            business_move_source_address={this.state.business_move_source_address}
            business_move_destination_address={this.state.business_move_destination_address}
            business_move_additional_info={this.state.business_move_additional_info}
            businessMoveReviewTextOnChanage={this.businessMoveReviewTextOnChanage}
            businessMoveSubmitButtonOnClick={this.businessMoveSubmitButtonOnClick}
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.business_move_review.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.business_move_additional_info.percent}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'business_move_size'){
      return (
        <div>
          <BusinessMoveSizeQuestion
            business_move_source_address={this.state.business_move_source_address}
            businessMoveSize2000ButtonOnClick={this.businessMoveSize2000ButtonOnClick}
            businessMoveSize3000ButtonOnClick={this.businessMoveSize3000ButtonOnClick}
            businessMoveSize4000ButtonOnClick={this.businessMoveSize4000ButtonOnClick}
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.business_move_size.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.business_move_source_address.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.business_move_type.percent}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'business_move_confirmation'){
      return (
        <div>
          <BusinessMoveConfirmationQuestion            
            closeButtonOnClick={this.closeButtonOnClick}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.home_move_additional_info.percent}

          />
        </div>
      );
    }
    else if (this.state.current_question === 'home_move_confirmation'){
      return (
        <div>
          <HomeMoveConfirmationQuestion            
            closeButtonOnClick={this.closeButtonOnClick}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.home_move_budget.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.home_move_date.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.home_move_destination_address.percent}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'home_move_review'){
      return (
        <div>
          <HomeMoveReviewQuestion
            service_type={this.state.service_type}
            home_move_date={this.state.home_move_date}
            home_move_additional_info={this.state.home_move_additional_info}
            home_move_size={this.state.home_move_size}
            home_move_type={this.state.home_move_type}
            home_move_budget={this.state.home_move_budget}
            home_move_source_address={this.state.home_move_source_address}
            home_move_destination_address={this.state.home_move_destination_address}            
            homeMoveReviewTextOnChange={this.homeMoveReviewTextOnChange}
            homeMoveSubmitButtonOnClick={this.homeMoveSubmitButtonOnClick}
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.home_move_review.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.home_move_size.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.home_move_source_address.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.home_move_type.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.junk_removal_additional_info.percent}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'junk_removal_confirmation'){
      return (
        <div>
          <JunkRemovalConfirmationQuestion
            closeButtonOnClick={this.closeButtonOnClick}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.junk_removal_date.percent}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'junk_removal_review'){
      return (
        <div>
          <JunkRemovalReviewQuestion
            service_type={this.state.service_type}          
            junk_removal_additional_info={this.state.junk_removal_additional_info}            
            junk_removal_type={this.state.junk_removal_type}
            junk_removal_date={this.state.junk_removal_date}
            junk_removal_source_address={this.state.junk_removal_source_address}          
            junkRemovalReviewTextOnChange={this.junkRemovalReviewTextOnChange}
            junkRemovalSubmitButtonOnClick={this.junkRemovalSubmitButtonOnClick}
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.junk_removal_review.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.junk_removal_source_address.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.junk_removal_type.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.specialty_move_additional_info.percent}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'specialty_move_confirmation'){
      return (
        <div>
          <SpecialtyMoveConfirmationQuestion
            closeButtonOnClick={this.closeButtonOnClick}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.specialty_move_date.percent}
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
            specialtyMoveDestinationAddressButtonOnClick={this.specialtyMoveDestinationAddressButtonOnClick}
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.specialty_move_destination_address.percent}
          />
        </div>
      );
    }
    else if (this.state.current_question === 'specialty_move_review'){
      return (
        <div>
          <SpecialtyMoveReviewQuestion
            service_type={this.state.service_type}
            specialty_move_type={this.state.specialty_move_type}
            specialty_move_destination_address={this.state.specialty_move_destination_address}          
            specialty_move_date={this.state.specialty_move_date}
            specialty_move_source_address={this.state.specialty_move_source_address}
            specialty_move_additional_info={this.state.specialty_move_additional_info}
            specialtyMoveReviewTextOnChange={this.specialtyMoveReviewTextOnChange}
            specialtyMoveSubmitButtonOnClick={this.specialtyMoveSubmitButtonOnClick}
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.specialty_move_review.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.specialty_move_source_address.percent}
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
            backButtonOnClick={this.previousButtonOnClick}
            closeButtonOnClick={this.closeButtonOnClick}
            percent={this.state.question_lookup.specialty_move_type.percent}
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

export default Questionnaire;