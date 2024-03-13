import React, { useState, useEffect } from 'react'
import { CiClock2 } from "react-icons/ci";

const InputWeb = () => {
  //defino una var y funcion, igualo al hook useState
  const [seg, setSeg] = useState(0)
  const [min, setMin] = useState(0)
  const [hour, setHour] = useState(0)
  const [activarBoton, setActivarBoton] = useState(false)

  const boton = () => {
    setActivarBoton(!activarBoton)
  }



AGREGLAR AQUI




  if (seg >= 60) {
    setSeg(0)
    setMin(min + 1)
  }
  if (min >= 60) {
    setMin(0)
    setHour(hour + 1)
  }

  useEffect(() => {
    let intervalo = 0
    if (activarBoton) {
      intervalo = setInterval(() => {
        setSeg(seg - 1)
      }, 1000)
    } else if (!activarBoton) {
      clearInterval(intervalo)
    }

    return () => clearInterval(intervalo)
  }, [activarBoton, seg])

  return (
    <div>
      <div className='card w-75'>
        <div className='card-header'>
          <h3>Cronometro</h3>
        </div>
        <div className='card-body bg-dark'>
          <h3 className='display-1' id='hours' style={{color: 'white' }}><CiClock2 /> {(hour < 10) ?  `0${hour}` : hour}:{(min < 10) ?  `0${min}` : min}:{(seg < 10) ?  `0${seg}` : seg}</h3>
        </div>
        <div>
          <input type="text"
              
              placeholder='Ingresa los Segundos'
              onChange={(e)=>{setSeg(e.target.value)}}
              maxlength="2"
          />
          <input type="text"
              
              placeholder='Ingresa los Minutos'
              onChange={(e)=>{setMin(e.target.value)}}
              maxlength="2"
          />
          <input type="text"
              
              placeholder='Ingresa la Horas'
              onChange={(e)=>{setHour(e.target.value)}}
              maxlength="2"
          />
        </div>
        <div className='card-footer d-flex justify-content-around'>
          <button className='Iniciar btn btn-success' onClick={boton}>{activarBoton ? 'Pausar' : 'Iniciar'}</button>
         {/*  <button className='btn btn-success' onClick={reiniciar}>Reiniciar</button> */}
        </div>
      </div>


    </div>
  )
}

export default InputWeb