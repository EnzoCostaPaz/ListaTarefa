import style from './ListaItem.module.css';

import { Botao, CampoTexto, Loading, TIPO_BOTAO } from '../../../Components';
import { UseAppContext } from '../../../hooks';
import { useState } from 'react';

const ListaItem = (props) => {
    const { id, nome } = props;

    const [estaEditando, setEditando] = useState(false)

    const { loadingDeletar,loadingEditar,editarTarefa, removerTarefa } = UseAppContext();

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value
        editarTarefa(id, nomeTarefa);
        setEditando(false);
    }

    const loadingestaEditando = loadingDeletar == id;
    const loadingestaDeletar = loadingEditar == id;


    return (
        <li className={style.ListaItem}>{(loadingestaEditando || estaEditando) && (
            <CampoTexto
                defaultValue={nome}
                onBlur={onBlurTarefa}
                autoFocus />
        )}
            {!estaEditando && (
                <span onDoubleClick={() => setEditando(true)}>{nome}</span>
            )}

            {loadingestaEditando && (
                <Loading/>
            )}
            <Botao texto={loadingestaDeletar ? <Loading/> : '-'} tipo={TIPO_BOTAO.SECUNDARIO} onClick={() => removerTarefa(id)} />
        </li>
    );
}
export { ListaItem }