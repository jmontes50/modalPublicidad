import { useState } from "react";

export default function Publicidad() {
  const [esconder, setEsconder] = useState(false);
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "400px",
        height: "300px",
        border: "1px solid blue",
        zIndex: 10,
        display: esconder ? "none" : null
      }}
    >
      <h3>Ve nuestras nuevas ofertas</h3>
      <button class="btn btn-success">Desde 50% de Dscto!!</button>
      <button
        class="btn btn-danger"
        onClick={() => {
          setEsconder(true);
        }}
      >
        X
      </button>
    </div>
  );
}
