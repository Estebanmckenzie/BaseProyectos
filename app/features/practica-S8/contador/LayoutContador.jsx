import {useState} from 'react'
import { Contador1 } from './contador1/contador1'
import {Contador2 } from './contador2/contador2'
import { Registro } from "../registro/registro"; 

export function LayoutContador() {
    const [count, setCount] = useState(0)
    const [lista,setLista] = useState([])

        
    return (
        <>
        <Contador1 count={count} setCount={setCount}/>
        <Contador2 count={count} setCount={setCount}/>
        <Registro count={count} setCount={setCount} setLista={setLista} lista={lista}/>
        </>

    )
        
 }       
    
   

