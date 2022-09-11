import AddMeta from "../../components/AddMeta"
import GameButtons from "../../components/GameButtons"
import "./home.css"

const Home = () => {
  return (
    <section>
      <h2 className="home">
        Check out the metas submited for the following games, or submit a meta
        you found
      </h2>
      <div id="button">
        <GameButtons />
      </div>
      <div className="home">
        <h2>
          Didn't find the game you were looking for? Start adding metas to it.
        </h2>
        <AddMeta />
      </div>
    </section>
  )
}
export default Home
