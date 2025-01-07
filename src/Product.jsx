// Los props son parametros que se le pasan a un componente para que este pueda renderizar de manera dinamica y personalizada
export function Product({ title, name = "Username" }) {
  console.log(title, name);
  return (
    <div className="centrado">
      <h1>
        {title}... dice: {name}
      </h1>
    </div>
  );
}

export function UserCard(props) {
  console.log(props);
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        textAlign: "center",
        margin: "100px",
      }}
    >
      <h1>{props.name}</h1>
      <h2>💵{props.amount}</h2>
      <h2>{props.married ? "💍 Married" : "👤 Single"}</h2>
      <h2>
        <div>
          <ul style={{ listStyle: "none" }}>
            <li>
              <span style={{ color: "#FFEB00" }}>City:</span>{" "}
              {props.address.city}
            </li>
            <li>
              <span style={{ color: "#FFEB00" }}>Street:</span>{" "}
              {props.address.street}
            </li>
            <li>
              <span style={{ color: "#FFEB00" }}>Number:</span>{" "}
              {props.address.number}
            </li>
          </ul>
        </div>
      </h2>
    </div>
  );
}
