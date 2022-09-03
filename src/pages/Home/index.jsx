import { useEffect } from "react"

const Home = ({ getMetaList, setMetaList }) => {
  useEffect(() => {
    fetch("http://localhost:4046/get")
      // fetch("https://us-central1-final-project-api-jv.cloudfunctions.net/api/get")
      .then((results) => results.json())
      .then((data) => setMetaList(data))
      .catch((err) => console.error(err))
    console.log("getting data")
  }, [setMetaList])


  let arr =[]
  if(getMetaList){
  for(let i=0; getMetaList.length > i; i++){
    const meta = getMetaList[i];
    if (!arr.includes(meta.game)) {
        arr.push(meta.game)
      }
  }
}

  return (
    <>
      {arr.map((gameName) => {
        return <button>{gameName}</button>
      })}
    </>
  )
}

export default Home
