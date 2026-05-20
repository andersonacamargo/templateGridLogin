import React from 'react';
import "./popUp.css"

function PopUp({showPopUp, closePopUp}){

 
  if (!showPopUp) {return null}
  return (
    <div className="PopUp" >
        <label>Login:</label>
        <input className='inputPopup' placeholder='login'></input>
        <label>Senha:</label>
        <input className='inputPopup' placeholder='senha'></input>
        <div className="buttonLine"><button className='login' onClick={closePopUp}>Logar</button>
        <button className='close' onClick={closePopUp}>Cancelar</button>
        </div>
    </div>
  );
};

export default PopUp;