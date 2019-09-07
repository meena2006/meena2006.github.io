import React, {Component} from "react";
import { Link } from 'react-router-dom';
class FooterTop extends Component {
  render() {
    return (
      <div className="footer-tp">
            <div className="container">
           <div className="row">
           <div className="col-sm-7">
           <nav className="nav">
            <Link to={'/'} className="nav-link">Home</Link>
            <Link to={'/'} className="nav-link">Contact Us</Link>
            <Link to={'/'} className="nav-link">Privacy Policy</Link>
            <Link to={'/'} className="nav-link">Terms &amp; Conditions</Link>
            </nav>             
            </div>
            <div className="col-sm-5 footer-tp-rgt">
            <Link to={'tel:1-800-555-5555'}>789-456-1234</Link>
            <Link to={'mailto:info@agency.gov'}>support@auctionsoftware.com</Link>
            </div>
           </div>           
            </div>
        </div>
    )
  }
}

export default FooterTop;