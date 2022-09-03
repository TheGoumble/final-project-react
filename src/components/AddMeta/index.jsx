import { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"

const AddMeta = ({ setMetaList }) => {
  const [show, setShow] = useState(false)
  const [username, setUsername] = useState()
  const [game, setGame] = useState()
  const [meta, setMeta] = useState()

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const addMeta = (e, username, game, meta) => {
    // e.preventDefault()
    fetch("http://localhost:4046/post", {
    // fetch("https://us-central1-final-project-api-jv.cloudfunctions.net/api/post", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, game: game, meta: meta }),
    })
      .then((results) => results.json())
      .then((data) => {
        setMetaList(data)
        setMeta("")
      })
      .catch((err) => console.error(err))
    console.log("Added data")
    handleClose()
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Post a Meta
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post a Meta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="TheLegend27"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Game</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pac-man"
                onChange={(e) => setGame(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Meta</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe the Meta"
                rows={4}
                onChange={(e) => setMeta(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={(e) => addMeta(e, username, game, meta)}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default AddMeta
