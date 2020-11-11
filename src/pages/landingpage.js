import React, {Component} from 'react';
import Header from '../components/header/header'
import Main from '../components/maincontent/main'
import Footer from '../components/footer/footer'
import './landingpage.css'
class App extends Component {

   render(){

      return (
         <div className="landing-page">
   <Header></Header>
   <Main></Main>
   <Footer></Footer>
         </div>
  
        )

   }
 
}

export default App;
