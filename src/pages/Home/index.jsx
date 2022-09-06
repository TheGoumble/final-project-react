import AddMeta from "../../components/AddMeta"
import GameButtons from "../../components/GameButtons"

const Home = () => {
  return (
    <>
    <h2>Check out the metas submited for the following games, or submit a meta you found</h2>
      <GameButtons />
      <br />
      <h2>Didn't find the game you were looking for? Start adding metas to it.</h2>
      <AddMeta/>
    </>
  )
}
export default Home
