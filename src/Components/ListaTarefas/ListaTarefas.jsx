import { UseAppContext } from "../../hooks";
import { Loading } from "../Loading";
import { ListaItem } from "./ListaItem";
import style from './ListaTarefa.module.css'

const ListaTarefas = () => {
    const { tarefas, loadingCarregar } = UseAppContext();
    return (
        <ul className={style.ListaTarefa}>
            {loadingCarregar && (
                <p>Carregando... <Loading /></p>
            )}

            {!loadingCarregar && !tarefas.length && (
                <p>Não há tarefas cadastradas</p>
            )}

            {!loadingCarregar && tarefas.map(item => (
                <ListaItem key={item.id} id={item.id} nome={item.nome} />
            ))}
        </ul>

    )
};

export { ListaTarefas };