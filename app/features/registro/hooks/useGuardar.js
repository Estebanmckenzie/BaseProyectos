import { useState } from "react";
import { CUPO_MAXIMO } from "../constants/registro.constants";

function useGuardar(lista, setLista) {

    const [nombre,setNombre] = useState('')

    const totalRegistrados = lista.length
    const cuposDisponibles = CUPO_MAXIMO - totalRegistrados
    const sinCupos = cuposDisponibles <= 0

    function handleGuardar(){

        if(sinCupos || !nombre.trim()) return

        setLista(prev => [...prev, {nombre}])
        setNombre('')
    }
    return {nombre, setNombre, handleGuardar, totalRegistrados, cuposDisponibles, sinCupos}

}

export default useGuardar
