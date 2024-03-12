import React, {useState, useEffect} from 'react'

const SecondsCounter = () => {
    //defino varios array
    const [seg, setSeg] = useState(0)
    const [min, setMin] = useState(0)
    const [hours, setHours] = useState(0)
    const [activado, setActivado] = useState(false)

    //funcion para cambiar el cronometro de activo a inactivo
    const activarYDesactivar = () =>{
        setActivado(prev => !prev)
    }

    //funcion para reiniciar el cronometro
    const reiniciar = () => {
        setSeg(0)
        setMin(0)
        setHours(0)
        setActivado(false)
    }

    //condiciones para minutos y segundos
    if(seg >= 60){
        setSeg(0)
        setMin((prevMin) => prevMin + 1)
    }

    if(min >= 60){
        setMin(0)
        setHours((prevHours) => prevHours + 1)
    }

    useEffect(()=>{
        const intervalo = 0
        if(activado){
            intervalo = setInterval(()=>{
                setSeg((prevSeg) => prevSeg + 1)
            }, 1000)
        }else if (!activado){
            clearInterval(intervalo)
        }

        return () => clearInterval(intervalo)
    },[activado, seg])




    return(
        <div>
            <div className='card'>
                <div className='card-header'>
                    <h3>Cronometro</h3>
                </div>
                <div className='card-body'>
                    <p id='hours'>{(hours < 10) ? `0${hours}` : hours}:{(min < 10) ? `0${min}` : min}:{(seg < 10) ? `0${seg}` : seg}</p>
                </div>
                <div>
                    <button className='btn btn-outine-success' onClick={activarYDesactivar}>{activado ? 'Pausar' : 'Iniciar'}</button>
                    <button className='btn btn-success' onClick={reiniciar}>Reiniciar</button>
                </div>
            </div>
        </div>
    )
}

export default SecondsCounter