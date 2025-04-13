import { Outlet } from "react-router-dom";
import { Cabecalho, Conteudo, Rodape } from "../../Components";
import { UseAppContext } from "../../hooks";


const LayoutPadrao = () => {
    const { criador } = UseAppContext();
    return (
        <>
            <Cabecalho nomeUsuario="Enzo" />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape criador={criador} />
        </>
    );
}
export { LayoutPadrao }