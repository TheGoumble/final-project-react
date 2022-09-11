import { Link } from "react-router-dom"
import { useContext } from "react"
import { MetaContext } from "../../context/MetaContext"
import Button from "react-bootstrap/Button"

const GameButtons = () => {
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
          <Link key={game} to={`/${game}`}>
            <Button>{game}</Button>
          </Link>
        )
      })}
    </>
  )
}
export default GameButtons
