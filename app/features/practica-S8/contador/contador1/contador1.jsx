import useContador from '../hooks/useContador'
import { CONTADOR_TEXT } from '../constants/contador.constants'


export function Contador1({count, setCount}) {

    const {handleIncrement, handleDecrement} = useContador(setCount)
        
    return (
        <>
        <h2>{CONTADOR_TEXT.CONTADOR}</h2> 
        <p>{count}</p>
        <button onClick={count < 5 ? handleIncrement : null}>{CONTADOR_TEXT.INCREMENTAR}</button>
        <button onClick={count > 0 ? handleDecrement : null}>{CONTADOR_TEXT.DECREMENTAR}</button>
        </>

    )
        
 }       
    
   

