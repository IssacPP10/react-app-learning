import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
// import App from "./App";
// import { Product, UserCard } from "./Product";
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="centrado">
    {/* <App /> */}
    {/* <Product title="Hola React!" name="Margarito" /> */}
    {/* <Product title="Hola Issac!" />
    <UserCard
      name="José Maria Morelos"
      amount={1000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "Calle 13", city: "New York México", number: 13 }}
    />
    <UserCard
      name="Martin Orozco Mendez"
      amount={3000}
      married={false}
      points={[99, 33.3, 22.2]}
      address={{ street: "Calle 46", city: "New Orleands México", number: 22 }}
    /> */}
    <Button text="Click Me"/>
    <Button text="Pay"/>
    <Button text="Go To"/>
  </div>
);
