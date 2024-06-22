import { Dispatch, SetStateAction } from "react"
import Button from "../buttons/Buttons"
import Texts from "../texts/Texts"

const HomeGame = ({setGaeStage}: {setGaeStage: Dispatch<SetStateAction<number>>}) => {

    const startGame = () => {
        setGaeStage(2)
    }

    return (
        <>
            <Texts type={{type: 'h1'}} text={'Secret Word'}/>
            <Texts type={{type: 'h2'}} text={'Find the secret word'}/>
            <Button action={startGame} text="Start Game" type="primary" />
        </>
    )
}

export default HomeGame