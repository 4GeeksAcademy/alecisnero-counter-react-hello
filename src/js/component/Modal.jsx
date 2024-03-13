import React, { useState } from 'react'
import SecondsCounter from "./ SecondsCounter.jsx";
import LikeCounter from "./LikeCounter.jsx";
import HoraWeb from "./HoraWeb.jsx";
import InputWeb from "./InputWeb.jsx";

const Modal = () => {
    //me creo un variable y funcion igualado al useState, dentro del hook va esta en TRUE
    const [abierto, setAbierto] = useState(true)
    return abierto ? (
        <div>
            <div className="card d-flex justify-content-center mt-5" style={{width: '150%', height: '70vh'}}>
                <HoraWeb />
                <div>
                    <SecondsCounter />
                </div>
                <div>
                    <LikeCounter />
                </div>
                <div>
                    <InputWeb />
                </div>
            </div>
            <button className='btn btn-outline-danger' onClick={ ()=>{setAbierto(false)} }>
                Cerrar Card
            </button>
        </div>
    ) : (
        <button className='btn btn-outline-danger' onClick={ ()=>{setAbierto(true)}} >
            Abrir Card
        </button>
  )
}

export default Modal