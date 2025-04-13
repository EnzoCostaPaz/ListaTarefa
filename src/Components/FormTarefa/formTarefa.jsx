import { useState } from "react";
import { Botao, CampoTexto, Loading, TIPO_BOTAO } from "../../Components";
import style from './FormTarefa.module.css'
import { UseAppContext } from "../../hooks";
const FormTarefa = () => {
    const { AdicionarTarefa,loadingCriar } = UseAppContext();

    const [nomeTarefa, setNomeTarefa] = useState('');

    const onChangeNomeTarefa = (event) => {
     setNomeTarefa(event.currentTarget.value)
    };

    const submeterFormulario = (event) => {
        event.preventDefault();

        if (!nomeTarefa) {
           return;
        }

       AdicionarTarefa(nomeTarefa)

        setNomeTarefa('');
    }

    return (
        <form className={style.FormTarefa} onSubmit={submeterFormulario}>
            <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa} />
            <Botao texto={loadingCriar ? <Loading/>: '+'} />
        </form>
    );
};

export { FormTarefa };
