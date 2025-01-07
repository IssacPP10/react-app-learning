export default function Greeting() {
  const react = "Mundo de React"
  const { nameComplete, edad } = { nameComplete: "Manuel Gomez", edad: 30 }
  const user = {
    name: "Issac",
    lastName: "Puentes",
    edad: 24,
    married: false
  }
  const married = true;
  return (
    <div className="centrado">
      <div>
      <h1>Hello, {react}! Aqui Vamos.....</h1>
      <br />
      <p>
        Mi nombre es {nameComplete} y tengo {edad} años, pero no lo aparento.
        <br />
        <span>¿Crees que estoy casado?</span>
        <br />
        R= Pues... {married ? "Estoy casado 🙂" : "No estoy casado 😆"}
      </p>
      <br />
      <h2>Esta es mi información:</h2>
      <ul>
        <li>Nombre: {user.name}</li>
        <li>Apellido: {user.lastName}</li>
        <li>Edad: {user.edad}</li>
        <li>¿Está casado?: {user.married ? "Sí" : "No"}</li>
      </ul>
      </div>
    </div>
  );
}
