import { FormTarefa, ListaTarefas } from "../../Components";
import style from './inicial.module.css';
const Inicial = () => {
    return (
        <div className={style.inicial}>
            <FormTarefa />
            <ListaTarefas />
        </div>
    );
};

export { Inicial };
