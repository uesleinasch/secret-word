import { ButtonType } from "./interface"
import styles from './styles.module.css'
const Button = ({type, text, style,action,  customClass}: ButtonType) => {

    return (
        <>
            <button onClick={action} className={styles[type + `Btn`] + ' ' + customClass} style={style}>{text}</button>
        </>
    )
}

export default Button