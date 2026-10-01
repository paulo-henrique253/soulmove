import { Route, Routes } from "react-router"
import MainLayout from "./layouts/MainLayout"
import Index from "./pages/Index"
import Sobre from "./pages/Sobre"
import Funcionalidades from "./pages/Funcionalidades"
import Roadmap from "./pages/Roadmap"
import Integrantes from "./pages/Integrantes"
import Faq from "./pages/Faq"
import Contato from "./pages/Contato"
import Integrante from "./pages/Integrante"
import SmCarteira from "./pages/SmInicio"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route path="/aplicacao" element={<SmInicio />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/integrantes/:slug" element={<Integrante />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    </Routes>
  )
}

export default App
