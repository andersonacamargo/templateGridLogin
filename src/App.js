import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "./pages/main";
import SignPage from "./pages/registar"
function App(){
   return(
       <BrowserRouter>
       <Routes>
           <Route  path="/" exact element = {< HomePage />}/>
           <Route path="/registrar" element={< SignPage/>}/>
           </Routes>
       </BrowserRouter>
   )
}

export default App;