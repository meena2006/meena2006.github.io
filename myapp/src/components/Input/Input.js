import React, {Component} from 'react'; 

class Input extends Component {
  
  render(){ 
    let {inputType, placeholderText} = this.props;
    return (
      <input type={inputType} placeholder={placeholderText}/>
    )
  }
}

export default Input;