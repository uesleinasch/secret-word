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
import { useForm } from 'react-hook-form'
import Texts from "../../Layouts/texts/Texts"
import styles from './styles.module.css'

interface FormValues {
    word: string
}
const Game = ({ setGaeStage }: { setGaeStage: Dispatch<SetStateAction<number>> }) => {
    // Add react useForm
    const { handleSubmit, register, setValue } = useForm<FormValues>()
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
    }

    const defineGameWordView = (letters: string[]) => {
        const initialDisplayedWord = letters.map((l) => (l === ' ' ? ' ' : '_'));
        setDisplayedWord(initialDisplayedWord);
        setAttempts(letters.length + Math.floor(letters.length / 3));
    }

    const generateRandomWord = useCallback(() => {
        const categories = Object.keys(wordList)
        const category = categories[Math.floor(Math.random() * categories.length)]
        const word = wordList[category][Math.floor(Math.random() * wordList[category].length)]
        setGeneratedCategory(category)
        setGeneratedRandomWord(word)
        let letters = word.split('')
        letters = letters.map((l) => l.toLocaleLowerCase())
        setLetters(letters)
        defineGameWordView(letters)
    }, [])

    const startGame = useCallback(() => {
        resetGame()
        generateRandomWord()
    }, [generateRandomWord])

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

    const validatioLetters = (word: string) => {
        if (!generatedRandomWord.toLocaleLowerCase().includes(word.toLocaleLowerCase())) {
            return false;
        }
        return true;
    };

    const submit = (data: FormValues) => {
        setValue('word', '')
        setAttempts(attempts - 1)
        if (validatioLetters(data.word)) {
            setPickedLetters([...pickedLetters, data.word]);
            includeLetterInWord(data.word);
        }
    }

    const countLetter = () => {
        let resut =  0
        letters.map((l)=> {
            if(l !== ' ') resut += 1
        })
        return resut
    }

    useEffect(() => {
        startGame();
    }, [startGame]);

    return (
        <>
            <div className={styles.gameContainer}>
                <div className={styles.gameHeaer}>

                    <div className={styles.gameCardInfo}>
                        <div className="gameScore">
                            <Texts customClass={styles.scoreLabel} type={{ type: 'p' }} text={'Pontuação'} />
                            <Texts customClass={styles.scoreCount} type={{ type: 'p' }} text={`${points}`} />
                        </div>
                    </div>

                    <div className={styles.gameCardInfo}>
                        <div className="gameScore">
                            <Texts customClass={styles.scoreLabel} type={{ type: 'p' }} text={'Letras'} />
                            <Texts customClass={styles.scoreCount} type={{ type: 'p' }} text={`${countLetter()}`} />
                        </div>
                    </div>

                    <div className={styles.gameCardInfo}>
                        <div className="gameScore">
                            <Texts customClass={styles.scoreLabel} type={{ type: 'p' }} text={'Tentativas'} />
                            <Texts customClass={styles.scoreCount} type={{ type: 'p' }} text={`${attempts}`} />
                        </div>
                    </div>
                </div>



                <Texts customClass={styles.tips} type={{ type: 'p' }} text={`Dica: ${generatedCategory}`} />

                <div className={styles.wordContainer}>
                    <div className="letters">{displayedWord}</div>
                </div>

                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit(submit)}>
                        <input  {...register('word', { required: true })} maxLength={1} type="text" />
                        <Button text="Jogar" type="secondary" />
                    </form>
                </div>
            </div>

            <Button action={() => setGaeStage(3)} text="End Game" type="secondary" />
            <Button action={() => startGame()} text="Nova Palavra" type="primary" />
        </>
    )

}

export default Game