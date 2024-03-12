import React, {useState, useEffect} from 'react'

const Counter = () => {

    //creo el array segundo y le paso un estado 0.
    const[seconds, setSeconds] = useState(0)

    //creo el array digit y le paso un estado de (0.0.0.0)
    const[digits, setDigits] = useState([0,0,0,0])

    //luego, defino el useEfFect para que se muestre por pantalla automaticamente y defino mi funcion de inicio

    useEffect(()=>{
        //defino un constante que me guarda un funcion 
        const interval = setInterval(()=>{
            //defino un variable donde me va a recibi el segundo y luego me convierte a string, una vez asi, pasa por el padStart que se complementa los cero de accuerdo al numero inciar y luego le aplico el metodo split que me regresar un array con el corte(""), ['0','0'... asi sucesivamente]
            const digitsArray = seconds.toString().padStart(4, '0').split('')

            //luego, le paso esa variable a mi funcion setDigital que se encarga de cambiar el estado de reloj
            setDigits(digitsArray)

            //luego a mi setSeconds esta encargada de aumenta o disminuir el numero
            setSeconds((prevSeconds)=> prevSeconds + 1)

          
        }, 1000)

        //este return funciona para no dejar en automatico el useEffect si nos salimos de la pagina, asi este return lo detiene
        return () => clearInterval(interval)
    },[seconds])

      const reiniciarContador = () => {
        setDigits(0)
        setSeconds(0)
      }

  return (
    <div>
        <p style={{fontSize: '200px'}}>{digits[0]}{digits[1]}:{digits[2]}{digits[3]}</p>
        <button className='btn btn-outline-primary' onClick={reiniciarContador}>Reiniciar</button>
    </div>
  )
}

export default Counter