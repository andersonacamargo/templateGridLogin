import React, {useState} from 'react';
import "./popUp.css";
import axios from "axios";


function PopUp({showPopUp, closePopUp}){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const manipularSenha = (e) =>{
    setSenha(e.target.value) 
    console.log(senha)
  }

  const manipularEmail = (e) => { //nameHandler
        setEmail(e.target.value);
        console.log(email)
    };

  const postLogin = async () => {
  try{
    const response =  await axios.post('https://templateexpresslogin.onrender.com/login',{ 
      email:email,
      senha:senha,
    },{
  })
    console.log(response);

    if (response.data.nome) {
      console.log(response.data.nome);

      localStorage.setItem('nome', response.data.nome); 
    }
    closePopUp()
  } 
    catch (e){return null }
  }

 
  if (!showPopUp) {return null}
  return (
    <div className="PopUp" >
        <label>Login:</label>
        <input className='inputPopup' onChange={manipularEmail} placeholder='login'></input>
        <label>Senha:</label>
        <input className='inputPopup' onChange={manipularSenha} placeholder='senha'></input>
        <div className="buttonLine">
        <button className='login' onClick={() => postLogin()}>Logar</button>
        <button className='close' onClick={closePopUp}>Cancelar</button>
        </div>
    </div>
  );
};

export default PopUp;