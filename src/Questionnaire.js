import React from 'react';
import './index.css';

import BusinessMoveDateQuestion from './BusinessMoveDateQuestion.js';
import BusinessMoveDestinationAddressQuestion from './BusinessMoveDestinationAddressQuestion.js';
import BusinessMoveReviewQuestion from './BusinessMoveReviewQuestion.js';
import BusinessMoveAdditionalInfoQuestion from './BusinessMoveAdditionalInfoQuestion.js';
import BusinessMoveSizeQuestion from './BusinessMoveSizeQuestion.js';
import BusinessMoveSourceAddressQuestion from './BusinessMoveSourceAddressQuestion.js';
import BusinessMoveTypeQuestion from './BusinessMoveTypeQuestion.js';

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



  /*  render logic follows */

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
    else if (){
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
    else if (){
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
    else if (){
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
    else if (){
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
    else if (){
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
    else if (){
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
    else if (){
      return (
        <div>
          <BusinessMoveTypeQuestion
            regularBusinessTypeButtonOnClick={this.regularBusinessTypeButtonOnClick}
            fullServiceBusinessTypeButtonOnClick={this.fullServiceBusinessTypeButtonOnClick}
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