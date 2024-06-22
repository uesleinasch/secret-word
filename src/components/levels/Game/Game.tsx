import { Dispatch, SetStateAction } from "react"
import Button from "../../Layouts/buttons/Buttons"

const Game = ({setGaeStage}: {setGaeStage: Dispatch<SetStateAction<number>>}) => {
    const retryGame = () => {
        setGaeStage(2)
    }
    return (
        <>
            <h1>Game</h1>
            <Button action={() => setGaeStage(3)} text="End Game" type="secondary" />
            <Button action={() => retryGame} text="Start Game" type="primary" />
        </>
    )

}

export default Game