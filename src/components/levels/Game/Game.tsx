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
import { set, useForm } from 'react-hook-form'

interface FormValues {
    word: string
}
const Game = ({ setGaeStage }: { setGaeStage: Dispatch<SetStateAction<number>> }) => {
    // Add react useForm
    const {handleSubmit, register, setValue} = useForm<FormValues>()
    const [generatedRandomWord, setGeneratedRandomWord] = useState<string>('')
    const [generatedCategory, setGeneratedCategory] = useState<string>('')
    const [letters, setLetters] = useState<string[]>([])
    const [points, setPoints] = useState<number>(0)
    //limite de tentativa
    const [attempts, setAttempts] = useState<number>(0)
    const [pickedLetters, setPickedLetters] = useState<string[]>([])
    const [displayedWord, setDisplayedWord] = useState<string[]>([]);


    const resetGame = () => {
        setPickedLetters([])
        setPoints(0)

    }

   /**
    * Randomizes the word and updates the state.
    */
    const randomWord = useCallback(() => {
        resetGame()
        const categories = Object.keys(wordList)
        const category = categories[Math.floor(Math.random() * categories.length)]
        const word = wordList[category][Math.floor(Math.random() * wordList[category].length)]
        setGeneratedCategory(category)
        setGeneratedRandomWord(word)
        let letters = word.split('')
        letters = letters.map((l) => l.toLocaleLowerCase())
        setLetters(letters)
        const initialDisplayedWord = letters.map((l) => (l === ' ' ? ' ' : '_'));
        setDisplayedWord(initialDisplayedWord);
        setAttempts(letters.length + 5) 
    }, [])



    /**
    * Updates the displayed word when a letter is guessed correctly.
    * @param {string} letter - The guessed letter.
    */
    const includeLetterInWord = (letter: string) => {
        const updateDisplayedWord = [...displayedWord]
        letters.forEach((l, index) => {
            if (l.toLocaleLowerCase() === letter.toLocaleLowerCase()) {
                updateDisplayedWord[index] = letter
                setPoints(points + 1)
            }
        })
        setDisplayedWord(updateDisplayedWord)
    }

    /**
     * Handles the form submission and updates the state accordingly.
     * 
     * @param {FormValues} data - The form data.
     * @returns {void}
     * @memberof Game
    */
    const submit = (data: FormValues) => {
        setValue('word', '')
        setAttempts(attempts - 1)
        if(validatioLetters(data.word)) {
            setPickedLetters([...pickedLetters, data.word]);
            includeLetterInWord(data.word);
        }
    }

    const validatioLetters = (word: string) => {
        if (!generatedRandomWord.toLocaleLowerCase().includes(word.toLocaleLowerCase())) {
            return false;
        }
        return true;
    };

    useEffect(() => {
        randomWord();
    }, [randomWord]);

    return (
        <>
            <h1>Game</h1>
            <div className="gameContainer">
                <div className="points">Pontos: {points}</div>
                <div className="attempts">Tentativas: {attempts}</div>
                <h2>Adivinhe a palavra: {generatedRandomWord}</h2>
                <h3>Dica sobre a palavra: {generatedCategory} </h3>
                <div className="wordContainer">
                    <div className="letters">{displayedWord}</div>
                </div>
                <div className="lettersContainer">
                    <form onSubmit={handleSubmit(submit)}>
                        <input  {...register('word', {required: true})} maxLength={1} type="text" />
                    <Button text="Jogar" type="secondary" />
                    </form>
                </div>
            </div>
            <Button action={() => setGaeStage(3)} text="End Game" type="secondary" />
            <Button action={() => randomWord()} text="Generate Word" type="primary" />
        </>
    )

}

export default Game