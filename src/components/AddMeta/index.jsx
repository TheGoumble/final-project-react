import { useState, useContext, useEffect } from "react"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import ToggleButton from "react-bootstrap/ToggleButton"
import { useParams } from "react-router-dom"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { MetaContext } from "../../context/MetaContext"
import "./addMeta.css"

// Remember to set up validation later

const InputGame = ({ gameName, game, setGame }) => {
  useEffect(() => {
    if (gameName) {
      setGame(gameName)
      console.log(gameName)
    }
  }, [])
  if (gameName) {
    return null
  }
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Game</Form.Label>
      <Form.Control
        type="text"
        placeholder="Pac-man"
        value={game}
        onChange={(e) => setGame(e.target.value)}
      />
    </Form.Group>
  )
}

const AddMeta = () => {
  const { gameName } = useParams()
  const { addMeta } = useContext(MetaContext)
  const [show, setShow] = useState(false)

  const [username, setUsername] = useState()
  const [game, setGame] = useState()
  const [meta, setMeta] = useState()
  const [metaType, setMetaType] = useState(null)

  const newMeta = (e, username, game, meta, metaType) => {
    addMeta(e, username, game, meta, metaType)
    handleClose()
  }

  const types = ["good", "bad"]

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Post a Meta
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post a Meta</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="TheLegend27"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <InputGame game={game} gameName={gameName} setGame={setGame} />

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
              <ButtonGroup>
                {types.map((type, idx) => (
                  <ToggleButton
                    key={idx}
                    id={`type-${idx}`}
                    type="radio"
                    variant={idx % 2 ? "outline-danger" : "outline-success"}
                    name="type"
                    value={type}
                    checked={metaType === type}
                    onChange={(e) => setMetaType(e.currentTarget.value)}
                  >
                    {type}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Form.Group>
          </Form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={(e) => newMeta(e, username, game, meta, metaType)}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default AddMeta
