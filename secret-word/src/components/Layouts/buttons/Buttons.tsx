import { ButtonType } from "./interface"

const Button = ({type, text, style,action,  customClass}: ButtonType) => {

    return (
        <>
            <button onClick={action} className={`btn ${type} ${customClass}`} style={style}>{text}</button>
        </>
    )
}

export default Button