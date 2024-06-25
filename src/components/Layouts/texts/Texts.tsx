
import { TextInterface } from "./interfaces"

const Texts = ({type, text, style, customClass}: TextInterface) => {

    return (
        <>
            {type.type === 'h1' && <h1 className={customClass} style={style}>{text}</h1>}
            {type.type === 'h2' && <h2 className={customClass} style={style}>{text}</h2>}
            {type.type === 'p' && <p className={customClass} style={style}>{text}</p>}
        </>
    )
}

export default Texts