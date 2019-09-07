import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class FooterBottom extends Component {
  render() {
    return (
      <div className="footer-btm">
            <div className="container">
           <div className="row">
           <div className="col-sm-4">
           <img src="images/fwd-logo-white.png" alt="logo" className="ft-logo"/>         
            </div>
            <div className="col-sm-8 footer-btn-rgt">
                <div className="social-icons">
                    <Link to={'/'}> <i className="fa fa-twitter" aria-hidden="true"></i></Link>
                    <Link to={'/'}> <i className="fa fa-instagram" aria-hidden="true"></i></Link>
                    <Link to={'/'}> <i className="fa fa-google-plus" aria-hidden="true"></i></Link>
                    <Link to={'/'}> <i className="fa fa-facebook-official" aria-hidden="true"></i></Link>
                </div>
            </div>
           </div>           
            </div>
        </div>
    )
  }
}

export default FooterBottom;