import { Routes, Route} from "react-router-dom";

import Home from "./pages/Home"
import Contato from "./pages/Contato";
import Empresa from "./pages/Empresa";
import NovoProjeto from "./pages/NovoProjeto";
import Projetos from "./pages/Projetos";

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/empresa" element={<Empresa />} />
                <Route path="/novo-projeto" element={<NovoProjeto/>} />
                <Route path="/projetos" element={<Projetos/>} />
            </Routes>
        </>
    );
}

export default AppRoutes;