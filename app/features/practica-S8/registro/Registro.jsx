import useContador from '../contador/hooks/useContador'
import { REGISTRO_TEXT } from './constants/registro.constants'


export function Registro({count, setCount}) {

    const {handleIncrement} = useContador(setCount)

     
    return (
        <>
        <h2>{REGISTRO_TEXT.NOMBRE}</h2>
        <input type="text" placeholder={REGISTRO_TEXT.NOMBRE}/>
        <h2>{REGISTRO_TEXT.EDAD}</h2>
        <input type="text" placeholder={REGISTRO_TEXT.EDAD}/>
        <button onClick={handleIncrement}>{REGISTRO_TEXT.GUARDAR}</button>
        </>
    )
        
 }       
    
   

