import React, { useState } from 'react'
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl"


const LikeCounter = () => {

  //def una variable y funcion que la modifica igualado al hook
  const [likeCounter, setLikeCounter] = useState(0)

  return (
    <div className='d-flex justify-content-end border rounded mt-3' style={{backgroundColor: '#bdbbbb'}}> 

      {/* Aqui la variable que muestra los click de me gusta */}
      <div className='d-flex justify-content-center align-items-center m-2 me-auto' style={{width: '100px'}}>
        <h2>{likeCounter} likes</h2>
      </div>

      {/* Def un contenedor span y le agrego un onClick que me va a modificar mi variana likeCounter */}
      <div className='d-flex'>
        <div className='border rounded d-flex justify-content-center bg-light align-items-center m-2' style={{width: '100px', cursor: 'pointer', fontSize: '130%'}} onClick={() => setLikeCounter(likeCounter + 1)}>
          <SlLike />
        </div>

        <div className='border rounded d-flex justify-content-center bg-light align-items-center m-2' style={{width: '100px', cursor: 'pointer', fontSize: '130%'}}  onClick={() => setLikeCounter(likeCounter > 0 ? likeCounter - 1 : 0)}>
          <SlDislike />
        </div>
      </div>
    </div>
  )
}

export default LikeCounter