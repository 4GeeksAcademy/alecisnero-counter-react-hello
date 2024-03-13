import React, { useState, useEffect} from 'react'

const HoraWeb = () => {
    //creo una variable y funcion igualando un useState, que a su vez ese useState le paso un nuevo metodo DAte() con el metodo .toLocaleTimeString para que me devuelva la hora de cada pais en string
    const [hora, setHora] = useState(new Date().toLocaleTimeString())

    //ahora, creq un useEffect para automatizar la hora en pagina, es decir, que se muestre al iniciar a pagina

    useEffect(()=>{
        //creo un variable que me va a almacenar una funcion setInterval, el cual es la responsable modificarme mi funcion setHora para que por cada milisegundo me devuelva el tiempo actual del reloj
        const intervalo = setInterval(()=>{
          //aqui modifico el setHora 
          setHora(new Date().toLocaleTimeString())
        }, 1000)
        return clearInterval(intervalo)

    },[])

  return (
    <div>Su hora actual es: {hora}</div>
  )
}

export default HoraWeb