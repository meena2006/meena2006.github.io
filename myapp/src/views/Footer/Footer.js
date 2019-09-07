import React, {Component} from 'react';
import FooterTop from '../../components/FooterTop/FooterTop';
import FooterBottom from '../../components/FooterBottom/FooterBottom';


class Footer extends Component {
  render() {
    return (
      <footer>    
      <FooterTop/>
      <FooterBottom/>
      </footer>    
    )
  }
}


export default Footer;