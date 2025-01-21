import React, { useState } from "react";
import { VscCheckAll } from "react-icons/vsc";

export function Posts() {
  const [posts, setPosts] = useState([]);

  async function handleFetch() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setPosts(data.slice(0, 10));
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={handleFetch} className="btn-style">
        Traer datos
      </button>
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          color: "black",
        }}
      >
        <ul style={{ padding: "10px", listStyle: "none" }}>
          {posts.length > 0 ? (
            posts.map((post) => (
              <li 
                key={post.id}
                style={{
                    display: "flex",
                    alignItems: "center", // Alinea verticalmente
                    marginBottom: "5px", // Espacio entre cada elemento
                  }}
              >
                <VscCheckAll style={{  marginRight: "10px"}} /> {post.title}
              </li>
            ))
          ) : (
            <li
                style={{
                    display: "flex",                    
                    alignItems: "center"
                }}
            >
              <VscCheckAll style={{marginRight: "10px"}} />
              No hay posts disponibles
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
