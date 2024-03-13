import React, { useState, useEffect } from 'react'
import { CiClock2 } from "react-icons/ci";

const SecondsCounter = () => {
    //defino varios array
    const [seg, setSeg] = useState(0)
    const [min, setMin] = useState(0)
    const [hours, setHours] = useState(0)
    const [activado, setActivado] = useState(false)

    //funcion para cambiar el cronometro de activo a inactivo
    const activarYDesactivar = () => {
        setActivado(!activado)
    }

    //funcion para reiniciar el cronometro
    const reiniciar = () => {
        setSeg(0)
        setMin(0)
        setHours(0)
        setActivado(false)
    }

    //condiciones para minutos y segundos
    if (seg >= 60) {
        setSeg(0)
        setMin(min + 1)
    }

    if (min >= 60) {
        setMin(0)
        setHours(hours + 1)
    }

    useEffect(() => {
        let interval = 0
        if (activado) {
            interval = setInterval(() => {
                setSeg(seg + 1)
            }, 1000)
        } else if (!activado) {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [activado, seg])




    return (
        <div className='row d-flex justify-content-center mt-5 text-center'>
            <div className='card w-75'>
                <div className='card-header'>
                    <h3>Cronometro</h3>
                </div>
                <div className='card-body bg-dark'>
                    <h3 className='display-1' id='hours' style={{color: 'white'}}><CiClock2 /> {(hours < 10) ? `0${hours}` : hours}:{(min < 10) ? `0${min}` : min}:{(seg < 10) ? `0${seg}` : seg}</h3>
                </div>
                <div className='card-footer d-flex justify-content-around'>
                    <button className='Iniciar btn btn-success' onClick={activarYDesactivar}>{activado ? 'Pausar' : 'Iniciar'}</button>
                    <button className='btn btn-success' onClick={reiniciar}>Reiniciar</button>
                </div>
            </div>
        </div>
    )
}

export default SecondsCounter