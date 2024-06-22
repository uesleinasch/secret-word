import { Dispatch, SetStateAction } from "react"
import Button from "../../Layouts/buttons/Buttons"

const EndGame = ({setGaeStage}: {setGaeStage: Dispatch<SetStateAction<number>>}) => {
    return (
        <>
            <h1>End Game</h1>
            <Button action={() => setGaeStage(1) } text="Start Game" type="primary" />
        </>
    )
}

export default EndGame