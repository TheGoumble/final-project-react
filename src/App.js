import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import MetaContextProvider from "./context/MetaContext"
import Home from "./pages/Home"
import DisplayGameMeta from "./pages/DisplayGameMeta"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <MetaContextProvider>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="meta/:gameName" element={<DisplayGameMeta />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </MetaContextProvider>
    </BrowserRouter>
  )
}

export default App
