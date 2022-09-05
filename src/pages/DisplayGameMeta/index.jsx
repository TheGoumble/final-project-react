import React from "react"
import AddMeta from "../../components/AddMeta"
import MetaList from "../../components/MetaList"

const DisplayGameMeta = ({ getMetaList, setMetaList }) => {
  return (
    <>
      <AddMeta setMetaList={setMetaList} />
      <MetaList getMetaList={getMetaList} setMetaList={setMetaList} />
    </>
  )
}

export default DisplayGameMeta
