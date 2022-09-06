import { useContext } from "react"
import Dropdown from "react-bootstrap/Dropdown"
import { MetaContext } from "../../context/MetaContext"

const MetaOptions = ({ id }) => {
  const { setMetaList, handleDelete} = useContext(MetaContext)
  // const handleDelete = (e) => {
  //   fetch(`http://localhost:4046/delete/?_id=${id}`, {
  //     // fetch(`https://us-central1-final-project-api-jv.cloudfunctions.net/api/delete/?_id=${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setMetaList(data))
  //     .catch((err) => console.error(err))
  //   console.log("Post Deleted")
  // }


  // const handleUpdate = (e) => {
  //   const updateMeta = { goodMeta: false }

  //   fetch("http://localhost:4040?game=super mario", {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updateMeta),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setMetaList(data))
  //     .catch((err) => console.error(err))
  //   console.log("Added data")
  // }

  return (
    <Dropdown className="d-inline mx-2">
      <Dropdown.Toggle id="dropdown-autoclose-true">Options</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Edit</Dropdown.Item>
        <Dropdown.Item onClick={(e) => handleDelete(e, id)}>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default MetaOptions
