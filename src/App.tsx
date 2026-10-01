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
import SmInicio from "./pages/app/SmInicio"
import SmCalculadora from "./pages/app/SmCalculadora"
import SmCarteira from "./pages/app/SmCarteira"
import SmMissoes from "./pages/app/SmMissoes"
import SmMissao from "./pages/app/SmMissao"
import SmPerfil from "./pages/app/SmPerfil"
import SmRecarga from "./pages/app/SmRecarga"
import SmConquistas from "./pages/app/SmConquistas"

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Index />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route path="roadmap" element={<Roadmap />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/integrantes/:slug" element={<Integrante />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/appInicio" element={<SmInicio />} />
        <Route path="/appCalculadora" element={<SmCalculadora />} />
        <Route path="/appCarteira" element={<SmCarteira />} />
        <Route path="/appMissoes" element={<SmMissoes />} />
        <Route path="/appMissoes/:slug" element={<SmMissao />} />
        <Route path="/appPerfil" element={<SmPerfil />} />
        <Route path="/appRecarga" element={<SmRecarga />} />
        <Route path="/appConquistas" element={<SmConquistas />} />
      </Route>
    </Routes>
  )
}

export default App
