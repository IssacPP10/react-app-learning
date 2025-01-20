import React from "react";
import "./task.css";

export function Task({ ready }) {
  // const cardStyles = {
  //   backgroundColor: "lightblue",
  //   padding: "25px",
  //   color: "black",
  //   borderRadius: "15px",
  //   textAlign: "center",
  // };
  return (
    <div className="card-one">
      <h1 style={{ fontWeight: "bolder", fontSize: "68px", margin: "10px" }}>Mi primer Task</h1>
      <span
        // Se utiliza dando estilos directos en la etiqueta
        // style={
        //   ready
        //     ? { color: "white", background: "green", padding: "5px", borderRadius: "10px" }
        //     : { color: "white", background: "red", padding: "5px", borderRadius: "10px" }
        // }
        // Se utiliza usando clases de estilo
        className={ready ? 'bg-green' : 'bg-red'}
      >
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
