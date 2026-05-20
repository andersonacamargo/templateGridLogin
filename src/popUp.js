import React from 'react';


function PopUp({showPopUp, closePopUp}){
  if (!showPopUp) {return null}
  return (
    <div className="PopUp" >
        <input className='inputPopup' placeholder='login'></input>
        <input className='inputPopup' placeholder='senha' ></input>
        <div><button onClick={closePopUp}>Login</button>
        <button onClick={closePopUp}>close</button>
        </div>
    </div>
  );
};

export default PopUp;