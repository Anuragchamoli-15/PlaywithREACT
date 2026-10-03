import { useContext } from "react"
import { DataContext } from "./Context"

function Changer (){
    const {item,setItem} = useContext(DataContext)
    return(<>
    
    <button onClick={()=> setItem(item + 1)}>Count +</button>
    <button onClick={()=>setItem(item - 1)}>Count -</button>
    <button onClick={()=> setItem(0)}>Reset</button>
    </>)
}

export default Changer