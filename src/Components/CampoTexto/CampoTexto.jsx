import style from './campoTexto.module.css'
const CampoTexto = (props) => {
    return(
        <input type="text" 
        className={style.campoTexto} {...props}/>
    )
}
export { CampoTexto };