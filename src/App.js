import logo from './logo.svg';
import './App.css';
import TextBox from "./textbox.js";
import PostBox from './postbox.js';
import { useEffect, useState } from 'react';
import PopUp from './popUp';

function App() {
  const [loginLabel, setLoginLabel] = useState("Login");

  const [showPopUp, setShowPopUp] = useState(false)
                        
     
  return (
    <div className="grid-container">
    <header className="header"><button onClick={()=>setShowPopUp(true)}>{loginLabel}</button></header>
    <aside className="sidebar">Menu Lateral</aside>
    <main className="content">
    <PopUp showPopUp={showPopUp} closePopUp={()=>setShowPopUp(false)}>
            
            </PopUp>
      {TextBox()}
      {PostBox("p1", "gosto de jujubas")}
      <div className="post">Post 2</div>
      <div className="post">Post 3</div>
      <div className="post">Post 4</div>
    </main>
  </div>
  );
}

export default App;
