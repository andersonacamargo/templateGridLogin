import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./components/main";

function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< HomePage />}/>
           </Routes>
       </BrowserRouter>
   )
}

export default App;