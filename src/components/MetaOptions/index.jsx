import { useContext } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import "./metaOptions.css"
import EditMeta from "../EditMeta"
import DeleteMeta from "../DeleteMeta"

const MetaOptions = ({ id }) => {

  return (
    <Dropdown className="d-inline mx-2">
      <Dropdown.Toggle id="option">Options</Dropdown.Toggle>

      <Dropdown.Menu>
        <EditMeta id={id}/>
        <DeleteMeta id={id} />
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default MetaOptions
