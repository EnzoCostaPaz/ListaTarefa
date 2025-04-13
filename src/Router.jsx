import { Route,Routes } from "react-router-dom";
import { Inicial,SobreNos,Pagina404 } from './pages';
import { LayoutPadrao } from "./Layouts";
const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
            <Route path="/" element={<Inicial />}/>
            <Route path="/sobrenos" element={<SobreNos />}/>
            <Route path="*" element={<Pagina404 />} />
            </Route>
        </Routes>
    );
};
export { Router }