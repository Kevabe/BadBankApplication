import React from "react";
//styling
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


// Routing
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";

//Components
import AllData from "./Components/alldata";
import Deposit from "./Components/deposit";
import Withdraw from "./Components/withdraw";
import Userlogin from "./Components/login";
import CreateAccount from "./Components/createaccount";
import NavBar from "./Components/navbar";
import Home from "./home";
import ContextProvider from "./Context/context";

//Context
const UserContext = React.createContext();

const App=()=> {
  return (
    <HashRouter>
        <div>
        <NavBar/>

        
        {/*<UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100}]}}> */ }
        <ContextProvider>
          
          <Routes>            
            <Route path="/" element ={<Home/>} />
            <Route path="/CreateAccount/" element ={<CreateAccount/>}/>
            <Route path="/login/" element ={<Userlogin/>}/>
            <Route path="/deposit/" element ={<Deposit/>}/>
            <Route path="/withdraw/" element ={<Withdraw/>}/>
            <Route path="/alldata/" element ={<AllData/>}/>
          </Routes>

          </ContextProvider>  
        {/*</UserContext.Provider> */ }
        </div>    
      </HashRouter>
  );
}


export default App;