import { useContext } from "react"
import {DataContext} from "./Context"

export function User (){

    const {item} = useContext(DataContext)
    return(
        <>
        <h1>{item}</h1>
        </>
    )
}