import React from 'react';
import './index.css';

import FirstAndLastNameQuestion from './FirstAndLastNameQuestion.js';
import EmailQuestion from './EmailQuestion.js';
import ServiceTypeQuestion from './ServiceTypeQuestion.js'
import HomeMovingTypeQuestion from './HomeMovingTypeQuestion.js'

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
    };
    
    this.nameTextOnChange = this.nameTextOnChange.bind(this);
    this.nameNextButtonOnClick = this.nameNextButtonOnClick.bind(this);
        

    this.emailTextOnChange = this.emailTextOnChange.bind(this);
    this.emailNextButtonOnClick = this.emailNextButtonOnClick.bind(this);
    

    this.homeMovingDateTextOnChange = this.homeMovingDateTextOnChange.bind(this);
    this.homeMovingDateButtonOnClick = this.homeMovingDateNextButtonOnClick.bind(this);


    this.serviceTypeHomeButtonOnClick = this.serviceTypeHomeButtonOnClick.bind(this);
    this.serviceTypeBusinessButtonOnClick = this.serviceTypeHomeButtonOnClick.bind(this);
    this.serviceTypeSpecialityButtonOnClick = this.serviceTypeSpecialityButtonOnClick.bind(this);
    this.serviceTypeHaulingButtonOnClick = this.serviceTypeHaulingButtonOnClick.bind(this);
    this.serviceTypeStorageButtonOnClick = this.serviceTypeStorageButtonOnClick.bind(this);

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


  serviceTypeHomeButtonOnClick(){
    this.setState({
      service_type : 'home_moving',
      current_question : ''
    });
  }

  serviceTypeBusinessButtonOnClick(){
    this.setState({
      service_type : 'business_moving',
      current_question : ''
    });
  }

  serviceTypeSpecialityButtonOnClick(){
    this.setState({
      service_type : 'speciality_moving',
      current_question : ''
    });
  }

  serviceTypeStorageButtonOnClick(){
    this.setState({
      service_type : 'storage_moving',
      current_question : ''
    });
  }

   serviceTypeHaulingButtonOnClick(){
    this.setState({
      service_type : 'hauling_moving',
      current_question : ''
    });
  }



  homeMovingDateNextButtonOnClick(){
    this.setState({
      current_question : 'home_moving_from_address'
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
            serviceTypeHomeButtonOnClick={this.serviceTypeHomeButtonOnClick}
            serviceTypeBusinessButtonOnClick={this.serviceTypeBusinessButtonOnClick}
            serviceTypeSpecialityButtonOnClick={this.serviceTypeSpecialityButtonOnClick}
            serviceTypeStorageButtonOnClick={this.serviceTypeStorageButtonOnClick}
            serviceTypeHaulingButtonOnClick={this.serviceTypeHaulingButtonOnClick}
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