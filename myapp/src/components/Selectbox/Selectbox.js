import React, {Component} from 'react'; 

class Selectbox extends Component {
  render(){ 
    return (
      <select name="options" className="form-control">
              <option value="">- All Auctions -</option>
              <option value="value1">Option A</option>
              <option value="value2">Option B</option>
              <option value="value3">Option C</option>
          </select>  
    )
  }
}

export default Selectbox;