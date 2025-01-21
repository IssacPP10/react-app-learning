import React from "react";

export function Users() {
  const users = [
    {
      id: 1,
      name: "Issac Puentes",
      image: "https://robohash.org/user1",
    },
    {
      id: 2,
      name: "Ricardo Palacios",
      image: "https://robohash.org/user2",
    },
  ];
  return (
    <div className="card-two">
      {users.map((user) => {
        return (
          <React.Fragment key={user.id}>
            <h3>{user.name}</h3>
            <img src={user.image} alt={user.id} width={100} height={100} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
