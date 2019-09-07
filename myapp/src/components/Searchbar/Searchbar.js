import React, {Component} from 'react'; 

class Searchbar extends Component {
  render(){
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="" />
        <div className="input-group-append">
        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
       </div> 
    )
  }
}

export default Searchbar;