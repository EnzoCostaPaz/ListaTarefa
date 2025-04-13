import style from './conteudo.module.css';
const Conteudo = ({ children }) => {
    return(
        <div className={style.conteudo}>
            {children}
        </div>
    );
};

export { Conteudo }