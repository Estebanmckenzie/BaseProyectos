import useContador from '../hooks/useContador'
import { CONTADOR_TEXT } from '../constants/contador.constants'


export function Contador2({count, setCount}) {

    const {handleIncrement, handleDecrement} = useContador(setCount)
        
    return (
        <>
        <h2>{CONTADOR_TEXT.CONTADOR}</h2> 
        <p>{count}</p>
        <button onClick={count < 5 ? handleIncrement : null}>{CONTADOR_TEXT.INCREMENTAR}</button>
        <button onClick={ handleDecrement} disabled={count <= 0}>
            {CONTADOR_TEXT.DECREMENTAR}
        </button>
        </>

    )
        
 }       
    
   

