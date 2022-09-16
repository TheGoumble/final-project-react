import { useState, useContext, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Dropdown from "react-bootstrap/Dropdown"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import ToggleButton from "react-bootstrap/ToggleButton"
import { useParams } from "react-router-dom"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import { MetaContext } from "../../context/MetaContext"

// Remember to set up validation later

const InputGame = ({ gameName, setGame }) => {
  useEffect(() => {
    if (gameName) {
      setGame(gameName)
      console.log(gameName)
    }
  }, [])
}

const EditMeta = ({ id }) => {
  const { gameName } = useParams()
  const { handleUpdate } = useContext(MetaContext)
  const [show, setShow] = useState(false)

  const [username, setUsername] = useState()
  const [game, setGame] = useState()
  const [meta, setMeta] = useState()
  const [metaType, setMetaType] = useState(null)

  const newMeta = (e, username, game, meta, metaType) => {
    handleUpdate(e, username, game, meta, metaType)
    console.log(metaType)
    handleClose()
  }

  const types = ["good", "bad"]

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Dropdown.Item onClick={handleShow}>Edit</Dropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Meta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
            onClick={(e) => newMeta(e, id, username, game, meta, metaType)}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default EditMeta
