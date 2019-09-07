import React, {Component} from 'react'; 
import Selectbox from '../Selectbox/Selectbox';
import Searchbar from '../Searchbar/Searchbar';

class MainHead extends Component {
  render() {
    return(
      <div className="bottomhead">
        <div className="container">
        <div className="row">
        <div className="col-md-3"> 
          <Selectbox/>              
        </div>
        <div className="col-md-9">
          <Searchbar/>        
        </div>
        </div>
        </div>
      </div>
    )
  }
}
export default MainHead; 