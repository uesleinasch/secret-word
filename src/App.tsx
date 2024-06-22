import {  useCallback, useState } from 'react'
import './App.css'
import HomeGame from './components/Layouts/homeGame/HomeGame'
import Game from './components/levels/Game/Game'
import EndGame from './components/levels/EndGame/EndGame'
import { stages } from './shared/controls'
import wordList from './data/words'



function App() {
  const [gaeStage, setGaeStage] = useState<number>(stages.home.id)
  const [pickedWord, setPickedWord] = useState<string>('')
  const [pickedCategory, setPickedCategory] = useState<string>('')
  const [letters, setLetters] = useState<string[]>([])
  //create use memo 

  const words = useCallback(() => {
    const categories = Object.keys(wordList)
    const category = categories[Math.floor(Math.random() * categories.length)]
    setPickedCategory(category)
  }, [])

  const startGame = (stage: 1 | 2 | 3) => {
    words()
    setGaeStage(stage)
  }


  return (
    <>
      {gaeStage === 1 && <HomeGame setGaeStage={setGaeStage} />}
      {gaeStage === 2 && <Game   setGaeStage={setGaeStage}/>}
      {gaeStage === 3 && <EndGame setGaeStage={setGaeStage} />}     
    </>
  )
}

export default App
