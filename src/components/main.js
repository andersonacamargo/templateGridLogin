import './main.css';
import TextBox from "./textbox.js";
import PostBox from './postbox.js';
import { useEffect, useState } from 'react';
import PopUp from './popUp.js';

function HomePage() {
  const [loginLabel, setLoginLabel] = useState("Login");

  const [showPopUp, setShowPopUp] = useState(false)
                        
     
  return (
    <div className="grid-container">
    <header className="header"><button className="logButton" onClick={()=>setShowPopUp(true)}>{loginLabel}</button></header>
    <aside className="sidebar">Menu Lateral</aside>
    <main className="content">
    <PopUp showPopUp={showPopUp} closePopUp={()=>setShowPopUp(false)}>
            
            </PopUp>
      {TextBox()}
      {PostBox("JUJUBA", "gosto de jujubas")}
      {PostBox("Frutas", "prefiro chocolate")}
      <div className="post">Post 3</div>
      <div className="post">Post 4</div>
    </main>
  </div>
  );
}

export default HomePage;
