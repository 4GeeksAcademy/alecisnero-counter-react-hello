import React, {useState} from 'react'
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl"


const LikeCounter = () => {

    //def una variable y funcion que la modifica igualado al hook
    const [likeCounter, setLikeCounter] = useState(0)

  return (
    <div>
        {/* Aqui la variable que muestra los click de me gusta */}
        <h2>{likeCounter} likes</h2>
        {/* Def un contenedor span y le agrego un onClick que me va a modificar mi variana likeCounter */}
        <span onClick={()=> setLikeCounter(likeCounter + 1)} style={{cursor: 'pointer'}}><SlLike /></span>
        <span onClick={()=> setLikeCounter(likeCounter - 1)} style={{cursor: 'pointer'}}><SlDislike/></span>
    </div>
  )
}

export default LikeCounter