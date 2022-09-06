import { useEffect, useContext, useState } from "react"
import { MetaContext } from "../../context/MetaContext"
import { useParams } from "react-router-dom"
import MetaOptions from "../MetaOptions"

const MetaList = () => {
  const { gameName } = useParams()
  const { getMetaList } = useContext(MetaContext)
  const [game, setGame] = useState()

  useEffect(() => {
    console.log("this is my data", getMetaList)
    if (getMetaList) {
      const thisGame = getMetaList.filter((meta) => meta.game === gameName)
      console.log(thisGame)

      setGame(thisGame)
    }
  }, [gameName, getMetaList])

  const getList = game?.map((meta) => {
    if (game) {
      return (
        <div key={meta._id}>
          <h3>Username: {meta.username}</h3>
          <h4>Game: {meta.game}</h4>
          <h5>Meta: {meta.meta}</h5>
          <h5>{meta.meta_type} Meta</h5>
          <MetaOptions id={meta._id} />
        </div>
      )
    }
  })

  // if (!getMetaList) {
  //   return <h2>No Metas on this page</h2>
  // }

  return <>{getList}</>
}

export default MetaList
