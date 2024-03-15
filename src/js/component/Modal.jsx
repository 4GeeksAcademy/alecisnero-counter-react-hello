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
            <div className='d-flex justify-content-center border rounded' style={{ width: '50%', marginLeft: '50%', backgroundColor: '#bdbbbb'}}>
                <HoraWeb />
            </div>
            <div className="border rounded d-flex justify-content-center mt-3">

                <div className='m-3 d-xxl-inline-flex'>
                    <div>
                        <SecondsCounter />
                    </div>

                    <div>
                        <InputWeb />
                    </div>
                </div>
            </div>

            <div>
                <LikeCounter />
            </div>

            <div className='text-center mt-5'>
                <button className='btn btn-outline-warning' onClick={() => { setAbierto(false) }}>
                    Cerrar Card
                </button>
            </div>
        </div>
    ) : (
        <button className='btn btn-outline-warning' onClick={() => { setAbierto(true) }} >
            <h3>Abrir Card</h3>
        </button>
    )
}

export default Modal