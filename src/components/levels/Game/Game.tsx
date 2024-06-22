/**
 * Renders the Game component.
 *
 * @param {Object} props - The props object.
 * @param {Dispatch<SetStateAction<number>>} props.setGaeStage - The function to set the GaeStage state.
 * @return {JSX.Element} The rendered Game component.
 */
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react"
import Button from "../../Layouts/buttons/Buttons"
import wordList from "../../../data/words"

const Game = ({ setGaeStage }: { setGaeStage: Dispatch<SetStateAction<number>> }) => {
    const [generatedWord, setReneratedWord] = useState<string>('')
    const [generatedCategory, setGeneratedCategory] = useState<string>('')
    const [letters, setLetters] = useState<string[]>([])


   /**
    * Randomizes the word and updates the state.
    */
    const randomWord = useCallback(() => {
        const categories = Object.keys(wordList)
        const category = categories[Math.floor(Math.random() * categories.length)]
        const word = wordList[category][Math.floor(Math.random() * wordList[category].length)]
        setGeneratedCategory(category)
        setReneratedWord(word)
        let letters = word.split('')
        letters = letters.map((l) => l.toLocaleLowerCase())
        setLetters(letters)
    }, [])



    return (
        <>
            <h1>Game</h1>
            <Button action={() => setGaeStage(3)} text="End Game" type="secondary" />
            <Button action={() => randomWord()} text="Generate Word" type="primary" />
        </>
    )

}

export default Game