function useContador(setCount) {

    function handleIncrement() {
             setCount(prev => prev + 1)
            }
        
        function handleDecrement() {
            setCount(prev => prev - 1)}


    return{handleIncrement, handleDecrement}
}


export default useContador;