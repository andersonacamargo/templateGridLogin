import './main.css';
import TextBox from "../components/textbox.js";
import PostBox from '../components/postbox.js';
import { useEffect, useState } from 'react';
import PopUp from '../components/popUp.js';
import { jwtDecode } from "jwt-decode";
import MyHeader from "../components/header.js"

function HomePage() {
  const [loginLabel, setLoginLabel] = useState("Login");
  const [showPopUp, setShowPopUp] = useState(false);
  const token = localStorage.getItem('jwtToken'); //
  const [user, setUser] = useState('');
  const [fakeToken, setFakeToken] = useState(false);

  return (
    <div className="grid-container">
      <header className="header">
        <MyHeader logedin={fakeToken}
          logout={() => setFakeToken(true)}
          login={() => setShowPopUp(true)}></MyHeader>
      </header>
      <aside className="sidebar">Menu Lateral</aside>
      <main className="content">
        <PopUp showPopUp={showPopUp} closePopUp={() => setShowPopUp(false)}>

        </PopUp>
        {TextBox()}
        {PostBox("JUJUBA", "é bom ", fakeToken)}
        {PostBox("Frutas", "prefiro chocolate")}
        <div className="post">Post 3</div>
        <div className="post">Post 4</div>
      </main>
    </div>
  );
}

export default HomePage;
