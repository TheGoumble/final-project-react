import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import MetaContextProvider from "./context/MetaContext"
import Home from "./pages/Home"
import DisplayGameMeta from "./pages/DisplayGameMeta"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import "./App.css"
import LavaLamp from "./components/LavaLamp"

function App() {
  return (
    <body>
      <BrowserRouter>
        <MetaContextProvider>
          <Header/>
          <LavaLamp />
          <Routes>
            <Route index element={<Home />} />
            <Route path=":gameName" element={<DisplayGameMeta />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </MetaContextProvider>
      </BrowserRouter>
    </body>
  )
}

export default App
