import { REGISTRO_TEXT } from './constants/registro.constants'
import useGuardar from './hooks/useGuardar'

export function LayoutRegistro({lista, setLista}){

    const {nombre, setNombre, handleGuardar, totalRegistrados, cuposDisponibles, sinCupos} = useGuardar(lista, setLista)

    return (
        <>
        <h2>{REGISTRO_TEXT.NOMBRE}</h2>
        <input
        type='text'
        placeholder={REGISTRO_TEXT.NOMBRE}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        disabled={sinCupos}
        ></input>

        <button onClick={handleGuardar} disabled={sinCupos}>{REGISTRO_TEXT.GUARDAR}</button>

        <p>{REGISTRO_TEXT.REGISTRADOS}: {totalRegistrados}</p>
        <p>{REGISTRO_TEXT.CUPOS}: {cuposDisponibles}</p>
        {sinCupos && <p>{REGISTRO_TEXT.SIN_CUPOS}</p>}

        <ul>
            {lista.map((persona, index) => (
                <li key={index}>{persona.nombre}</li>
            ))}
        </ul>
        </>
    )

}
