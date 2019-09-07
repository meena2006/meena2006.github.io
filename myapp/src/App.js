import React, {Component} from 'react'; 
import './App.css';
import { Switch, Route } from "react-router-dom"; 
import Header from './views/Header/Header'; 
import Home from './views/Home/Home'; 
import Footer from './views/Footer/Footer'; 
import Search from './views/Search/Search'; 
import NotFound from './components/NotFound/NotFound'; 


let mainRoutes = [
  {
    path: "/Search",
    component: Search
  },
  {
    path: "/",
    component: Home
  }, 
  {
    path: '*',
    component: NotFound
}
];
 
const SwitchRoutes = () => (
  <Switch>
  {mainRoutes.map((props, key) => {  
    return <Route exact path={props.path} component={props.component} key={key}/>;
  })}
  </Switch>
);



class App extends Component {
 render() {
  return (
    <div className="App">   
       <Header/>
          <SwitchRoutes/>
        <Footer/> 
    </div>
  )
 }
}

export default App;
