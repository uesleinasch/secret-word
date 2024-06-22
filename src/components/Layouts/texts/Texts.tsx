import { CSSProperties } from "react"
import { TextType } from "./interfaces"

const Texts = ({type, text, style}: {type: TextType, text: string, style?: CSSProperties}) => {

    return (
        <>
            {type.type === 'h1' && <h1 style={style}>{text}</h1>}
            {type.type === 'h2' && <h2 style={style}>{text}</h2>}
            {type.type === 'p' && <p style={style}>{text}</p>}
        </>
    )
}

export default Texts