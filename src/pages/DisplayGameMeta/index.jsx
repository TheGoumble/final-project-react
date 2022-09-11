import React from "react"
import AddMeta from "../../components/AddMeta"
import MetaList from "../../components/MetaList"
import "./displayGameMeta.css"

const DisplayGameMeta = () => {
  return (
    <section id="display">
      <AddMeta/>
      
      <MetaList/>
    </section>
  )
}

export default DisplayGameMeta
