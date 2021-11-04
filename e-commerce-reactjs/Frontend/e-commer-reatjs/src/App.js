import React from "react"
import './global.css';
import PageMain from "./pages/layout/pagesMain"
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import AllProducts from "./component/Allproducto/allproduct"
import InicioSession from "./pages/layout/inicioSession/inicioSession"

function App() {
     
  return (
    <div className="App">
    <Router>
    
      
 
  
   
 

     <Switch>

      <Route  exact path="/" component={PageMain}/>
      <Route  exact path="/products" component={AllProducts}/>
      <Route  exact path="/iniciarSession" component={InicioSession}/> 
    </Switch> 
    </Router>
        </div>
  );
}

export default App;
