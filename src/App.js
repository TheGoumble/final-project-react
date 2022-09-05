import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import { useState } from "react"
import Home from "./pages/Home"
import DisplayGameMeta from "./pages/DisplayGameMeta"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [getMetaList, setMetaList] = useState()
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          index
          element={<Home getMetaList={getMetaList} setMetaList={setMetaList} />}
        />
        <Route
          path="meta"
          element={
            <DisplayGameMeta
              getMetaList={getMetaList}
              setMetaList={setMetaList}
            />
          }
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
