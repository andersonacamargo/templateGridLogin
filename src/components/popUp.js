import React, {useState} from 'react';
import "./popUp.css";
import axios from "axios";


function PopUp({showPopUp, closePopUp}){
  
  const [logar, setLogar] = useState(false);

  const postLogin = async () => {
  try{
    const res =  await axios.post('http://localhost:5000/registrar',{ 
      nome:'anderson',
      email:'test@tsest',
      senha:'12345',
      cargo:'prof'
    },{
      headers: {
          'content-type': 'text/json'
      }
  })
    console.log(res.status);
    return res} 
    catch (e){return null }
  }

 
  if (!showPopUp) {return null}
  return (
    <div className="PopUp" >
        <label>Login:</label>
        <input className='inputPopup' placeholder='login'></input>
        <label>Senha:</label>
        <input className='inputPopup' placeholder='senha'></input>
        <div className="buttonLine">
        <button className='login' onClick={() => postLogin()}>Logar</button>
        <button className='close' onClick={closePopUp}>Cancelar</button>
        </div>
    </div>
  );
};

export default PopUp;