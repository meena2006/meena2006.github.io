import React, {Component} from 'react'; 
import TopHead from '../../components/TopHead/TopHead';
import MainHead from '../../components/MainHead/MainHead';
import BottomHead from '../../components/BottomHead/BottomHead';


class Header extends Component {
  render() {
    return (
      <header>     
      <TopHead/>
       <MainHead/>
       <BottomHead/>
      </header>
    )
  }
}


export default Header;