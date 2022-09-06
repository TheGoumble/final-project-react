import React, { createContext, useState, useEffect, useContext } from "react"

export const MetaContext = createContext()
const MetaContextProvider = ({ children }) => {
  const [getMetaList, setMetaList] = useState()
  const [meta, setMeta] = useState()

  useEffect(() => {
    fetch("http://localhost:4046/get")
      // fetch("https://us-central1-final-project-api-jv.cloudfunctions.net/api/get")
      .then((results) => results.json())
      .then((data) => setMetaList(data))
      .catch((err) => console.error(err))
    console.log("getting data")
  }, [setMetaList])

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
  }

  const handleDelete = (e, id) => {
    fetch(`http://localhost:4046/delete/?_id=${id}`, {
      // fetch(`https://us-central1-final-project-api-jv.cloudfunctions.net/api/delete/?_id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMetaList(data))
      .catch((err) => console.error(err))
    console.log("Post Deleted")
  }

  return (
    <MetaContext.Provider value={{getMetaList, setMetaList, addMeta, handleDelete}}>{children}</MetaContext.Provider>
  )
}

export default MetaContextProvider