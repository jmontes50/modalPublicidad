import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Publicidad from "./Publicidad";

export default function App() {
  const [show, setShow] = useState(false);
  const [cargo, setCargo] = useState({
    Cargo: "cargo ejemplo"
  });

  const handleClose = () => setShow(false);
  const manejarCrear = () => {
    setShow(true);
    setCargo({ ...cargo, Cargo: "" });
  };

  const manejarEditar = (id) => {
    //loading/true
    //pides data a mockapi (id)
    setCargo({ ...cargo, Cargo: "Data de Mockapi" });
    //loading/false
    setShow(true);
    //actualizarInput("cargo", data recibida de mockapi)
  };

  return (
    <div className="App">
      <Button variant="primary" onClick={manejarCrear}>
        crear
      </Button>

      <Button variant="danger" onClick={manejarEditar}>
        editar
      </Button>

      <h1>Tenderness</h1>
      <div style={{ height: "1000px" }}></div>
      <Publicidad />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                type="text"
                class="form-control"
                value={cargo.Cargo}
                onChange={(e) => {
                  setCargo(e.target.value);
                }}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
