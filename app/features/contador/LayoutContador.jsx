import {useState} from 'react'
import { CONTADOR_TEXT } from './constants/contador.constants'
export function LayoutContador() {
    const [count, setCount] = useState(0)

    function handleIncrement() {
         setCount(prev => prev + 1)
        }
    
    function handleDecrement() {
        setCount(prev => prev - 1)}
        
    return (
        <>
        <h2>{CONTADOR_TEXT.CONTADOR}</h2> 
        <p>{count}</p>
        <button onClick={count < 5 ? handleIncrement : null}>{CONTADOR_TEXT.INCREMENTAR}</button>
        <button onClick={count > 0 ? handleDecrement : null}>{CONTADOR_TEXT.DECREMENTAR}</button>
        </>

    )
        
 }       
    
   

