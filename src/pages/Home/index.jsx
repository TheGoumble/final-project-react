import { useParams, Link } from "react-router-dom"
import { useContext } from "react"
import { MetaContext } from "../../context/MetaContext"

const Home = () => {
  const { gameName } = useParams()
  const { getMetaList } = useContext(MetaContext)
  let arr = []

  if (getMetaList) {
    for (let i = 0; getMetaList.length > i; i++) {
      const meta = getMetaList[i]
      if (!arr.includes(meta.game)) {
        arr.push(meta.game)
      }
    }
  }

  return (
    <>
      {arr.map((game) => {
        return (
          <Link key={game} to={`/meta/${game}`}>
            <button>{game}</button>
          </Link>
        )
      })}
    </>
  )
}
export default Home
