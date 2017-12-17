import React from 'react';

class JunkRemovalDateQuestion extends React.Component {

  constructor(props) {
    
    super(props);
    
    this.junkRemovalDateTextOnChange = this.junkRemovalDateTextOnChange.bind(this);
    this.junkRemovalDateNextButtonOnClick = this.junkRemovalDateNextButtonOnClick.bind(this);
    this.closeButtonOnClick = this.closeButtonOnClick.bind(this);
    this.backButtonOnClick = this.backButtonOnClick.bind(this);
  }
    
  junkRemovalDateTextOnChange(event){
    this.props.junkRemovalDateTextOnChange(event.target.value);
  }

  junkRemovalDateNextButtonOnClick(){
    this.props.junkRemovalDateNextButtonOnClick();
  }

  componentDidMount(){
     this.nameInput.focus(); 
  }

  closeButtonOnClick(){
    this.props.closeButtonOnClick();
  }

  backButtonOnClick(){
    this.props.backButtonOnClick();
  }

  render(){

    let styles = {'width' : this.props.percent+'%'};

    return (
      <div>
        <div className="nav-container">
          <div className="back-button">
            <span className="back-button" onClick={this.backButtonOnClick}>
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </span>
          </div>
          <div className="close-button">
            <span className="close-button" onClick={this.closeButtonOnClick}>
              <i class="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <br/>
        <br/>
        <span className="question">Junk removal it is! What is your preferred pickup date?</span>
        <br/>
        <br/>        
        <input type="text" className="" onChange={this.junkRemovalDateTextOnChange} placeholder="MM/DD/YY" ref={(input) => { this.nameInput = input; }}/>
        <br/>        
        <br/>
        <button type="button" className="btn btn-warning" onClick={this.junkRemovalDateNextButtonOnClick}>Next</button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <span className="percent">{this.props.percent}% Complete</span>
        <br/>
        <br/>
        <div className="progress">
          <div id='pb' className="progress-bar" role="progressbar" aria-valuenow="{this.props.percent}" aria-valuemin="0" aria-valuemax="100" style={styles}></div>
        </div>
      </div>
    );
  }
}

export default JunkRemovalDateQuestion;