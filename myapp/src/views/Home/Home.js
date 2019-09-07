import React, {Component} from 'react'; 
import BCarousel from '../../components/BCarousel/BCarousel'; 
import ThumbCarousel from '../../components/ThumbCarousel/ThumbCarousel'; 


class Home extends Component {
  render() { 
    return (
      <div className="container">
       <div className="row">
       <div className="col-12 margboth2">
       <BCarousel/>
       </div>
       <div className="col-12 margboth2">
         <h3>Trending Items - Store Returns Auction</h3> 
         <ThumbCarousel/>     
       </div>
       </div>
       </div>
    )
  }
}


export default Home;