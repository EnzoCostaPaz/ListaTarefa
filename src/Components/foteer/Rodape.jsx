import style from './footer.module.css';

const Rodape = (props) => {
    const { criador } = props;

    const anoAt = (new Date()).getFullYear(); // <- parênteses aqui são essenciais

    return (
        <div className={style.Rodape}>
            React Basico - {anoAt} - {criador}
        </div>
    );
};

export { Rodape };
