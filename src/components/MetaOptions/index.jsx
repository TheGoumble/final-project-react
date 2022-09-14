import { useContext } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import { MetaContext } from "../../context/MetaContext"
import "./metaOptions.css"

const MetaOptions = ({ id }) => {
  const { setMetaList, handleDelete } = useContext(MetaContext)

  return (
    <Dropdown className="d-inline mx-2" >
      <Dropdown.Toggle id="option">Options</Dropdown.Toggle>

      <Dropdown.Menu>
        {/* <Dropdown.Item>Edit</Dropdown.Item> */}
        <Dropdown.Item onClick={(e) => handleDelete(e, id)}>
          Delete
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default MetaOptions
