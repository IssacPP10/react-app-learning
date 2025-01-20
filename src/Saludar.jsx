// A modo informativo, esta es otra manera de crear componentes, en vez de usar funciones
// utilizamos clases.

import { Component } from "react"

export class Saludar extends Component{
    render (){
        return (
            <h1 style={{margin: "10px"}}>Hello World!!!</h1>
        )
    }
}