import React from 'react';

class HomeMoveSizeQuestion extends React.Component {

  constructor(props) {
    
    super(props);

    
    this.oneBedroomButtonOnClick = this.oneBedroomButtonOnClick.bind(this);
    this.twoBedroomButtonOnClick = this.twoBedroomButtonOnClick.bind(this);
    this.threeBedroomButtonOnClick = this.threeBedroomButtonOnClick.bind(this);
    this.fourBedroomButtonOnClick = this.fourBedroomButtonOnClick.bind(this);
  }
  

  
  oneBedroomButtonOnClick(event){
    this.props.oneBedroomButtonOnClick(event.target.value);
  }
  twoBedroomButtonOnClick(event){
    this.props.twoBedroomButtonOnClick(event.target.value);
  }
  threeBedroomButtonOnClick(event){
    this.props.threeBedroomButtonOnClick(event.target.value);
  }
  fourBedroomButtonOnClick(event){
    this.props.fourBedroomButtonOnClick(event.target.value);
  }

  render(){
    return (
      <div>
        <span className="question">And what’s the size of your home at [source_address]?</span>
        <br/>
        

        

        
        <button className="" onClick={this.oneBedroomButtonOnClick}>Studio - 1BR</button>
        <br />
        <button className="" onClick={this.twoBedroomButtonOnClick}>2BR</button>
        <br />
        <button className="" onClick={this.threeBedroomButtonOnClick}>3BR</button>
        <br />
        <button className="" onClick={this.fourBedroomButtonOnClick}>4BR+</button>
        <br />
      </div>
    );
  }
}

export default HomeMoveSizeQuestion;

/***************************************

 The following bits of code should be 
 moved to the parent class

****************************************/

/* Move this to the header of the parent class */
import HomeMoveSizeQuestion from './HomeMoveSizeQuestion.js';



/* Move these statements with this the this.state lookup in the constructor of the parent class */

'home_size' : '',



/* Move these statements to the constructor of the parent class */

this.oneBedroomButtonOnClick = this.oneBedroomButtonOnClick.bind(this);
this.twoBedroomButtonOnClick = this.twoBedroomButtonOnClick.bind(this);
this.threeBedroomButtonOnClick = this.threeBedroomButtonOnClick.bind(this);
this.fourBedroomButtonOnClick = this.fourBedroomButtonOnClick.bind(this);



/* Move these methods to the main body of the parent class */

oneBedroomButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
twoBedroomButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
threeBedroomButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}
fourBedroomButtonOnClick(text){
  /* Implement validation logic here */
  if (text === undefined){
    throw new Error("text was not defined");
  }
  /* Adjust state as needed here *
  this.setState({
    '': ,
  });

}


return (
  <div>
    <HomeMoveSizeQuestion
    
      home_size={this.state.home_size}
    
      oneBedroomButtonOnClick={this.oneBedroomButtonOnClick}
      twoBedroomButtonOnClick={this.twoBedroomButtonOnClick}
      threeBedroomButtonOnClick={this.threeBedroomButtonOnClick}
      fourBedroomButtonOnClick={this.fourBedroomButtonOnClick}
    />
  </div>
);