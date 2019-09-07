import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
class TopNav extends Component {
  render() {
    return(
      <div className="tophead">
        <div className="container">
        <div className="row">
        <div>
        <i className="fa fa-phone" aria-hidden="true"></i> Contact Us !
          <span className="font-roboto">789-456-1234</span>
          <span>(OR)</span>
          <span className="cursor"> <i className="fa fa-envelope" aria-hidden="true"></i>Email US</span>
        </div>
        <div className="ml-auto">
        <Link to={'/'} ><i className="fa fa-plus-circle" aria-hidden="true"></i> Register</Link>
        <Link to={'/'} ><i className="fa fa-user" aria-hidden="true"></i> Login</Link>
        </div>
        </div>
      </div>
      </div>
    )
  }
}
export default TopNav;