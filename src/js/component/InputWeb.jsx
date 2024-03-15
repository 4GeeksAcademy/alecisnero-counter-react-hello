import React, { useState, useEffect } from 'react'
import { CiClock2 } from "react-icons/ci";

const InputWeb = () => {
  //defino una var y funcion, igualo al hook useState
  const [seg, setSeg] = useState(0)
  const [min, setMin] = useState(0)
  const [hour, setHour] = useState(0)
  const [activeButton, setActiveButton] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const boton = () => {
    setActiveButton(!activeButton)
  }

  const reiniciar = (e) => {
    setSeg(0)
    setMin(0)
    setHour(0)
    setActiveButton(false)
    setIsVisible(false)
  }

  if (hour == 0 && min == 0 && seg == -1) {
    setActiveButton(false)
    setSeg(0)
    setMin(0)
    setHour(0)
    setIsVisible(true)
  }

  else if (activeButton) {

    if (seg == -1) {
      setSeg(59)
      setMin(min - 1)
    }

    else if (min == -1) {
      setMin(59)
      setHour(hour - 1)
    }

    else if (hour == -1) {
      setHour(0)
    }
  }






  useEffect(() => {
    let intervalo = 0
    if (activeButton) {
      intervalo = setInterval(() => {
        setSeg(seg - 1)
      }, 1000)
    } else {
      clearInterval(intervalo)
    }

    return () => clearInterval(intervalo)
  }, [activeButton, seg])

  return (
    <div>
      <div className='d-flex justify-content-center mt-5'>
        <div className='card  text-center'>
          <div className='card-header'>
            <h3>Cronometro Personalizado</h3>
          </div>

          <div className='card-body bg-dark mt-5 mb-5'>
            <h3 className='display-1' style={{ color: 'white' }}>
              <CiClock2 /> {hour < 10 ? `0${hour}` : hour}:{min < 10 ? `0${min}` : min}:{seg < 10 ? `0${seg}` : seg}</h3>
          </div>

          {/* ALERT */}
          {isVisible && (
              <div class="alert alert-warning" role="alert">
                Su Tiempo ha Finalizado!
              </div>
            )}

          <div>
            <input type="number"

              placeholder='Ingresa la Horas'
              onChange={(e) => { setHour(e.target.value)} }
            />
            <input type="number"

              placeholder='Ingresa los Minutos'
              onChange={(e) => { setMin(e.target.value)}}
            />
            <input type="number"

              placeholder='Ingresa los Segundos'
              onChange={(e) => { setSeg(e.target.value) } }
            />
          </div>
          <div className='card-footer d-flex justify-content-around'>
            <button className='btn btn-success' onClick={reiniciar}>Reiniciar</button>
            <button type="reset" className={`btn ${activeButton ? 'btn-danger' : 'btn-outline-success'}`} onClick={boton}>{activeButton ? 'Pausar' : 'Iniciar'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputWeb