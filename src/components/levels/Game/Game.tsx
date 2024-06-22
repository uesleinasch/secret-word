import { Dispatch, SetStateAction } from "react"
import Button from "../../Layouts/buttons/Buttons"

const Game = ({setGaeStage}: {setGaeStage: Dispatch<SetStateAction<number>>}) => {
    return (
        <>
            <h1>Game</h1>
            <Button action={() => setGaeStage(3)} text="End Game" type="secondary" />
            <Button action={() => setGaeStage(1)} text="Start Game" type="primary" />
        </>
    )

}

export default Game