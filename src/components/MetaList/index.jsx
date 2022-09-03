import { useEffect } from "react"
import MetaOptions from "../MetaOptions"


const MetaList = ({ getMetaList, setMetaList }) => {
  useEffect(() => {
    fetch("http://localhost:4046/get")
    // fetch("https://us-central1-final-project-api-jv.cloudfunctions.net/api/get")
      .then((results) => results.json())
      .then((data) => setMetaList(data))
      .catch((err) => console.error(err))
    console.log("getting data")
  }, [setMetaList])

  const getList = getMetaList?.map((meta) => {
    return (
      <div key={meta._id}>
        <h3>Username: {meta.username}</h3>
        <h4>Game: {meta.game}</h4>
        <h5>Meta: {meta.meta}</h5>
        <MetaOptions setMetaList={setMetaList} id = {meta._id} />
      </div>
    )
  })


  // if (!getMetaList) {
  //   return <h2>No Metas on this page</h2>
  // }

  return (
    <>
      {getList}
    </>
  )
}

export default MetaList
