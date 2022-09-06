import { useContext } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import { MetaContext } from "../../context/MetaContext"

const MetaOptions = ({ id }) => {
  const { setMetaList, handleDelete } = useContext(MetaContext)

  return (
    <Dropdown className="d-inline mx-2">
      <Dropdown.Toggle id="dropdown-autoclose-true">Options</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item onClick={(e) => handleDelete(e, id)}>
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default MetaOptions
