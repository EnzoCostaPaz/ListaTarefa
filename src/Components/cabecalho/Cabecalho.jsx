import { Link } from 'react-router-dom';
import style from './Cabecalho.module.css'

const Cabecalho = () => {
    return (
        <div className={style.Cabecalho}>
            <Link to="/"> <h1>
                <span>Lista </span>
                de Tarefa
            </h1>
            </Link>


        <Link to="/sobrenos">
            Sobre Nós
        </Link>
        </div>
    );
};

export { Cabecalho };
