import { Dispatch, SetStateAction } from "react"
import Button from "../../Layouts/buttons/Buttons"

const EndGame = ({setGaeStage}: {setGaeStage: Dispatch<SetStateAction<number>>}) => {
    const goHome = () => {
        setGaeStage(2)
    }
    return (
        <>
            <h1>End Game</h1>
            <Button action={goHome } text="Start Game" type="primary" />
            <Button action={() => setGaeStage(1)} text="Home" type="secondary" />
        </>
    )
}

export default EndGame